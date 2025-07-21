import React, { useEffect, useMemo, useState } from 'react';
import { View, ScrollView, Text, Alert } from 'react-native';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import NavComponent from '../../../component/NavComponent/navvomponent';
import Wrapper from '../../auth';
import { Formik } from 'formik';
import { validationSalaryAdvanceSchema } from '../../auth/validation/signIn.validation';
import { renderField } from '../../../public/customfields/custom.fields';
import Button from '../../../component/Button';
import { styles } from '../LeaveApplicationPage/style.leaveapplicationpage';
import { TokenAttributes, tokenMiddleware } from '../../../public/middleware/token.middleware';
import { fetchAdvanceDetails } from './fetchAdvanceDetail';
import trainingStyles from '../Training/style.trainingapplication';
import { SalaryAdvanceRequestForm } from '../../../utils/erp/salaryadvance';
import approvedLeaveStyles from '../../ApprovedFolder/ERP/Leave/style';
import { SalaryAttributes } from '../../../interface/ERP/salaryAdvance';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ERPURL } from '../../../component/APIURL/ERP/erpurl';
import apiClient from '../../../post/postapi';
import ErrorDialog from '../../../component/ErrorDialog/errordialog';
import SuccessDialog from '../../../component/SuccessDialog/successdialog';
import LoaderComponent from '../../../component/UniversalLoader/loader';
dayjs.extend(utc);

const SalaryAdvance: React.FC = () => {
    // const navigation = navigation<NavigationProp<RootStackNavigatorParamsList>>();
  //   const [startDate, setStartDate] = useState<string | null>(null);
  const [tokenData, setTokenData] = useState<TokenAttributes | undefined>(
    undefined,
  );
  const [monthly_installment, setMonthly_Installment] = useState<any | null>(null)
  const [sa_NewTakeHome, setSa_NewTakeHome] = useState<any | null>(null)
  const [saAmtPercentage, setSaAmtPercentage] = useState<any | null>(null)
  const [SalaryData, setSalaryData] = useState<SalaryAttributes | undefined>(undefined)

  //   const [endDate, setEndDate] = useState<string | null>(null);
  //   const [openStart, setOpenStart] = useState(false);
  //   const [openEnd, setOpenEnd] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [servError, setServerError] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | undefined>(
      undefined,
    );

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
  useEffect(() => {
    setSalaryData({
      employee_name: salaryAdvance?.data.employee_name || '',
      take_home_salary: salaryAdvance?.data.take_home_pay,
      applicable_advance_amt:salaryAdvance?.data.applicable_advance_amt,
      monthly_installment_amt: monthly_installment,
      salary_advance_amt: '',
      saAmtPercentage: saAmtPercentage,
      sa_NewTakeHome: sa_NewTakeHome,
      salary_purpose: ''
    })
  }, [salaryAdvance])

  const {
    mutateAsync: SalaryAdvanceDataMutate,
    error: SalaryAdvanceDataError,
    isPending: isSalaryAdvanceDataPending,
    isSuccess,
    data: SalaryAdvanceData,
  } = useMutation({
    mutationFn: async (credentials: SalaryAttributes) => {
      try {
        const response = await apiClient.post(ERPURL.applySalaryAdvance, credentials);
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
    }
  });
  const handleFieldChange = (fieldName: string, value: any, setFieldValue: Function) => {

    setFieldValue(fieldName, value);

    if (fieldName === 'salary_advance_amt') {

      const sa_advance_amt = parseFloat(value) || 0;

      if (salaryAdvance?.data.applicable_advance_amt) {
        if (
          salaryAdvance?.data.applicable_advance_amt &&
          sa_advance_amt > salaryAdvance?.data.applicable_advance_amt
        ) {
          Alert.alert(
            'Amount Exceeded',
            `The maximum applicable advance is Nu ${salaryAdvance.data.applicable_advance_amt}.`,
          );

          // Reset the field
          setFieldValue(fieldName, '');
          setMonthly_Installment(0);
          setFieldValue('monthly_installment_amt', 0);
          setSa_NewTakeHome(0);
          setFieldValue('sa_NewTakeHome', 0);
          setSaAmtPercentage(0);
          setFieldValue('saAmtPercentage', 0);
          return; // Stop further calculation
        }
      }

      if (!isNaN(sa_advance_amt) && sa_advance_amt >= 0) {
        const remaining_month = 12 - (new Date().getMonth() + 1);


        const installment = sa_advance_amt > 0 ? sa_advance_amt / remaining_month : 0;
        const formattedInstallment = Number(installment.toFixed(2));

        // Update monthly installment state and form value
        setMonthly_Installment(formattedInstallment);
        setFieldValue('monthly_installment_amt', formattedInstallment);

        // Check if we have valid data and installment is not zero
        if (salaryAdvance?.data?.take_home_pay !== undefined &&
          salaryAdvance?.data?.gross_salary) {

          if (formattedInstallment > 0) {
            // Calculate new take home using the newly calculated installment amount
            const sa_new_take_home = parseFloat(salaryAdvance.data?.take_home_pay) - installment;
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
  }


    function handleClose() {
      setOpenDialog(!openDialog);
    }

    function handleSuccess() {
      setOpenDialog(!openDialog);
      // navigation.goBack()
    }



  const onFormSubmit = (values: SalaryAttributes) => {
    const SalaryAdvanceData = {
      ...(tokenData?.employee_code && { employee_code: tokenData.employee_code }),
      gross_salary: salaryAdvance?.data.gross_salary,
      applicable_advance_amt: values.applicable_advance_amt,
      monthly_installment_amt: values.monthly_installment_amt,
      salary_advance_amt: values.salary_advance_amt,
      salary_purpose: values.salary_purpose,
      take_home_salary:salaryAdvance?.data.take_home_pay,
      take_home_percentage:values.saAmtPercentage
    }
    

    SalaryAdvanceDataMutate(SalaryAdvanceData as SalaryAttributes)
    // setServerError(false);
    // setOpenDialog(true);

  }
  return (
    <Wrapper>
      <ErrorDialog
        error={ SalaryAdvanceDataError || servError}
        errormessage={
          ( SalaryAdvanceDataError as unknown as axiosError)?.response?.data?.error ||
          errorMessage
        }
        visible={openDialog}
        onClose={handleClose}
      />

      <LoaderComponent
        ispending={isSalaryAdvanceDataPending}
        loaderStyle={styles.loaderStyle}
        name="BallPulseSync"
        width={50}
        height={50}
        color="blue"
        isLoading={true}
      />
      <SuccessDialog
        isSuccess={isSuccess}
        message={SalaryAdvanceData?.data.message || 'successFull '}
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
        text="Salary Advance"
      />
      <ScrollView
        style={{ paddingHorizontal: 16, flexGrow: 1 }}
        keyboardShouldPersistTaps="handled">
        <Formik
          initialValues={SalaryData || ''}
          enableReinitialize
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