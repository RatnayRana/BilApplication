/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import {  Text, View } from 'react-native';

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

import { CreateTrainingAttributes } from '../../../../interface/ERP/tainingTypes';
import { ApprovalCardFlatList } from '../../../../component/card/ApprovalCard/ApprovalCarFlatList';




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
               
                    testData && testData.data.data.length > 0 ? (
                      

                        <ApprovalCardFlatList
                            data={testData.data.data}
                            onPress={(item) => handleSubmit(item)}
                            getName={(item) => item.emp_full_name ?? 'N/A'}
                            getEmployeeNumber={(item) => item.emp_employee_number ?? 'N/A'}
                            getBranch={(item) => item.branch_name ?? 'N/A'}
                            getDuration={item =>
                                item.training_duration !== undefined
                                    ? `${item.training_duration}`  // convert number to string here
                                    : "N/A"
                            } getKey={(item) => item.training_id?.toString() ?? '0'}
                        />
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
                    )
               
            )}
        </Wrapper>
    );
};

export default ViewTrainingApplication;
