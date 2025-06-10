/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Formik } from 'formik';
import Button from '../../../component/Button';
import Wrapper from '../../auth';
import dayjs from 'dayjs';
import { DateType } from 'react-native-ui-datepicker';
import NavComponent from '../../../component/NavComponent/navvomponent';
import {
  TravelRequestForm,
} from '../../../utils/erp/travelapplication';
import { validationtravelSchema } from '../../auth/validation/signIn.validation';
import { renderField } from '../../../public/customfields/custom.fields';
import { CreateTravelAttributes } from '../../../interface/ERP/leaveapplication';
import {
  TokenAttributes,
  tokenMiddleware,
} from '../../../public/middleware/token.middleware';
import { styles } from '../LeaveApplicationPage/style.leaveapplicationpage';
import travelStyles from './style.travelapplication';
import { useMutation } from '@tanstack/react-query';
import apiClient from '../../../post/postapi';
import { ERPURL } from '../../../component/APIURL/ERP/erpurl';
import { AxiosError } from 'axios';
import ErrorDialog from '../../../component/ErrorDialog/errordialog';
import LoaderComponent from '../../../component/UniversalLoader/loader';
import SuccessDialog from '../../../component/SuccessDialog/successdialog';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/core';
import { RootStackNavigatorParamsList } from '../../../component/interface/routeinterface';
import { fetchTravelDropDownData } from './trainingTypeData';
import { TravelApprovalData } from '../../../interface/ERP/travelApproval';

type RouteParams = {
  approvedData?: TravelApprovalData[];
};

