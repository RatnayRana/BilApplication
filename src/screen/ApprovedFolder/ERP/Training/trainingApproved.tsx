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
import { admn, manager } from '../../../../public/utility/data/leavetypedata';

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
import { CreateTrainingAttributes } from '../../../../interface/ERP/tainingTypes';

type approvedScreen = NativeStackScreenProps<
    RootStackNavigatorParamsList,
    'TrainingApprovedScreen'
>;

interface apData {
    training_from_date?: Date;
    training_end_date?: Date;
    training_description?: string;
    training_remarks?: string
    training_status?: number
}

const TrainingApprovedScreen: React.FC<approvedScreen> = ({ route }) => {
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
        navigation.navigate('TravelApproval')

    }

    useEffect(() => {
        if (approvedData && approvedData.length > 0) {
            const firstLeaveData = approvedData[0];
            setInitialValues({
                training_from_date: firstLeaveData.training_from_date,
                training_end_date: firstLeaveData.training_end_date,
                training_description: firstLeaveData.training_description,
                training_remarks: '',
                training_status: 12
            });
        }
    }, [approvedData]);


    const {
        mutateAsync,
        isPending,
        error,
        isSuccess,
        data: trainingData,
    } = useMutation({
        mutationFn: async (credentials: CreateTrainingAttributes) => {
            try {
                const data = await apiClient.post(ERPURL.trainingVerification, credentials);
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
        const travel_status = approvedData[0].training_status


        if (travel_status === 1) {
            // Manager's status options
            return admn;
        } else {
            // Admin's status options
            return manager;
        }
    };

    const formConfig = (Status: ShiftCreationAttributes) => {
        const statusList = getStatusList(); // Dynamically get status based on condition

        return [
            {
                type: 'displaytext',
                label: 'From Date',
                name: 'training_from_date',
                value: initialValues.training_from_date,
            },
            {
                type: 'displaytext',
                label: 'To Date',
                name: 'training_end_date',
                value: initialValues.training_end_date,
            },
            {
                type: 'displaytext',
                label: 'Reason',
                name: 'training_description',
                placeholder: 'Enter reason for travel',
                value: initialValues.training_description,
            },
            //   
            {
                type: 'dropdown',
                label: 'Status',
                name: 'training_status',
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
                value: initialValues.training_description,
            },
        ];
    };

    const handleSubmit = (values: CreateTrainingAttributes) => {
        const {
            employee_code,
            training_type,
            training_category,
            training_course,
            training_institute_name,
            training_country,
            training_expense_applicable,
            training_fund,
            training_from_date,
            training_end_date,
            training_duration,
            training_need_advance,
            training_advance_amount,
            training_description,
            training_id

        } = approvedData[0];
        // // const travel_advance_amount = Number(approvedData[0].travel_advance_amount)
        // const travel_advance_amount = approvedData[0].travel_advance_amount ? Number(approvedData[0].travel_advance_amount) : null
        const TrainingApprovalData = {
            training_type,
            training_category,
            training_course,
            training_institute_name,
            training_country,
            training_expense_applicable,
            training_fund,
            training_from_date,
            training_end_date,
            training_duration,
            training_need_advance,
            training_advance_amount,
            training_description,
            training_id,
            employee_code: employee_code,
            training_status: values.training_status,
            approval_remarks: values.approval_remarks


        };
        mutateAsync(TrainingApprovalData);
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
                message={trainingData?.data.message || 'successFull '}
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
                text="Approved Training"
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

export default TrainingApprovedScreen;
