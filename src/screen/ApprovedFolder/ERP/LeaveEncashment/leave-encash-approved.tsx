/* eslint-disable quotes */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Formik } from 'formik';
import { RootStackNavigatorParamsList } from '../../../../component/interface/routeinterface';
import { renderField } from '../../../../public/customfields/custom.fields';
import {

    ShiftCreationAttributes,
} from '../../../../interface/ERP/leavetypes';
import { leaveStatus, Status } from '../../../../public/utility/data/leavetypedata';

import Button from '../../../../component/Button';
import apiClient from '../../../../post/postapi';
import { ERPURL } from '../../../../component/APIURL/ERP/erpurl';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import SuccessDialog from '../../../../component/SuccessDialog/successdialog';
import LoaderComponent from '../../../../component/UniversalLoader/loader';
import ErrorDialog from '../../../../component/ErrorDialog/errordialog';
import NavComponent from '../../../../component/NavComponent/navvomponent';
import { styles } from '../../../ERP/LeaveApplicationPage/style.leaveapplicationpage';
import Wrapper from '../../../auth';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import approvedLeaveStyles from '../Leave/style';
import { LeaveEncashmentDataAttributes } from '../../../Approval/ERP/approval-leaveencashment/approved-leaveencash';

type approvedScreen = NativeStackScreenProps<
    RootStackNavigatorParamsList,
    'LeaveEncashApprovedScreen'
>;

interface apData {
    encash_amount?: string;
  
    approval_remarks?: string
    encash_status?: number
}

const LeaveEncashApprovedScreen: React.FC<approvedScreen> = ({ route }) => {



    const { approvedData } = route.params;
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
        navigation.navigate('LeaveEncashmentApprovalScreen')

    }

    useEffect(() => {
        if (approvedData && approvedData.length > 0) {
            const firstLeaveData = approvedData[0];
            setInitialValues({
                encash_amount: firstLeaveData.encash_amount,

                approval_remarks: '',
                encash_status: 7
            });
        }
    }, [approvedData]);

    const {
        mutateAsync:ApprovedLeaveEncashDataMutate,
        isPending,
        error,
        isSuccess,
        data: testdata,
    } = useMutation({
        mutationFn: async (credentials: LeaveEncashmentDataAttributes) => {
            try {
                const data = await apiClient.post(ERPURL.leaveEncashmentApprove, credentials);
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
                label: 'Encash Amount',
                name: 'encash_amount',
                value: initialValues.encash_amount,
            },
            

            {
                type: 'dropdown',
                label: 'Status',
                name: 'encash_status',
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
                placeholder: 'Enter reason for travel',
                value: initialValues.approval_remarks,
            },
        ];
    };
    const handleSubmit = (values: LeaveEncashmentDataAttributes) => {
        console.log(values)
        const {
            encash_emp_code,
            encash_id,
            encash_total_leave_balance
            
        } = approvedData[0];
console.log("Govindaalala",encash_id)
        const DataToSend = {
            encash_amount:values.encash_amount,

            encash_id: encash_id,
            employee_code: encash_emp_code,
            encash_total_leave_balance,
            encash_status: values.encash_status,
            approval_remarks: values.approval_remarks,
        };
        console.log('data to be send ', DataToSend)

        ApprovedLeaveEncashDataMutate(DataToSend);
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
                text="Approved Leave Encashment"
            />
            <ScrollView style={{ paddingHorizontal: 16, flexGrow: 1 }}>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {({ handleSubmit, errors, values, setFieldValue, touched }) => {
                        return (
                            <View>
                                {formConfig({ data: leaveStatus }).map((fieldConfig: any, index) => (
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

export default LeaveEncashApprovedScreen;
