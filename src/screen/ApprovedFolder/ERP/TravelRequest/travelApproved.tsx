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
import { Status } from '../../../../public/utility/data/leavetypedata';

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
import { TravelApproval } from '../../../../interface/ERP/travelApproval';

type approvedScreen = NativeStackScreenProps<
    RootStackNavigatorParamsList,
    'TravelApprovedScreen'
>;

interface apData {
    travel_from_date?: Date;
    travel_to_date?: Date;
    travel_description?: string;
    travel_remarks?: string
    travel_status?: number
}

const TravelApprovedScreen: React.FC<approvedScreen> = ({ route }) => {
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
                travel_to_date: firstLeaveData.travel_to_date,
                travel_from_date: firstLeaveData.travel_from_date,

                travel_description: firstLeaveData.travel_description,
                travel_remarks: '',
                travel_status: 12
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
        mutationFn: async (credentials: TravelApproval) => {
            try {
                const data = await apiClient.post(ERPURL.travelVerification, credentials);
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
                name: 'travel_from_date',
                value: initialValues.travel_from_date,
            },
            {
                type: 'displaytext',
                label: 'To Date',
                name: 'travel_to_date',
                value: initialValues.travel_to_date,
            },
            {
                type: 'text',
                label: 'Reason',
                name: 'travel_description',
                placeholder: 'Enter reason for travel',
                value: initialValues.travel_description,
            },
            {
                type: 'dropdown',
                label: 'Status',
                name: 'travel_status',
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
                value: initialValues.travel_description,
            },
        ];
    };
    const handleSubmit = (values: TravelApproval) => {
        const {
            employee_code,
            emp_employee_number,
            travel_type,
            travel_from_date,
            travel_to_date,
            travel_expense_applicable,
            travel_funding,
            travel_mode,
            travel_id,
            travel_purpose,
            travel_duration,
            travel_from_place,
            travel_to_place,
        } = approvedData[0];
        // const travel_advance_amount = Number(approvedData[0].travel_advance_amount)
        const travel_advance_amount = approvedData[0].travel_advance_amount ? Number(approvedData[0].travel_advance_amount) : null
        const DataToSend = {
            travel_advance_amount: travel_advance_amount,
            travel_from_place,
            travel_to_place,
            travel_id,
            travel_type,
            travel_purpose,
            travel_expense_applicable,
            travel_funding,
            travel_mode,
            employee_id: emp_employee_number,
            employee_code: employee_code,
            leave_type: travel_type,
            travel_from_date,
            travel_to_date,
            travel_duration: Number(travel_duration),

            travel_description: values.travel_description,
        };
        mutateAsync(DataToSend as TravelApproval);
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
                text="Approved Travel"
            />
            <ScrollView style={{ paddingHorizontal: 16, flexGrow: 1 }}>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {({ handleSubmit, errors, values, setFieldValue, touched }) => {
                        return (
                            <View>
                                {formConfig({ data: Status }).map((fieldConfig: any, index) => (
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

export default TravelApprovedScreen;
