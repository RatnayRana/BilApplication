import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { DateType } from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import NavComponent from '../../../component/NavComponent/navvomponent';
import Wrapper from '../../auth';
import { Formik } from 'formik';
import { TrainingRequestForm } from '../../../utils/erp/trainingapplication';
import { validationtrainingSchema } from '../../auth/validation/signIn.validation';
import { renderField } from '../../../public/customfields/custom.fields';
import Button from '../../../component/Button';
import { styles } from '../LeaveApplicationPage/style.leaveapplicationpage';
import trainingStyles from './style.trainingapplication';
import { CountryDataQuery, fetchTrainingDropDownData } from './trainingTypeData';
import { Source_Of_Funding } from '../../../public/utility/data/trainingdata';
import { CreateTrainingAttributes } from '../../../interface/ERP/tainingTypes';
import { TrainingCategoryDropDownData } from './trainingCategory';
import { TokenAttributes, tokenMiddleware } from '../../../public/middleware/token.middleware';
import { useMutation } from '@tanstack/react-query';
import apiClient from '../../../post/postapi';
import { ERPURL } from '../../../component/APIURL/ERP/erpurl';
import { AxiosError } from 'axios';
import ErrorDialog from '../../../component/ErrorDialog/errordialog';
import LoaderComponent from '../../../component/UniversalLoader/loader';
import SuccessDialog from '../../../component/SuccessDialog/successdialog';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/core';
import { RootStackNavigatorParamsList } from '../../../component/interface/routeinterface';
type RouteParams = {
  approvedData?: CreateTrainingAttributes[];
};
dayjs.extend(utc);
const TrainingApplicationScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackNavigatorParamsList>>();
  const [startDate, setStartDate] = useState<string | null>(null);
  const [tokenData, setTokenData] = useState<TokenAttributes | undefined>(
    undefined,
  );
  const [endDate, setEndDate] = useState<string | null>(null);
  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [servError, setServerError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );

  const routeData = useRoute();
  const params = routeData?.params as RouteParams;
  const TrainingviewData = params?.approvedData || [];
  let isUpdateMode: boolean;
  if (TrainingviewData) {
    isUpdateMode = !!(TrainingviewData && TrainingviewData?.length > 0);

  }
  const { data: TrainingCategory, mutateAsync, isPending } = TrainingCategoryDropDownData()
  const { data: countriesData, isPending: countryDataisPending, error } = CountryDataQuery()

  const {
    mutateAsync: TrainingDataMutate,
    error: TrainingDataError,
    isPending: isTrainingDataPending,
    isSuccess,
    data: testData,
  } = useMutation({
    mutationFn: async (credentials: CreateTrainingAttributes) => {
      try {
        const response = await apiClient.post(ERPURL.createTraining, credentials);

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
  const handleFieldChange = (fieldName: string, value: any, setFieldValue: Function) => {
    setFieldValue(fieldName, value);
    if (fieldName === 'training_type') {
      mutateAsync(value)
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      const data = await tokenMiddleware();
      setTokenData(data);
    };
    fetchData();
  }, []);

  function handleClose() {
    setOpenDialog(!openDialog);
  }

  function handleSuccess() {
    setOpenDialog(!openDialog);
    navigation.goBack()
  }
  const getInitialValues = (): CreateTrainingAttributes => {
    if (TrainingviewData && TrainingviewData.length > 0 && isUpdateMode) {
      const travelData = TrainingviewData[0];
      return {
        training_type: Number(travelData.training_type) || 0,
        training_category: Number(travelData.training_category) || 0,
        training_course: travelData.training_course || '',
        training_from_date: travelData.training_from_date || '',
        training_end_date: travelData.training_end_date || '',
        training_country: Number(travelData.training_country) || 0,
        training_fund: travelData.training_fund,
        training_advance_amount: travelData.training_advance_amount,
        training_institute_name: travelData.training_institute_name || '',
        training_need_advance: !!Number(travelData.training_need_advance),
        training_expense_applicable: false,
        training_description: travelData.training_description || '',
      };
    }
    return {
      training_type: 0,
      training_category: 0,
      training_course: '',
      training_institute_name: '',
      training_country: 0,
      training_expense_applicable: false,
      training_fund: [],
      training_from_date: '',
      training_end_date: '',
      training_need_advance: false,
      training_advance_amount: '',
      training_description: '',
    };
  };

  const { data: TrainingDropDownData } = fetchTrainingDropDownData();
  const trainingType = { data: TrainingDropDownData?.data }
  const TrainingData = trainingType.data
  const ConditionalFieldConfig = [
    {
      targetField: 'training_advance_amount',
      dependsOn: 'training_expense_applicable', // Field that controls the target
      condition: (value: boolean) => value === true, // Function that determines if target is enabled
    },
     {
      targetField: 'training_need_advance',
      dependsOn: 'training_expense_applicable', // Field that controls the target
      condition: (value: boolean) => value === true, // Function that determines if target is enabled
    }
  ];
  const onFormSubmit = (values: CreateTrainingAttributes) => {
    const training_expense = values.training_expense_applicable ? 'Yes' : 'No'
    const training_advance = values.training_need_advance ? 'Y' : null;
    let Duration = 0;
    if (values.training_from_date && values.training_end_date) {
      const fromDate = new Date(values.training_from_date);
      const toDate = new Date(values.training_end_date);

      Duration =
        (toDate.getTime() - fromDate.getTime()) / (1000 * 60 * 60 * 24);

      if (Duration === 0) {
        Duration = 1;

      }
    }

    const TrainingData = {
      ...(tokenData?.employee_code && { employee_code: tokenData.employee_code }),
      training_type: values.training_type,
      training_category: values.training_category,
      training_course: values.training_course,
      training_institute_name: values.training_institute_name,
      training_country: values.training_country,
      training_expense_applicable: training_expense,
      training_fund: values.training_fund,
      training_from_date: values.training_from_date,
      training_end_date: values.training_end_date,
      training_duration: Duration,
      training_need_advance: training_advance,
      training_advance_amount: values.training_advance_amount,
      training_description: values.training_description
    }
    TrainingDataMutate(TrainingData as CreateTrainingAttributes)
    setServerError(false);
    setOpenDialog(true);

  }
  return (
    <Wrapper>
      <ErrorDialog
        error={TrainingDataError || servError}
        errormessage={
          (TrainingDataError as unknown as axiosError)?.response?.data?.error ||
          errorMessage
        }
        visible={openDialog}
        onClose={handleClose}
      />

      <LoaderComponent
        ispending={isTrainingDataPending}
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
        text="Training Request"
      />

      <ScrollView
        style={{ paddingHorizontal: 16, flexGrow: 1 }}
        keyboardShouldPersistTaps="handled">
        <Formik
          initialValues={getInitialValues()} onSubmit={onFormSubmit}
          validationSchema={validationtrainingSchema}>
          {({ handleSubmit, values, setFieldValue, errors, touched }) => {
            const handleDateChange = (date: DateType) => {
              const formattedDate = dayjs(date).format('YYYY-MM-DD');
              setStartDate(formattedDate);
              setFieldValue('training_from_date', formattedDate);
              setOpenStart(false);
            };

            const handleEndDateChange = (date: DateType) => {
              const formattedDate = dayjs(date).format('YYYY-MM-DD');
              setEndDate(formattedDate);
              setFieldValue('training_end_date', formattedDate);
              setOpenEnd(false);
            };

            return (
              <View>
                {TrainingRequestForm(
                  TrainingData,
                  TrainingCategory,
                  countriesData,
                  { data: Source_Of_Funding },
                ).map((fieldConfig: any, index) => (
                  <View key={index}>
                    {renderField({
                      fieldConfig,
                      values,
                      setFieldValue: (name, value) =>
                        handleFieldChange(name, value, setFieldValue),
                      touched,
                      errors,
                      ConditionalFieldConfig,
                      setOpenStart,
                      openStart,
                      startDate,
                      handleDateChange,
                      setOpenEnd,
                      openEnd,
                      endDate,
                      startDateFieldName: 'training_from_date',
                      handleEndDateChange,
                      dropdownStyle: styles.dropdownStyle,
                      reasonTextStyle: trainingStyles.reasonStyle,
                      checkcontainerStyle: styles.checkconatinerStyle,
                      inputContainer: styles.containerInput,
                      textInputStyle: styles.textInputStyle,
                      placeholderStyle: styles.placeHolderStyle,
                      dateLabelStyle: styles.textInputStyle,
                    })}
                  </View>
                ))}
                <View style={styles.buttonContainer}>
                  <Button
                    title="Submit Application"
                    onPress={() => handleSubmit()}
                    style={styles.ButtonStyle}
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

export default TrainingApplicationScreen;
