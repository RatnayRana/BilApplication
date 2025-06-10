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
export interface LeaveApprovalData {
  leave_id: string;
  employee_code: string;
  leave_type: number;
  leave_half_day: string;
  emp_full_name: string;
  emp_employee_number: string;
  branch_name: string;
  leave_total_days: number;
  leave_type_name: string;
  leave_from_date: Date;
  leave_to_date: Date;
  leave_reason: string
}

const LeaveApproval = () => {
  const [openStart, setOpenStart] = useState(true);

  const navogation =
    useNavigation<NavigationProp<RootStackNavigatorParamsList>>();
  const {
    mutateAsync,
    isPending,
    error,
    data: testData,
  } = useMutation({
    mutationKey: ['LeaveApproval'],
    mutationFn: async (val: {
      leaveQueryApproval: string;
      approvedCredentials: {
        email: string;
        username: string;
        employee_code: string;
      };
    }) => {
      return (await apiClient.post(
        val.leaveQueryApproval,
        val.approvedCredentials,
      )) as {
        status: number;
        message: string;
        data: { data: LeaveApprovalData[] };
      };
    },
  });
  function handleClose() {
    setOpenStart(!openStart);

  }


  useEffect(() => {
    const fetchTokenData = async () => {
      const data = await EncryptedStorage.getItem('accessToken');
      console.log(data)
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
          leaveQueryApproval: ERPURL.leaveQueryApproval,
          approvedCredentials: approvedCredentials,
        });
      }
    };

    fetchTokenData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (selectedItem: LeaveApprovalData) => {
    navogation.navigate('ApprovedScreen', { approvedData: [selectedItem] });
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
        text="Leave Approval"
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
              item.leave_total_days !== undefined
                ? `${item.leave_total_days}`  // convert number to string here
                : "N/A"
            } getKey={(item) => item.leave_id?.toString() ?? '0'}
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

export default LeaveApproval;

