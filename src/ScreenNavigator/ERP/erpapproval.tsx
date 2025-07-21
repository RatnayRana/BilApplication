import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackNavigatorParamsList } from '../../component/interface/routeinterface';

import LeaveApproval from '../../screen/Approval/ERP/LeaveApproval/leave.approval';
import TravelApproval from '../../screen/Approval/ERP/TravelApproval/travelApproval';
import TrainingApproval from '../../screen/Approval/ERP/TrainingApproval/trainingApproval';
import SalaryAdvanceApprovalScreen from '../../screen/Approval/ERP/SalaryAdvance/SalaryAdvanceApprovalScreen.';
import LeaveEncashmentApprovalScreen from '../../screen/Approval/ERP/approval-leaveencashment/approved-leaveencash';
import ClaimsOverviewScreen from '../../screen/ERP/Claim/OverView/ClaimsOverViewScreen';
import SalaryAdvanceApprovalReviewScreen from '../../screen/Approval/ERP/SalaryAdvance/review-salary-advance';
import ReviewTrainingApproval from '../../screen/Approval/ERP/TrainingApproval/review-training-approval';
// import TravelApplicationScreen from '../../screen/ERP/TravelApplicationScreen/index.travelapplication';

const Stack = createNativeStackNavigator<RootStackNavigatorParamsList>();

export const ApprovalNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LeaveApproval"
        component={LeaveApproval}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TravelApproval"
        component={TravelApproval}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TrainingApproval"
        component={TrainingApproval}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="ReviewTrainingApproval"
        component={ReviewTrainingApproval}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SalaryAdvanceApprovalScreen"
        component={SalaryAdvanceApprovalScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="SalaryAdvanceApprovalReviewScreen"
        component={SalaryAdvanceApprovalReviewScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="LeaveEncashmentApprovalScreen"
        component={LeaveEncashmentApprovalScreen}
        options={{ headerShown: false }}
      />
         <Stack.Screen
        name="ClaimsOverviewScreen"
        component={ClaimsOverviewScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
