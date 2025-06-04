import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackNavigatorParamsList } from '../../component/interface/routeinterface';

import LeaveApproval from '../../screen/Approval/ERP/LeaveApproval/leave.approval';
import TravelApproval from '../../screen/Approval/ERP/TravelApproval/travelApproval';
import TrainingApproval from '../../screen/Approval/ERP/TrainingApproval/trainingApproval';
import SalaryAdvanceApprovalScreen from '../../screen/Approval/ERP/SalaryAdvance/SalaryAdvanceApprovalScreen.';
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
        name="SalaryAdvanceApprovalScreen"
        component={SalaryAdvanceApprovalScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
