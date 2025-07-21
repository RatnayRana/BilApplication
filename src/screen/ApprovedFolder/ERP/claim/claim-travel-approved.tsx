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
import { account, admn, Head, manager } from '../../../../public/utility/data/leavetypedata';

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
import { FetchClaimApprovalDataAttributes } from '../../../../interface/ERP/fetchclaimapprovaldata';
import { TravelclaimSendData } from '../../../../interface/ERP/travelApproval';

type approvedScreen = NativeStackScreenProps<
    RootStackNavigatorParamsList,
    'TravelClaimApprovedScreen'
>;



const TravelClaimApprovedScreen: React.FC<approvedScreen> = ({ route }) => {



    const { approvedData } = route.params;
    const [openDialog, setOpenDialog] = useState(false);

    // Define initialValues based on approvedData
    const initialValues = {
        travel_bill_status: '',
        travel_bill_remarks: '',
    };

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
        navigation.goBack()

    }

    const {
        mutateAsync,
        isPending,
        error,
        isSuccess,
        data: testdata,
    } = useMutation({
        mutationFn: async (credentials: FetchClaimApprovalDataAttributes) => {
            try {
                const data = await apiClient.post(ERPURL.approvedTravelClaimExpenses, credentials);
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

    const getStatusList = () => {
        const travel_bill_status = approvedData[0].status_name
        console.log("Staatus name",travel_bill_status)



        if (travel_bill_status === "Pending") {
            // Manager's status options
            return admn;
        }


        else {
            // Admin's status options
            return manager;
        }
    };

    const formConfig = (Status: ShiftCreationAttributes) => {
        const statusList = getStatusList(); // Dynamically get status based on condition

        return [


            {
                type: 'dropdown',
                label: 'Status',
                name: 'travel_bill_status',
                data: statusList.map(item => ({
                    label: item.name,
                    value: item.index,
                })),
                placeholder: 'Select the Status',
            },

            {
                type: 'text',
                label: 'Approval Remarks',
                name: 'travel_bill_remarks',
                placeholder: 'Enter reason for travel',
                value: '',
            },
        ];
    };
    const handleSubmit = (values: TravelclaimSendData) => {
        const {
            employee_code,
            trv_bil_id
        } = approvedData[0];

            // const Trave_Bil_id = JSON.stringify(trv_bill_travel_id)
        // const travel_advance_amount = Number(approvedData[0].travel_advance_amount)
        // const travel_advance_amount = approvedData[0].travel_advance_amount ? Number(approvedData[0].travel_advance_amount) : null
        const DataToSend = {
            employee_code,
            travel_bill_id: trv_bil_id,
            travel_bill_status: values.travel_bill_status,
            // "travel_bill_status":6,//ADM
            travel_bill_remarks: values.travel_bill_remarks
        };
        console.log(DataToSend,"ftghjkl")

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
                text="Approved Travel  Claim"
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

export default TravelClaimApprovedScreen;
