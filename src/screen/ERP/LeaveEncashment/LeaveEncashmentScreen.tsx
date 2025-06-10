/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Formik } from 'formik';
import Button from '../../../component/Button';
import Wrapper from '../../auth';

import NavComponent from '../../../component/NavComponent/navvomponent';

import { validationtravelSchema } from '../../auth/validation/signIn.validation';
import { renderField } from '../../../public/customfields/custom.fields';
import {
  TokenAttributes,
  tokenMiddleware,
} from '../../../public/middleware/token.middleware';
import { styles } from '../LeaveApplicationPage/style.leaveapplicationpage';

import { NavigationProp, useNavigation, useRoute } from '@react-navigation/core';
import { RootStackNavigatorParamsList } from '../../../component/interface/routeinterface';
import travelStyles from '../TravelApplicationScreen/style.travelapplication';
import { LeaveCashmentData } from '../../../interface/ERP/LeaveEncash/leaveEncashment';
import { LeaveEncashmentForm } from '../../../utils/erp/LeaveCashment/leavecashment';
import approvedLeaveStyles from '../../ApprovedFolder/ERP/Leave/style';

type RouteParams = {
  approveData?: {
    data: {
      basic_pay: string;
      casual_leave_balance: string;
      earned_leave_balance: string;
      employee_id: string;
      employee_name: string;
      financial_year: string;
      total_leave_balance: number;
    };
    message: string;
    status: number;
  };
  itemName?: string;
};

const LeaveEncashmentScreen: React.FC = () => {
  const routeData = useRoute();
  const params = routeData?.params as RouteParams;



  const [tokenData, setTokenData] = useState<TokenAttributes | undefined>(
    undefined,
  );
  const navigation = useNavigation<NavigationProp<RootStackNavigatorParamsList>>();


  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );
  const [openDialog, setOpenDialog] = useState(false);
  const [servError, setServerError] = useState(false);
  function handleClose() {
    setOpenDialog(!openDialog);
  }

  function handleSuccess() {
    setOpenDialog(!openDialog);
    navigation.goBack()

    // handleClose();
    // navigation.navigate('Main');
  }
  const getInitialValues = (): LeaveCashmentData => {
    if (params.approveData ) {
      const EncashmentData = params.approveData;
      return {
        employee_name: EncashmentData.data.employee_name || '',
        basic_pay: Number(EncashmentData.data.basic_pay) || 0,
        financial_year: EncashmentData.data.financial_year,
        casual_leave_balance: EncashmentData.data.casual_leave_balance || '',
        earned_leave_balance: EncashmentData.data.earned_leave_balance || '',
        total_leave_balance: Number(EncashmentData.data.total_leave_balance) || 0,
      };
    }
    return {
      employee_name: '',
      basic_pay: 0,
      financial_year: '',
      casual_leave_balance: '',
      earned_leave_balance: '',
      total_leave_balance: 0,
      
    };
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await tokenMiddleware();
      setTokenData(data);
    };
    fetchData();
  }, []);

//   const {
//     mutateAsync,
//     error,
//     isPending,
//     isSuccess,
//     data: testData,
//   } = useMutation({
//     mutationFn: async (credentials: CreateTravelAttributes) => {
//       try {
//         const response = await apiClient.post(ERPURL.createtravel, credentials);

//         if (response) {
//           setOpenDialog(true);

//           return response;
//         }

//         // eslint-disable-next-line no-catch-shadow
//       } catch (error) {

//         if (error) {
//           setErrorMessage((error as AxiosError)?.message);
//           throw error;
//         }
//         setErrorMessage((error as unknown as axiosError)?.response.data.error);
//         setServerError(true);

//         throw error;
//       }
//     },
//   });

  const onFormSubmit = (values: LeaveCashmentData) => {
    console.log(values)
  };



  return (
    <Wrapper>
      {/* <ErrorDialog
        error={error || servError}
        errormessage={
          (error as unknown as axiosError)?.response?.data?.error ||
          errorMessage
        }
        visible={openDialog}
        onClose={handleClose}
      />

      <LoaderComponent
        ispending={isPending}
        loaderStyle={styles.loaderStyle}
        name="BallPulseSync"
        width={50}
        height={50}
        color="blue"
        isLoading={true}
      />
      <SuccessDialog
        isSuccess={isSuccess}
        message={testData?.data.message || 'successFull '}
        visible={openDialog}
        onClose={handleSuccess}
      /> */}

      <NavComponent
        size={35}
        container1Style={styles.container1}
        headercontainerStyle={styles.headercontainer}
        subcontainerStyle={{}}
        width={24}
        backIcon={'chevron-back-sharp'}
        height={24}
        imageStyle={styles.imagev}
        textSytle={styles.text}
        text="Leave Encashment "
      />
      <ScrollView style={{ paddingHorizontal: 16, flexGrow: 1 }}>
        <Formik
          initialValues={getInitialValues()}
          validationSchema={validationtravelSchema}
          onSubmit={onFormSubmit}>
          {({ handleSubmit, values, setFieldValue, errors, touched }) => {
            
            return (
              <View>
                {LeaveEncashmentForm(
                  
                ).map((fieldConfig: any, index) => {
                  return (
                    <View key={index}>
                      {renderField({
                        fieldConfig,
                        values,
                        setFieldValue: (name, value) =>
                          setFieldValue(name, value),
                        touched,
                        errors,
                        dropdownStyle: styles.dropdownStyle,
                        reasonTextStyle: travelStyles.reasonStyle,
                        checkcontainerStyle: styles.checkconatinerStyle,
                        inputContainer: styles.containerInput,
                        textInputStyle: styles.textInputStyle,
                        placeholderStyle: styles.placeHolderStyle,
                        dateLabelStyle: styles.textInputStyle,
                         DisplayView: approvedLeaveStyles.displaycontainer,
                   
                      })}
                    </View>
                  );
                })}
                <View style={styles.buttonContainer}>
                  <Button
                    title="Submit Application"
                    onPress={() => {
                      handleSubmit();
                    }}
                    style={styles.ButtonStyle}
                    labelStyle={styles.buttonTextStyle}
                  />
                </View>
              </View>
            );
          }}
        </Formik>
      </ScrollView>
    </Wrapper>
  );
};

export default LeaveEncashmentScreen;


