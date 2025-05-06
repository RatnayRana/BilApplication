import AuthHeader from '../../../component/AuthHeader';

import React, { useState } from 'react';
import { Platform, SafeAreaView, ScrollView } from 'react-native';
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
        const data = await apiClient.post(ERPURL.login, credentials);
        if (data) {
          await EncryptedStorage.setItem(
            'accessToken',
            JSON.stringify(data.data.data.accessToken),
          );

          setShowSuccessDialog(true);

        }

        return data;
        // eslint-disable-next-line no-catch-shadow, @typescript-eslint/no-shadow
      } catch (error) {
        if (error) {
          setErrorMessage((error as AxiosError)?.message);
          throw error;
        }
        setErrorMessage(
          (error as unknown as axiosError)?.response?.data?.error,
        );

        setServerError(true);

        throw error;
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
            errorMessage
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
          iconColor="#0AA06"
          iconName="sticker-check-outline"
          visible={showSuccessDialog}
          onClose={handleSuccess}
        />
      )}


      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.mainContainer}>
          <AuthHeader
            title={'Signin'}
            // style={styles.container}
            headerImage={styles.headerImage}
            content={' Kindly input your Credientials'}
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
        </ScrollView>
      </SafeAreaView>
    </Wrapper>
  );
};

export default SignIn;
