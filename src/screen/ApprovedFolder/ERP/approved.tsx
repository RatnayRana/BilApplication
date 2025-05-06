/* eslint-disable quotes */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {Formik} from 'formik';
import {RootStackNavigatorParamsList} from '../../../component/interface/routeinterface';
import {renderField} from '../../../public/customfields/custom.fields';
import {
  ApprovedLeaveAttributes,
  ShiftCreationAttributes,
} from '../../../interface/ERP/leavetypes';
import {Status} from '../../../public/utility/data/leavetypedata';
import approvedLeaveStyles from './style';

import Button from '../../../component/Button';
import apiClient from '../../../post/postapi';
import {ERPURL} from '../../../component/APIURL/ERP/erpurl';
import {useMutation} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import SuccessDialog from '../../../component/SuccessDialog/successdialog';
import LoaderComponent from '../../../component/UniversalLoader/loader';
import ErrorDialog from '../../../component/ErrorDialog/errordialog';
import NavComponent from '../../../component/NavComponent/navvomponent';
import {styles} from '../../ERP/LeaveApplicationPage/style.leaveapplicationpage';
import Wrapper from '../../auth';
import { CacheManager } from '../../../public/middleware/cacheManager/cachemanager';
import { NavigationProp, useNavigation } from '@react-navigation/core';

type approvedScreen = NativeStackScreenProps<
  RootStackNavigatorParamsList,
  'ApprovedScreen'
>;

interface apData {
  leave_from_date?: Date;
  leave_to_date?: Date;
  leave_reason?: string;
  emp_employee_number?: string;
  approval_remarks?:string
  leave_status?:number
}

const ApprovedScreen: React.FC<approvedScreen> = ({route}) => {
  const {approvedData} = route.params;
  const [initialValues, setInitialValues] = useState<apData | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const [servError, setServerError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );
  const navigation =
      useNavigation<NavigationProp<RootStackNavigatorParamsList>>();

  function handleClose() {
    setOpenDialog(!openDialog);
  }

  function handleSuccess() {
    setOpenDialog(!openDialog);
    navigation.navigate('ApprovalNavigator')
    
  }

  useEffect(() => {
    if (approvedData && approvedData.length > 0) {
      const firstLeaveData = approvedData[0];
      setInitialValues({
        leave_from_date: firstLeaveData.leave_from_date,
        leave_to_date: firstLeaveData.leave_to_date,
        leave_reason: firstLeaveData.leave_reason,
        approval_remarks:'',
        leave_status: 12
      });
    }
  }, [approvedData]);


  const {
    mutateAsync,
    isPending,
    error,
    isSuccess,
    data: testdata,
  } = useMutation({
    mutationFn: async (credentials: ApprovedLeaveAttributes) => {
      try {
        const data = await apiClient.post(ERPURL.approvedLeave, credentials);
        if (data) {
          setOpenDialog(true);
          
          return data;
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

  if (!initialValues) {
    // Return a loading spinner or message while waiting for initialValues to be set
    return (
      <View>
        <LoaderComponent
          ispending={true}
          loaderStyle={approvedLeaveStyles.loaderStyle}
          name="BallPulseSync"
          width={50}
          height={50}
          color="blue"
          isLoading={true}
        />
      </View>
    );
  }

  const formConfig = (Status: ShiftCreationAttributes) => {
    return [
      {
        type: 'displaytext',
        label: 'From Date',
        name: 'leave_from_date',
        value: initialValues.leave_from_date,
      },
      {
        type: 'displaytext',
        label: 'To Date',
        name: 'leave_to_date',
        value: initialValues.leave_to_date,
      },
      {
        type: 'text',
        label: 'Reason',
        name: 'leave_reason',
        placeholder: 'Enter reason for leave',
        value: initialValues.leave_reason,
      },
      {
        type: 'dropdown',
        label: 'Status',
        name: 'leave_status',
        data: Array.isArray(Status?.data)
          ? Status.data.map(item => ({
              label: item.name, // Assuming each item has a `name` field
              value: item.index, // Assuming each item has an `id` field
            }))
          : [],
        placeholder: 'Select the Status',
      },
      {
        type: 'text',
        label: 'Approval Remarks',
        name: 'approval_remarks',
        placeholder: 'Enter reason for leave',
        value: initialValues.approval_remarks,
      },
    ];
  };

  const handleSubmit = (values: ApprovedLeaveAttributes) => {
    const {
      emp_employee_number,
      employee_code,
      leave_type,
      leave_from_date,
      leave_to_date,
      leave_half_day,
      leave_type_name,
      leave_total_days,
      leave_reason,
      leave_id,
    } = approvedData[0];
    const DataToSend = {
      employee_id: emp_employee_number,
      employee_code: employee_code,
      leave_type: leave_type,
      leave_from_date,
      leave_to_date,
      leave_half_day,
      leave_day_shift: leave_type_name,
      no_of_leave_day: leave_total_days,
      leave_total_days,
      leave_reason,
      leave_id: leave_id.toString(),
      leave_status:values.leave_status,
      approval_remarks: values.approval_remarks,
    };
    mutateAsync(DataToSend as ApprovedLeaveAttributes);
    setServerError(false);
    setOpenDialog(true);
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
        loaderStyle={approvedLeaveStyles.loaderStyle}
        name="BallPulseSync"
        width={50}
        height={50}
        color="blue"
        isLoading={true}
      />
      <SuccessDialog
        isSuccess={isSuccess}
        message={testdata?.data.message || 'successFull '}
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
        text="Approved Leave"
      />
      <ScrollView style={{paddingHorizontal: 16, flexGrow: 1}}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({handleSubmit, errors, values, setFieldValue, touched}) => {
            return (
              <View>
                {formConfig({data: Status}).map((fieldConfig:any, index) => (
                  <View key={index}>
                    {renderField({
                      fieldConfig,
                      values,
                      setFieldValue: (name, value) =>
                        setFieldValue(name, value),
                      touched,
                      errors,
                      dropdownStyle: styles.dropdownStyle,
                      DisplayView: approvedLeaveStyles.displaycontainer,
                      textInputStyle: styles.textInputStyle,
                      reasonTextStyle: approvedLeaveStyles.reasonStyle,
                    })}
                  </View>
                ))}
                <View style={approvedLeaveStyles.buttonContainer}>
                  <Button
                    title="Approved"
                    onPress={handleSubmit}
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

export default ApprovedScreen;
