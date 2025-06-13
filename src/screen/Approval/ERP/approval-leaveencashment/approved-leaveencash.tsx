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
import { ApprovalCardFlatList } from '../../../../component/card/ApprovalCard/ApprovalCarFlatList';

export interface TokenAttributes {
    email: string;
    name: string;
    employee_id: string;
    employee_code: string;
}
export interface LeaveEncashmentDataAttributes{
  encash_id?: string;
  encash_emp_code?: string;
  encash_approval_no?: string | null;
  encash_status?: number;
  encash_grade?: number;
  encash_designation?: number;
  encash_branch?: number;
  encash_department?: number;
  encash_amount?: string;
  encash_request_date?: string;
  encash_fiscal_year?: number;
  encash_cl_balance?: string;
  encash_el_balance?: string;
  encash_total_leave_balance?: string;
  encash_el_balance_after_encash?: string;
  encash_effective_start_date?: string;
  encash_effective_end_date?: string | null;
  encash_created_by?: number;
  encash_updated_by?: number | null;
  created_at?: string;
  updated_at?: string;
  encash_tds_amount?: string;
  emp_employee_number?: string;
  emp_full_name?: string;
  status_name?: string;
  branch_name?: string;
  approval_remarks?:string
}


const LeaveEncashmentApprovalScreen = () => {
    const [openStart, setOpenStart] = useState(true);

    const navogation =
        useNavigation<NavigationProp<RootStackNavigatorParamsList>>();
    const {
        mutateAsync,
        isPending,
        error,
        data: LeaveEncashData,
    } = useMutation({
        mutationKey: ['leaveEncash'],
        mutationFn: async (val: {
            salaryAdvanvceQueryApproval: string;
            approvedCredentials: {
                email: string;
                username: string;
                employee_code: string;
            };
        }) => {
            return (await apiClient.post(
                val.salaryAdvanvceQueryApproval,
                val.approvedCredentials,
            )) as {
                status: number;
                message: string;
                data: { data: LeaveEncashmentDataAttributes[] };
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
                const { email, employee_code, employee_id } = decodedToken;

                const approvedCredentials = {
                    email: email,
                    username: employee_id,
                    employee_code: employee_code,

                };

                mutateAsync({
                    salaryAdvanvceQueryApproval: ERPURL.fetchApprovalLeaveEncashment,
                    approvedCredentials: approvedCredentials,
                });
            }
        };

        fetchTokenData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleSubmit = (selectedItem: LeaveEncashmentDataAttributes) => {
        navogation.navigate('LeaveEncashApprovedScreen', { approvedData: [selectedItem] });
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
                text="Leave Encashment Approval"
            />

            {isPending ? (
                <Text>Loading...</Text>
            ) : (
                LeaveEncashData && LeaveEncashData.data.data.length > 0 ? (
                    <ApprovalCardFlatList
                        data={LeaveEncashData.data.data}
                        onPress={(item) => handleSubmit(item)}
                        getName={(item) => item.emp_full_name ?? 'N/A'}
                        getEmployeeNumber={(item) => item.emp_employee_number ?? 'N/A'}
                        getBranch={(item) => item.branch_name ?? 'N/A'}
                        getDuration={item =>
                            item.encash_amount !== undefined
                                ? `Nu ${item.encash_amount} `  // convert number to string here
                                : "N/A"
                        } getKey={(item) => item.encash_id?.toString() ?? '0'}
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
                    <View>
                        <Text >No leave requests available.</Text>
                    </View>
                )
                // </ScrollView>
            )}
        </Wrapper>
    );
};

export default LeaveEncashmentApprovalScreen;