const TravelApplicationScreen: React.FC = () => {
  const routeData = useRoute();
  const params = routeData?.params as RouteParams;
  const TravelData = params?.approvedData || [];

let isUpdateMode:boolean;
  if(TravelData){
    isUpdateMode = !!(TravelData && TravelData?.length > 0);

  }
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);
  const [tokenData, setTokenData] = useState<TokenAttributes | undefined>(
    undefined,
  );
  const navigation = useNavigation<NavigationProp<RootStackNavigatorParamsList>>();


  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );
  const [openDialog, setOpenDialog] = useState(false);
  const [servError, setServerError] = useState(false);
  const { data: TrainingDropDownData } = fetchTravelDropDownData();
  function handleClose() {
    setOpenDialog(!openDialog);
  }

  function handleSuccess() {
    setOpenDialog(!openDialog);
    navigation.goBack()

    // handleClose();
    // navigation.navigate('Main');
  }
  const getInitialValues = (): CreateTravelAttributes => {
    if (TravelData && TravelData.length > 0 && isUpdateMode) {
      const travelData = TravelData[0];
      return {
        travel_type: Number(travelData.travel_type) || 0,
        travel_purpose: Number(travelData.travel_purpose) || 0,
        travel_funding: Number(travelData.travel_funding) || 0,
        travel_from_date: travelData.travel_from_date || '',
        travel_to_date: travelData.travel_to_date || '',
        travel_mode: Number(travelData.travel_mode) || 0,
        travel_advance_amount: Number(travelData.travel_advance_amount) || 0,
        travel_from_place: travelData.travel_from_place || '',
        travel_to_place: travelData.travel_to_place || '',
        need_advance: !!Number(travelData.travel_advance),
        travel_expense_applicable: false,
        travel_description: travelData.travel_description || '',
      };
    }
    return {
      travel_type: 0,
      travel_purpose: 0,
      travel_funding: 0,
      travel_from_date: '',
      travel_to_date: '',
      travel_mode: 0,
      travel_advance_amount: 0,
      travel_from_place: '',
      travel_expense_applicable: false,
      travel_to_place: '',
      need_advance: false,
      travel_description: '',
    };
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await tokenMiddleware();
      setTokenData(data);
    };
    fetchData();
  }, []);

  const {
    mutateAsync,
    error,
    isPending,
    isSuccess,
    data: testData,
  } = useMutation({
    mutationFn: async (credentials: CreateTravelAttributes) => {
      try {
        const response = await apiClient.post(ERPURL.createTravel, credentials);

        if (response) {
          setOpenDialog(true);

          return response;
        }

        // eslint-disable-next-line no-catch-shadow
      } catch (error) {

        if (error) {
          setErrorMessage((error as AxiosError)?.message);
          throw error;
        }
        setErrorMessage((error as unknown as axiosError)?.response.data.error);
        setServerError(true);

        throw error;
      }
    },
  });
  const ConditionalFieldConfig = [
    {
      targetField: 'travel_advance_amount',
      dependsOn: 'travel_expense_applicable', // Field that controls the target
      condition: (value: boolean) => value === true, // Function that determines if target is enabled
    },
     {
      targetField: 'need_advance',
      dependsOn: 'travel_expense_applicable', // Field that controls the target
      condition: (value: boolean) => value === true, // Function that determines if target is enabled
    },
  ];

  const onFormSubmit = (values: CreateTravelAttributes) => {
    const valuef = values.travel_expense_applicable ? 'Yes' : 'No';
    let datevalue = 0;

    if (values.travel_from_date && values.travel_to_date) {
      const fromDate = new Date(values.travel_from_date);
      const toDate = new Date(values.travel_to_date);

      datevalue =
        (toDate.getTime() - fromDate.getTime()) / (1000 * 60 * 60 * 24);

      if (datevalue === 0) {
        datevalue = 1;
      }
    }
    const dataToSend = {
      ...(tokenData?.employee_code && { employee_code: tokenData.employee_code }),
      travel_type: values.travel_type,
      travel_purpose: values.travel_purpose,
      travel_expense_applicable: valuef,
      travel_funding: values.travel_funding,
      travel_mode: values.travel_mode,
      travel_duration: datevalue,
      travel_from_date: values.travel_from_date, // Already an array
      travel_to_date: values.travel_to_date,
      travel_advance_amount: Number(values.travel_advance_amount), // Already an array
      travel_from_place: values.travel_from_place, // Already in correct format
      travel_to_place: values.travel_to_place, // Already in correct format

      travel_description: values.travel_description,
    };
    mutateAsync(dataToSend as CreateTravelAttributes);
    setServerError(false);
    setOpenDialog(true);
  };
  const travelType = {
    data: TrainingDropDownData?.data?.data.Travel_funding ?? []
  };
  const travel_purpose = {
    data: TrainingDropDownData?.data?.data.Travel_purpose ?? []
  };
  const travel_funding = {
    data: TrainingDropDownData?.data?.data.Travel_funding ?? []
  };
  const travel_mode = {
    data: TrainingDropDownData?.data?.data.Travel_mode ?? []
  };


  return (
    <Wrapper>
      <ErrorDialog
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
      />

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
        text="Travel Request"
      />
      <ScrollView style={{ paddingHorizontal: 16, flexGrow: 1 }}>
        <Formik
          initialValues={getInitialValues()}
          validationSchema={validationtravelSchema}
          onSubmit={onFormSubmit}>
          {({ handleSubmit, values, setFieldValue, errors, touched }) => {
            const handleDateChange = (date: DateType) => {
              const formattedDate = dayjs(date).format('YYYY-MM-DD');
              setStartDate(formattedDate);
              setFieldValue('travel_from_date', formattedDate);
              setOpenStart(false);
            };

            const handleEndDateChange = (date: DateType) => {
              const formattedDate = dayjs(date).format('YYYY-MM-DD');
              setEndDate(formattedDate);
              setFieldValue('travel_to_date', formattedDate);
              setOpenEnd(false);
            };

            return (
              <View>
                {TravelRequestForm(
                  travelType,
                  travel_purpose,
                  travel_funding,
                  travel_mode,
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
                        ConditionalFieldConfig,
                        setOpenStart,
                        setOpenEnd,
                        openStart,
                        startDate,
                        handleDateChange,
                        openEnd,
                        endDate,
                        startDateFieldName: 'travel_from_date', // 👈 this was using = instead of :
                        handleEndDateChange,
                        dropdownStyle: styles.dropdownStyle,
                        reasonTextStyle: travelStyles.reasonStyle,
                        checkcontainerStyle: styles.checkconatinerStyle,
                        inputContainer: styles.containerInput,
                        textInputStyle: styles.textInputStyle,
                        placeholderStyle: styles.placeHolderStyle,
                        dateLabelStyle: styles.textInputStyle,
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

export default TravelApplicationScreen;


