import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackNavigatorParamsList } from '../../component/interface/routeinterface';

import LeaveApproval from '../../screen/Approval/ERP/LeaveApproval/leave.approval';
// import TravelApplicationScreen from '../../screen/ERP/TravelApplicationScreen/index.travelapplication';

const Stack = createNativeStackNavigator<RootStackNavigatorParamsList>();

export const ApprovalNavigator = () => {
  return (
    <Stack.Navigator  initialRouteName="LeaveApproval">
      <Stack.Screen
        name="LeaveApproval"
        component={LeaveApproval}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
