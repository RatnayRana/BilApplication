import React, { useEffect, useMemo, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import NavComponent from '../../../component/NavComponent/navvomponent';
import Wrapper from '../../auth';
import { Formik } from 'formik';
import { validationSalaryAdvanceSchema } from '../../auth/validation/signIn.validation';
import { renderField } from '../../../public/customfields/custom.fields';
import Button from '../../../component/Button';
import { styles } from '../LeaveApplicationPage/style.leaveapplicationpage';

import { CreateTrainingAttributes } from '../../../interface/ERP/tainingTypes';
import { TokenAttributes, tokenMiddleware } from '../../../public/middleware/token.middleware';

import { fetchAdvanceDetails } from './fetchAdvanceDetail';
import trainingStyles from '../Training/style.trainingapplication';
import { SalaryAdvanceRequestForm } from '../../../utils/erp/salaryadvance';
import { monthly_lumsum } from '../../../public/utility/data/salaryAdvance';
import approvedLeaveStyles from '../../ApprovedFolder/ERP/Leave/style';

dayjs.extend(utc);
const SalaryAdvance: React.FC = () => {
  //   const navigation = useNavigation<NavigationProp<RootStackNavigatorParamsList>>();
  //   const [startDate, setStartDate] = useState<string | null>(null);
  const [tokenData, setTokenData] = useState<TokenAttributes | undefined>(
    undefined,
  );
  const [monthly_installment, setMonthly_Installment] = useState<any | null>(null)
  const [sa_NewTakeHome, setSa_NewTakeHome] = useState<any | null>(null)
  const [saAmtPercentage, setSaAmtPercentage] = useState<any | null>(null)
  const [Employee_name, setEmployee_name] = useState<any | null>(null)


  //   const [endDate, setEndDate] = useState<string | null>(null);
  //   const [openStart, setOpenStart] = useState(false);
  //   const [openEnd, setOpenEnd] = useState(false);
  //   const [openDialog, setOpenDialog] = useState(false);
  //   const [servError, setServerError] = useState(false);
  //   const [errorMessage, setErrorMessage] = useState<string | undefined>(
  //     undefined,
  //   );


  const { data: salaryAdvance, isPending } = fetchAdvanceDetails(
    tokenData?.employee_code,
    {
      enabled: !!tokenData?.employee_code
    }
  )
  useEffect(() => {
    const fetchData = async () => {
      const data = await tokenMiddleware();
      setTokenData(data);

    };
    fetchData();
    // mutateAsync(tokenData?.employee_code)

  }, []);


  // const {
  //   mutateAsync: TrainingDataMutate,
  //   error: TrainingDataError,
  //   isPending: isTrainingDataPending,
  //   isSuccess,
  //   data: testData,
  // } = useMutation({
  //   mutationFn: async (credentials: CreateTrainingAttributes) => {
  //     try {
  //       const response = await apiClient.post(ERPURL.createTraining, credentials);

  //       if (response) {
  //         setOpenDialog(true);

  //         return response;
  //       }

  //       // eslint-disable-next-line no-catch-shadow
  //     } catch (error) {
  //       if (error) {
  //         setErrorMessage((error as AxiosError)?.message);
  //         throw error;
  //       }
  //       setErrorMessage((error as unknown as axiosError)?.response.data.error);
  //       setServerError(true);

  //       throw error;
  //     }
  //   },
  // // });
  const handleFieldChange = (fieldName: string, value: any, setFieldValue: Function) => {
    setFieldValue(fieldName, value);

    if (fieldName === 'salary_advance_amt') {
      const sa_advance_amt = parseFloat(value) || 0;
      const remaining_month = 12 - (new Date().getMonth() + 1);

      // Calculate installment - ensure it's a number
      const installment = sa_advance_amt > 0 ? sa_advance_amt / remaining_month : 0;
      const formattedInstallment = Number(installment.toFixed(2));

      // Update monthly installment state and form value
      setMonthly_Installment(formattedInstallment);
      setFieldValue('monthly_installment_amt', formattedInstallment);

      // Check if we have valid data and installment is not zero
      if (salaryAdvance?.data?.take_home_salary !== undefined &&
        salaryAdvance?.data?.gross_salary) {

        if (formattedInstallment > 0) {
          // Calculate new take home using the newly calculated installment amount
          const sa_new_take_home = parseFloat(salaryAdvance.data.take_home_salary) - installment;
          const formattedNewTakeHome = parseFloat(sa_new_take_home.toFixed(2));

          // Update take-home state and form value
          setSa_NewTakeHome(formattedNewTakeHome);
          setFieldValue('sa_NewTakeHome', formattedNewTakeHome);

          // Calculate percentage correctly
          const sa_new_take_home_amt_percentage = (formattedNewTakeHome / Number(salaryAdvance.data.gross_salary)) * 100;
          // Update percentage state and form value
          setSaAmtPercentage(Number(sa_new_take_home_amt_percentage).toFixed(2));
          setFieldValue('saAmtPercentage', Number(sa_new_take_home_amt_percentage).toFixed(2));
        } else {
          // If installment is zero or invalid, set everything to zero
          setSa_NewTakeHome(0);
          setFieldValue('sa_NewTakeHome', 0);
          setSaAmtPercentage(0);
          setFieldValue('saAmtPercentage', 0);
        }
      }
    }
  }
  console.log(sa_NewTakeHome)
  const initialValues = {
    employee_name: salaryAdvance?.data.employee_name,
    take_home_salary: salaryAdvance?.data.take_home_salary,
    salary_advance_amt: '',
    monthly_installment_amt: monthly_installment || 0,
    sa_NewTakeHome: sa_NewTakeHome,
    saAmtPercentage: saAmtPercentage,
    monthly_lumsum: 0,
    salary_purpose: '',
  }

  //   function handleClose() {
  //     setOpenDialog(!openDialog);
  //   }

  //   function handleSuccess() {
  //     setOpenDialog(!openDialog);
  //     navigation.goBack()
  //   }



  const onFormSubmit = (values: CreateTrainingAttributes) => {
    console.log(values)
    // const training_expense = values.training_expense_applicable ? 'Yes' : 'No'
    // const training_advance = values.training_need_advance ? 'Y' : null;
    // let Duration = 0;
    // if (values.training_from_date && values.training_end_date) {
    //   const fromDate = new Date(values.training_from_date);
    //   const toDate = new Date(values.training_end_date);

    //   Duration =
    //     (toDate.getTime() - fromDate.getTime()) / (1000 * 60 * 60 * 24);

    //   if (Duration === 0) {
    //     Duration = 1;

    //   }
    // }

    // const TrainingData = {
    //   ...(tokenData?.employee_code && { employee_code: tokenData.employee_code }),
    //   training_type: values.training_type,
    //   training_category: values.training_category,
    //   training_course: values.training_course,
    //   training_institute_name: values.training_institute_name,
    //   training_country: values.training_country,
    //   training_expense_applicable: training_expense,
    //   training_fund: values.training_fund,
    //   training_from_date: values.training_from_date,
    //   training_end_date: values.training_end_date,
    //   training_duration: Duration,
    //   training_need_advance: training_advance,
    //   training_advance_amount: values.training_advance_amount,
    //   training_description: values.training_description
    // }
    // TrainingDataMutate(TrainingData as CreateTrainingAttributes)
    // setServerError(false);
    // setOpenDialog(true);

  }
  return (
    <Wrapper>
      {/* <ErrorDialog
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
        text="Salary Advance"
      />
      <ScrollView
        style={{ paddingHorizontal: 16, flexGrow: 1 }}
        keyboardShouldPersistTaps="handled">
        <Formik
          // enableReinitialize={true}
          initialValues={initialValues}
          onSubmit={onFormSubmit}
          validationSchema={validationSalaryAdvanceSchema}>
          {({ handleSubmit, values, setFieldValue, errors, touched }) => {
            return (
              <View>
                {SalaryAdvanceRequestForm(
                ).map((fieldConfig: any, index) => (
                  <View key={index}>
                    {renderField({
                      fieldConfig,
                      values,
                      setFieldValue: (name, value) =>
                        handleFieldChange(name, value, setFieldValue),
                      touched,
                      errors,
                      dropdownStyle: styles.dropdownStyle,
                      reasonTextStyle: trainingStyles.reasonStyle,
                      checkcontainerStyle: styles.checkconatinerStyle,
                      inputContainer: styles.containerInput,
                      textInputStyle: styles.textInputStyle,
                      placeholderStyle: styles.placeHolderStyle,
                      dateLabelStyle: styles.textInputStyle,
                      DisplayView: approvedLeaveStyles.displaycontainer,

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



export default SalaryAdvance