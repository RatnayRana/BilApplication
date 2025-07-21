import AuthHeader from '../../../component/AuthHeader';

import React, { useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { useMutation } from '@tanstack/react-query';
import EncryptedStorage from 'react-native-encrypted-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackNavigatorParamsList } from '../../../component/interface/routeinterface';
import { ERPURL } from '../../../component/APIURL/ERP/erpurl';
import { AuthAttributes } from '../../../interface/auth/auth.interface';
import apiClient from '../../../post/postapi';
import Wrapper from '../index';
import LoaderCompoment from '../../../component/Loader/index.loader';
import AuthForm from './signinmemo';
import { styles } from './styles';
import { authFields } from '../../../utils/InputFields/AuthInput';
import CustomDialog from '../../../component/DialogBox/dialogbox';
import { AxiosError } from 'axios'; // Ensure AxiosError is imported
import TextCompoment from '../../../component/TextComponent/index.text';
import { colors } from '../../../utils/color';

type SignInProps = NativeStackScreenProps<
  RootStackNavigatorParamsList,
  'SignIn'
>;

const SignIn: React.FC<SignInProps> = ({ navigation }) => {
  const [openStart, setOpenStart] = useState(true);
  const [servError, setServerError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  function handleClose() {
    setOpenStart(false);
  }

  function handleSuccess() {

    setShowSuccessDialog(false);
    navigation.navigate('Main');

  }

  const {
    mutateAsync,
    isPending,
    error,
    isSuccess,
    data: testdata,
  } = useMutation({
    mutationFn: async (credentials: AuthAttributes) => {
      try {
        console.log('crendentials', credentials)
        const data = await apiClient.post(ERPURL.login, credentials);
        console.log('dtydr', data)
        if (data) {
          await EncryptedStorage.setItem(
            'accessToken',
            JSON.stringify(data.data.data.accessToken),
          );

          setShowSuccessDialog(true);

        }

        return data;
        // eslint-disable-next-line no-catch-shadow, @typescript-eslint/no-shadow
      } catch (err) {
        const axiosError = err as AxiosError;

        // Check if it's an Axios error with a response
        if (axiosError.response && axiosError.response.data) {
          const errorResponse = axiosError.response.data as { error?: string };
          setErrorMessage(errorResponse.error || 'Something went wrong');
        } else {
          // Network error or server down
          setErrorMessage('Server is currently Down');
        }

        setServerError(true);
        throw err;
      }
    },
  });

  const handleSubmit = (values: AuthAttributes) => {
    // navigation.navigate('Main');
    setOpenStart(true); // Reset to make sure dialog shows again
    setServerError(false);
    mutateAsync(values);
  };

  return (
    <Wrapper>
      {(error || servError) && (
        <CustomDialog
          message={
            (error as unknown as axiosError)?.response?.data?.error ||
            errorMessage || 'Server Down'
          }
          color="#D32F2F"
          iconColor="#D32F2F"
          iconName="sticker-remove-outline"
          visible={openStart}
          onClose={handleClose}
        />
      )}

      {showSuccessDialog && (
        <CustomDialog
          message={testdata?.data.message || 'successFull'}
          color="#0AA06E"
          iconColor="#0AA06E"
          iconName="sticker-check-outline"
          visible={showSuccessDialog}
          onClose={handleSuccess}
        />
      )}


      <SafeAreaView>

        <ScrollView contentContainerStyle={styles.mainContainer}>
          <AuthHeader
            title={'Signin'}
            headerImage={styles.headerImage}
            content={' With your ERP Credientials'}
            titleStyle={styles.titleStyle}
            viewStyle={styles.viewStyle}
            contentStyle={styles.contentStyle}
          />

          <LoaderCompoment isLoading={isPending} />
          <AuthForm
            form={authFields}
            onSubmit={handleSubmit}
            isLoading={isPending}
            labelStyle={styles.labelStyle}
            placeholderStyle={styles.placeholder}
            inputStyle={styles.inputstyle}
            buttonStyle={styles.buttonStyle}
            labelButtonstyle={styles.labelButtonstyle}

          />
           <TextCompoment text='By Logging into eBIL, you agree to the' style={{marginTop:5}}/>
          <View style={{flex:1,flexDirection:'row', gap:12}}>
            <TouchableOpacity>
              <TextCompoment style={{color:colors.primary}} text='Terms & Conditions'/>
            </TouchableOpacity>
              <TouchableOpacity>
              <TextCompoment text='and' style={{}}/>
            </TouchableOpacity>
             <TouchableOpacity>
              <TextCompoment style={{color:colors.primary}} text='Privacy Policy'/>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </SafeAreaView>
    </Wrapper>
  );
};

export default SignIn;
