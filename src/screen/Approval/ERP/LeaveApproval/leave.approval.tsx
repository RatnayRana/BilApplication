/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import ApprovalCard from '../../../../ImportantComponent/ApprovalCard';
import Wrapper from '../../../auth';

import EncryptedStorage from 'react-native-encrypted-storage';
import {jwtDecode} from 'jwt-decode';
import {ERPURL} from '../../../../component/APIURL/ERP/erpurl';
import apiClient from '../../../../post/postapi';
import {useMutation} from '@tanstack/react-query';
import {RootStackNavigatorParamsList} from '../../../../component/interface/routeinterface';
import {NavigationProp, useNavigation} from '@react-navigation/core';
import NavComponent from '../../../../component/NavComponent/navvomponent';
import leaveApprovalStyles from './style';
import {styles} from '../../../ERP/LeaveApplicationPage/style.leaveapplicationpage';
import {colors} from '../../../../utils/color';
import CustomDialog from '../../../../component/DialogBox/dialogbox';

export interface TokenAttributes {
  email: string;
  name: string;
  employee_id: string;
  employee_code: string;
}
interface LeaveApprovalData {
  leave_id: string;
  employee_code: string;

  emp_full_name: string;
  emp_employee_number: string;
  branch_name: string;
  leave_total_days: number;
  leave_type_name: string;
  from_date: Date;
  to_Date: Date;
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
    mutationKey: ['test'],
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
        data: {data: LeaveApprovalData[]};
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
        const {email, employee_code, employee_id} = decodedToken;
        

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
  }, []); // Only run once when the component mounts
  const handleSubmit = (selectedItem: LeaveApprovalData) => {
    // const approvedData = testData?.data.data;
    navogation.navigate('ApprovedScreen', {approvedData: [selectedItem]});
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
        <ScrollView contentContainerStyle={{
          paddingVertical: 10
        }}>
          {testData && testData.data.data.length > 0 ? (
            testData.data.data.map(item => (
              <ApprovalCard
                key={item.leave_id}
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
                LeaveType={item.leave_type_name}
                Duration={item.leave_total_days}
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
            <View>
              <Text >No leave requests available.</Text>
            </View>
          )}
        </ScrollView>
      )}
    </Wrapper>
  );
};

export default LeaveApproval;

// const SignIn: React.FC<SignInProps> = ({navigation}) => {
//   const [isLoading, setIsLoading] = useState(false);

//   const {
//     mutateAsync,
//     isError,
//     isPending,
//     isSuccess,
//     data: token,
//   } = useMutation({
//     mutationFn: async (credentials: AuthAttributes) => {
//       return (await apiClient.post(ERPURL.login, credentials)) as {
//         status: number;
//         message: string;
//         data: Token;
//       };
//     },
//   });

//   // const handleSubmit = useCallback(
//   //   async (values: AuthAttributes) => {
//   //     setIsLoading(true);
//   //     mutation.mutate(values, {
//   //       onSettled: () => {
//   //         setIsLoading(false);
//   //       },
//   //     });
//   //   },
//   //   [mutation],
//   // );

//   const handleSubmit = async(values:AuthAttributes)=>{
//     console.log("hy")
//     const response = await mutateAsync(values)
//     console.log(response)

//   }
