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
//  
import NavComponent from '../../../../component/NavComponent/navvomponent';
import { styles } from '../../../ERP/LeaveApplicationPage/style.leaveapplicationpage';
import CustomDialog from '../../../../component/DialogBox/dialogbox';
import leaveApprovalStyles from '../../../Approval/ERP/LeaveApproval/style';
import LoaderCompoment from '../../../../component/Loader/index.loader';
import TextCompoment from '../../../../component/TextComponent/index.text';
import { LeaveDetails } from '../../../../interface/ERP/leaveapplication';




const   ViewLeaveApplication = () => {
    const [openStart, setOpenStart] = useState(true);
    const [ApprovedCredentials,setApprovedCredentials] = useState<string>()
     const [name,setName] = useState<string>()
      const [employee,setEmployeeId] = useState<string>()

    // const navogation =
    //     useNavigation<NavigationProp<RootStackNavigatorParamsList>>();
    const {
        mutateAsync,
        isPending,
        error,
        data: testData,
    } = useMutation({
        mutationKey: ['leaveViewDetails'],
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
                    
                        data: LeaveDetails[]
                    
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
            console.log("Datata",data)
            if (data) {
                const tokenData: any = jwtDecode(data);
              
                const decodedToken = tokenData;
            
                const { employee_code, name,employee_id} = decodedToken;
                setApprovedCredentials(employee_code)
                setName(name)
                setEmployeeId(employee_id)

                const approvedCredentials = {
                 
                    employee_code: employee_code,

                };

                mutateAsync({
                    leaveQueryApproval: ERPURL.leaveapplicant,
                    approvedCredentials: approvedCredentials,
                });
            }
        };

        fetchTokenData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Only run once when the component mounts


    // const handleSubmit = (selectedItem: LeaveDetails) => {
    //     const selectedItemData = {
    //         ...selectedItem,
    //         employee_code:ApprovedCredentials
    //     }
    //     navogation.navigate('NestedNavigatorName', { screen: 'LeaveApplicationScreen', params: { approvedData: [selectedItem] } });
    // };

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
                text="View Leave  Details"
            />

            {isPending ? (
                                <LoaderCompoment isLoading={isPending} />
                
            ) : (
                <ScrollView contentContainerStyle={{
                    paddingVertical: 10
                }}>
                    {testData && testData.data.data.length > 0 ? (
                        testData.data.data.map(item => (

                            <ApprovalCard
                                key={item.leave_id}
                                // onPress={() => handleSubmit(item)}
                                cardContainer={leaveApprovalStyles.cardContainer}
                                infoContainer={leaveApprovalStyles.infoContainer}
                                name={name}
                                EmployeeID={employee}
                                Branch={item.status_name}
                                nameStyle={leaveApprovalStyles.name}
                                details={leaveApprovalStyles.details}
                                leaveContainer={leaveApprovalStyles.leaveContainer}
                                leaveType={leaveApprovalStyles.leaveType}
                                durationStyle={leaveApprovalStyles.durationStyle}
                                actionButton={leaveApprovalStyles.actionButton}
                                imageViewStyle={leaveApprovalStyles.ImageStyle}
                                Duration={item.leave_type_name}
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
                         <View style={leaveApprovalStyles.norequestavailableStyle}>
                        <TextCompoment text='No Leave Requests Available' style={leaveApprovalStyles.norequestavilavleTextStyle} />
                    </View>
                    )}
                </ScrollView>
            )}
        </Wrapper>
    );
};

export default  ViewLeaveApplication;



