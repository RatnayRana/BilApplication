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
import { account, Head, manager } from '../../../../public/utility/data/leavetypedata';

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
import { SalaryAdvancelData } from '../../../Approval/ERP/SalaryAdvance/SalaryAdvanceApprovalScreen.';

type approvedScreen = NativeStackScreenProps<
    RootStackNavigatorParamsList,
    'SalaryAdvanceApprovedScreen'
>;

interface apData {
    sa_monthly_installment?: string;
    sa_request_advance_amt?: string;
    travel_description?: string;
    approval_remarks?: string
    sa_status?: number
}

const SalaryAdvanceApprovedScreen: React.FC<approvedScreen> = ({ route }) => {



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
        navigation.goBack()

    }

    useEffect(() => {
        if (approvedData && approvedData.length > 0) {
            const firstLeaveData = approvedData[0];
            setInitialValues({
                sa_monthly_installment: firstLeaveData.sa_monthly_installment,
                sa_request_advance_amt: firstLeaveData.sa_request_advance_amt,

                approval_remarks: '',
                sa_status: 8
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
        mutationFn: async (credentials: SalaryAdvancelData) => {
            try {
                const data = await apiClient.post(ERPURL.approveSalaryAdvance, credentials);
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
        const getStatusList = () => {
            const travel_status = approvedData[0].status_name
            console.log('travel_status', travel_status)
      
    
    
            if (travel_status === "Pending") {
                // Manager's status options
                return account;
            }
            else if (travel_status === "Payroll Veified") {
                // CEO's status options
                return Head;
            } 
            // else if (travel_status === "CEO") {
            //     // Admin's status options
            //     return manager;
            // } 
            
            else {
                // Admin's status options
                return manager;
            }
        };

    const formConfig = (Status: ShiftCreationAttributes) => {
                const statusList = getStatusList(); // Dynamically get status based on condition

        return [
            {
                type: 'displaytext',
                label: 'Monthly Installement',
                name: 'sa_monthly_installment',
                value: initialValues.sa_monthly_installment,
            },
            {
                type: 'displaytext',
                label: 'Requested Amount',
                name: 'sa_request_advance_amt',
                value: initialValues.sa_request_advance_amt,
            },

         {
                type: 'dropdown',
                label: 'Status',
                name: 'sa_status',
                data: statusList.map(item => ({
                    label: item.name,
                    value: item.index,
                })),
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
    const handleSubmit = (values: SalaryAdvancelData) => {
        console.log(values)
        const {
            sa_monthly_installment,
            sa_request_advance_amt,
            sa_emp_code,
            sa_id
        } = approvedData[0];

        // const travel_advance_amount = Number(approvedData[0].travel_advance_amount)
        // const travel_advance_amount = approvedData[0].travel_advance_amount ? Number(approvedData[0].travel_advance_amount) : null
        const DataToSend = {
            sa_monthly_installment: sa_monthly_installment,
            sa_request_advance_amt: sa_request_advance_amt,

            sa_id: sa_id,
            employee_code: sa_emp_code,

            sa_status: values.sa_status,
            approval_remarks: values.approval_remarks,
        };
        console.log('data to be send ', DataToSend)

        mutateAsync(DataToSend);
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
                text="Approved Salary Advance"
            />
            <ScrollView style={{ paddingHorizontal: 16, flexGrow: 1 }}>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {({ handleSubmit, errors, values, setFieldValue, touched }) => {
                        return (
                            <View>
                                {formConfig({} as ShiftCreationAttributes).map((fieldConfig: any, index) => (
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

export default SalaryAdvanceApprovedScreen;
