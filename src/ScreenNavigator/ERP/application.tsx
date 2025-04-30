import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackNavigatorParamsList } from '../../component/interface/routeinterface';

import LeaveApplication from '../../screen/ERP/LeaveApplication/index.leave';
// import TravelApplicationScreen from '../../screen/ERP/TravelApplicationScreen/index.travelapplication';

const Stack = createNativeStackNavigator<RootStackNavigatorParamsList>();

export const ApplicationNavigator = () => {

  return (
    <Stack.Navigator  initialRouteName="Leave">
      <Stack.Screen
        name="Leave"
        component={LeaveApplication}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
