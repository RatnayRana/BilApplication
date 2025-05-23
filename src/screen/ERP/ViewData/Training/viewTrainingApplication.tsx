/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import ApprovalCard from '../../../../ImportantComponent/ApprovalCard';
import Wrapper from '../../../auth';

import EncryptedStorage from 'react-native-encrypted-storage';
import { jwtDecode } from 'jwt-decode';
import { ERPURL } from '../../../../component/APIURL/ERP/erpurl';
import apiClient from '../../../../post/postapi';
import { useMutation } from '@tanstack/react-query';
import { RootStackNavigatorParamsList } from '../../../../component/interface/routeinterface';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import NavComponent from '../../../../component/NavComponent/navvomponent';
import { styles } from '../../LeaveApplicationPage/style.leaveapplicationpage';
import CustomDialog from '../../../../component/DialogBox/dialogbox';
import { TravelApprovalData } from '../../../../interface/ERP/travelApproval';
import leaveApprovalStyles from '../../../Approval/ERP/LeaveApproval/style';
import { CreateTrainingAttributes } from '../../../../interface/ERP/tainingTypes';




const ViewTrainingApplication = () => {
    const [openStart, setOpenStart] = useState(true);
    const [ApprovedCredentials, setApprovedCredentials] = useState<string>()

    const navogation =
        useNavigation<NavigationProp<RootStackNavigatorParamsList>>();
    const {
        mutateAsync,
        isPending,
        error,
        data: testData,
    } = useMutation({
        mutationKey: ['ViewTrainingData'],
        mutationFn: async (val: {
            leaveQueryApproval: string;
            approvedCredentials: {
                employee_code: string;
            };
        }) => {
            return (await apiClient.post(
                val.leaveQueryApproval,
                val.approvedCredentials,
            )) as {
                status: number;
                message: string;
                data: {

                    data: CreateTrainingAttributes[]

                };
            };
        },
    });
    function handleClose() {
        setOpenStart(!openStart);

    }
    useEffect(() => {
        const fetchTokenData = async () => {
            const data = await EncryptedStorage.getItem('accessToken');
            if (data) {
                const tokenData: any = jwtDecode(data);
                const decodedToken = tokenData?.dataValues;
                const { employee_code } = decodedToken;
                setApprovedCredentials(employee_code)

                const approvedCredentials = {

                    employee_code: employee_code,

                };

                mutateAsync({
                    leaveQueryApproval: ERPURL.traininglist,
                    approvedCredentials: approvedCredentials,
                });
            }
        };

        fetchTokenData();
    }, []); 
    const handleSubmit = (selectedItem: CreateTrainingAttributes) => {

        navogation.navigate('NestedNavigatorName', { screen: 'TrainingApplicationScreen', params: { approvedData: [selectedItem] } });
    };
    return (
        <Wrapper>
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
                text="View Training Details"
            />

            {isPending ? (
                <Text>Loading...</Text>
            ) : (
                <ScrollView contentContainerStyle={{
                    paddingVertical: 10
                }}>
                    {testData && testData.data.data.length>0 ? (
                        testData.data.data.map(item => (

                            <ApprovalCard
                                key={item.training_id}
                                onPress={() => handleSubmit(item)}
                                cardContainer={leaveApprovalStyles.cardContainer}
                                infoContainer={leaveApprovalStyles.infoContainer}
                                name={item.emp_full_name}
                                EmployeeID={item.emp_employee_number}
                                Branch={item.branch_name}
                                nameStyle={leaveApprovalStyles.name}
                                details={leaveApprovalStyles.details}
                                leaveContainer={leaveApprovalStyles.leaveContainer}
                                leaveType={leaveApprovalStyles.leaveType}
                                durationStyle={leaveApprovalStyles.durationStyle}
                                actionButton={leaveApprovalStyles.actionButton}
                                imageViewStyle={leaveApprovalStyles.ImageStyle}
                                Duration={item.training_duration}
                                iconSize={35}
                                iconname='edit'
                            />

                        ))
                    ) : error ? (
                        <View>
                            <CustomDialog
                                message={JSON.stringify(error.message)}
                                color="#D32F2F"
                                iconName='sticker-remove-outline'
                                iconColor='#D32F2F'
                                visible={openStart}
                                onClose={handleClose}
                            />
                        </View>
                    ) : (
                        <View style={{ alignItems: 'center' }}>
                            <Text >No leave requests available.</Text>
                        </View>
                    )}
                </ScrollView>
            )}
        </Wrapper>
    );
};

export default ViewTrainingApplication;
