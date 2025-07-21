/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Wrapper from '../../../auth';

import EncryptedStorage from 'react-native-encrypted-storage';
import { jwtDecode } from 'jwt-decode';
import { ERPURL } from '../../../../component/APIURL/ERP/erpurl';
import apiClient from '../../../../post/postapi';
import { useMutation } from '@tanstack/react-query';
import { RootStackNavigatorParamsList } from '../../../../component/interface/routeinterface';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import NavComponent from '../../../../component/NavComponent/navvomponent';
import { styles } from '../../../ERP/LeaveApplicationPage/style.leaveapplicationpage';
import CustomDialog from '../../../../component/DialogBox/dialogbox';
import { CreateTrainingAttributes } from '../../../../interface/ERP/tainingTypes';
import { ApprovalCardFlatList } from '../../../../component/card/ApprovalCard/ApprovalCarFlatList';
import TextCompoment from '../../../../component/TextComponent/index.text';
import leaveApprovalStyles from '../LeaveApproval/style';
import LoaderCompoment from '../../../../component/Loader/index.loader';




const ReviewTrainingApproval = () => {
    const [openStart, setOpenStart] = useState(true);
    const [ApprovedCredentials, setApprovedCredentials] = useState<string>()

    const navogation =
        useNavigation<NavigationProp<RootStackNavigatorParamsList>>();
    const {
        mutateAsync,
        isPending,
        error,
        data: TraingData,
    } = useMutation({
        mutationKey: ['TrainingData'],
        mutationFn: async (val: {
            TrainingQueryApproval: string;
            approvedCredentials: { employee_code: string };
        }) => {

            return (await apiClient.post(
                val.TrainingQueryApproval,
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
                const decodedToken = tokenData;
                const { employee_code } = decodedToken;
                setApprovedCredentials(employee_code)

                const approvedCredentials = {

                    employee_code: employee_code,

                };

                mutateAsync({
                    TrainingQueryApproval: ERPURL.fetchTrainingdetails,
                    approvedCredentials: approvedCredentials,
                });
            }
        };

        fetchTokenData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Only run once when the component mounts

    ///filefter
    const filteredData = TraingData?.data.data.filter(
        (item: CreateTrainingAttributes) => item.status_name !== 'Pending' 
    );
    const handleSubmit = (selectedItem: CreateTrainingAttributes) => {
        const selectedItemData = {
            ...selectedItem,
            employee_code: ApprovedCredentials
        }
        navogation.navigate('ReviewTrainingApprovedScreen', { approvedData: [selectedItemData] });
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
                text="Review Training Approval"
            />

            {isPending ? (
                <LoaderCompoment isLoading={isPending} />
            ) : (

                filteredData && filteredData.length > 0 ? (

                    <ApprovalCardFlatList
                                            getStatus={(item) => item.status_name?? 'N/A'}

                        data={filteredData}
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
                     <View style={leaveApprovalStyles.norequestavailableStyle}>
                        <TextCompoment text='No Training Requests Available' style={leaveApprovalStyles.norequestavilavleTextStyle} />
                    </View>
                )
            )}
        </Wrapper>
    );
};

export default ReviewTrainingApproval;

