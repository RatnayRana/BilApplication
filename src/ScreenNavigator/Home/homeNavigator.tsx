import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackNavigatorParamsList } from '../../component/interface/routeinterface';

import ERPSystem from '../../screen/ERP/Main/erpsystem';
import IMS_Screen from '../../screen/IMS/Main/imsSystem';
import LMS_Screen from '../../screen/LMS/Main/lmsSystem';
import PPF_Screen from '../../screen/PPF/Main/ppfSystem';

const Stack = createNativeStackNavigator<RootStackNavigatorParamsList>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ERP_Screen">
      <Stack.Screen
        name="ERP_Screen"
        component={ERPSystem}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="IMS_Screen"
        component={IMS_Screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LMS_Screen"
        component={LMS_Screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PPF_Screen"
        component={PPF_Screen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};
