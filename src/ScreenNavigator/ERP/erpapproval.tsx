import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackNavigatorParamsList } from '../../component/interface/routeinterface';

import LeaveApproval from '../../screen/Approval/ERP/LeaveApproval/leave.approval';
import TravelApproval from '../../screen/Approval/ERP/TravelApproval/travelApproval';
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
    </Stack.Navigator>
  );
};
