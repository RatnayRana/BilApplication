/* eslint-disable react-native/no-inline-styles */
// In your FormExample component:
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Formik } from 'formik';
import dayjs from 'dayjs';
import { renderField } from '../../../public/customfields/custom.fields';
import { formConfig, initialValues } from '../../../utils/erp/leaveapplication';
import { validationSchema } from '../../../utils/erp/validation';
import { styles } from './style.leaveapplicationpage';
import Button from '../../../component/Button';
import { DateType } from 'react-native-ui-datepicker';
import { FetchLeaveTypes } from '../LeaveApplication/leaveTypes';
import shiftTypes from '../../../public/utility/data/ShiftTypes';
import {
  TokenAttributes,
  tokenMiddleware,
} from '../../../public/middleware/token.middleware';
import { useMutation } from '@tanstack/react-query';
import { CreateLeaveAttributes } from '../../../interface/ERP/leavetypes';
import apiClient from '../../../post/postapi';
import { ERPURL } from '../../../component/APIURL/ERP/erpurl';
import { AxiosError } from 'axios';
import Wrapper from '../../auth';
import SuccessDialog from '../../../component/SuccessDialog/successdialog';
import ErrorDialog from '../../../component/ErrorDialog/errordialog';
import LoaderComponent from '../../../component/UniversalLoader/loader';
import NavComponent from '../../../component/NavComponent/navvomponent';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { RootStackNavigatorParamsList } from '../../../component/interface/routeinterface';
import getWeekendDeduction from './date-differnce';
const FormExample = () => {
  const navigation =
    useNavigation<NavigationProp<RootStackNavigatorParamsList>>();
  const [tokenData, setTokenData] = useState<TokenAttributes | undefined>(
    undefined,
  );
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [servError, setServerError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );
  const { data: leaveTypes } = FetchLeaveTypes();
  // , isLoading, isError

  function handleClose() {
    setOpenDialog(!openDialog);
  }

  function handleSuccess() {
    setOpenDialog(!openDialog);
    navigation.goBack()
    // handleClose();
    // navigation.navigate('Main');
  }

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
    mutationFn: async (credentials: CreateLeaveAttributes) => {
      try {
        const response = await apiClient.post(ERPURL.createLeave, credentials);

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



  const handleSubmit = (values: CreateLeaveAttributes) => {
    const valuef = values.leave_half_day ? 'Y' : 'N';
    console.log('leave_half_day', typeof (valuef), 'is true', valuef)
    let datevalue = 0;
    if (values.leave_from_date && values.leave_to_date) {
      const fromDate = new Date(values.leave_from_date);
      const toDate = new Date(values.leave_to_date);

      // Calculate full day difference
      datevalue =
        (toDate.getTime() - fromDate.getTime()) / (1000 * 60 * 60 * 24);
      console.log('DateValue', datevalue)


      const weekendDeduction = getWeekendDeduction(fromDate, toDate, valuef);

      // If same day, count as 1 full day
      if (datevalue === 0) {
        datevalue = 1;
      }
      datevalue -= weekendDeduction
    }
    const dataToSend = {
      ...(tokenData?.employee_id && { employee_id: tokenData.employee_id }),
      ...(tokenData?.email && { email: tokenData.email }),
      ...(tokenData?.employee_code && { employee_code: tokenData.employee_code }),
      leave_type: values.leave_type,
      leave_from_date: values.leave_from_date, // Already an array
      leave_to_date: values.leave_to_date, // Already an array
      leave_half_day: valuef, // Convert to the expected string format
      leave_day_shift: values.leave_day_shift, // Already in correct format
      no_of_leave_day: datevalue, // Wrap in array as per interface
      leave_total_days: datevalue,
      leave_reason: values.leave_reason,
    };
    mutateAsync(dataToSend as CreateLeaveAttributes);
    setServerError(false);
    setOpenDialog(true);
  };

  const Type_of_Leave = {
    data: leaveTypes?.data ?? [],
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
        text="Leave Application"
      />
      <ScrollView
        style={{ paddingHorizontal: 16 }}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 30 }}
        keyboardShouldPersistTaps="handled"
      // contentContainerStyle={{flex: 1 }}
      >
        <Formik
          initialValues={initialValues} // Use the corrected values
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          {({ handleSubmit, values, setFieldValue, errors, touched }) => {
            // Define date handler functions inside Formik context
            const handleDateChange = (date: DateType) => {
              const formattedDate = dayjs(date).format('YYYY-MM-DD');
              setStartDate(formattedDate);
              setFieldValue('leave_from_date', formattedDate);
              setOpenStart(false);
            };

            const handleEndDateChange = (date: DateType) => {
              const formattedDate = dayjs(date).format('YYYY-MM-DD');
              setEndDate(formattedDate);
              setFieldValue('leave_to_date', formattedDate);
              setOpenEnd(false);
            };

            return (
              <View>
                {formConfig(Type_of_Leave, { data: shiftTypes }).map(
                  (fieldConfig: any, index) => (
                    <View key={index} style={{ marginBottom: 10 }}>
                      {renderField({
                        fieldConfig,
                        values,
                        setFieldValue,
                        touched,
                        errors,
                        setOpenStart,
                        openStart,
                        startDate,
                        handleDateChange,
                        setOpenEnd,
                        openEnd,
                        endDate,
                        handleEndDateChange,
                        startDateFieldName: 'leave_from_date', // 👈 this replaces the hardcoded check
                        dropdownStyle: styles.dropdownStyle,
                        reasonTextStyle: styles.reasonStyle,
                        checkcontainerStyle: styles.checkconatinerStyle,
                        inputContainer: styles.containerInput,
                        textInputStyle: styles.textInputStyle,
                        placeholderStyle: styles.placeHolderStyle,
                        dateLabelStyle: styles.textInputStyle
                      })}
                    </View>
                  ),
                )}
                <View style={styles.buttonContainer}>
                  <Button
                    labelStyle={styles.buttonTextStyle}
                    title="Submit"
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

export default FormExample;
