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
import TextCompoment from '../../../../component/TextComponent/index.text';
import leaveApprovalStyles from '../LeaveApproval/style';

export interface TokenAttributes {
    email: string;
    name: string;
    employee_id: string;
    employee_code: string;
}
export interface SalaryAdvancelData {
    sa_id?: number;
    sa_emp_code?: string;
    emp_employee_number?: string;
    emp_full_name?: string;
    grade_name?: string;
    branch_name?: string;
    sa_request_advance_amt?: string; // You may change this to number if it's used as a numeric value
    sa_monthly_installment?: string; // Same here, change to number if needed
    status_name?: string;
    approval_remarks?:string,
            sa_status?:number,
}

const SalaryAdvanceApprovalReviewScreen = () => {
    const [openStart, setOpenStart] = useState(true);

    const navogation =
        useNavigation<NavigationProp<RootStackNavigatorParamsList>>();
    const {
        mutateAsync,
        isPending,
        error,
        data: salaryAdvanvceData,
    } = useMutation({
        mutationKey: ['salaryAdvanvce'],
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
                data: { data: SalaryAdvancelData[] };
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
                    salaryAdvanvceQueryApproval: ERPURL.fetchSalaryAdvance,
                    approvedCredentials: approvedCredentials,
                });
            }
        };

        fetchTokenData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleSubmit = (selectedItem: SalaryAdvancelData) => {
        navogation.navigate('SalaryAdvanceApprovedScreen', { approvedData: [selectedItem] });
    };
 const data = salaryAdvanvceData?.data.data.filter(
  (item: SalaryAdvancelData) =>
    item.status_name === 'Payroll Veified' || item.status_name === 'Head Verified'
);

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
                text="Review Salary Advance Approval"
            />

            {isPending ? (
                <Text>Loading...</Text>
            ) : (
                data && data.length > 0 ? (
                    <ApprovalCardFlatList
                    getStatus={(item) =>  item.status_name ?? 'N/A'}
                        data={data}
                        onPress={(item) => handleSubmit(item)}
                        getName={(item) => item.emp_full_name ?? 'N/A'}
                        getEmployeeNumber={(item) => item.emp_employee_number ?? 'N/A'}
                        getBranch={(item) => item.branch_name ?? 'N/A'}
                        getDuration={item =>
                            item.sa_request_advance_amt !== undefined
                                ? `Nu ${item.sa_request_advance_amt} `  // convert number to string here
                                : "N/A"
                        } getKey={(item) => item.sa_id?.toString() ?? '0'}
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
                        <TextCompoment text='No Review Salary Advance Requests Available' style={leaveApprovalStyles.norequestavilavleTextStyle} />
                    </View>
                )
                // </ScrollView>
            )}
        </Wrapper>
    );
};

export default SalaryAdvanceApprovalReviewScreen;

