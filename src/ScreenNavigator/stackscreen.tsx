import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from '../screen/bottomtab/bottomTabs';
import MainStackNavigator from './index.stacknavigator';
import {RootStackNavigatorParamsList} from '../component/interface/routeinterface';
import SignInScreen from './signIn';
// import ApprovedScreen from '../screen/ApprovedFolder/ERP/approved';
import CardNavigation from '../screen/CardNavigation/index.cardnavigation';
import ApprovedScreen from '../screen/ApprovedFolder/ERP/approved';
import {ApprovalNavigator} from './ERP/erpapproval';
import { ApplicationNavigator } from './ERP/application';

const Stack = createNativeStackNavigator<RootStackNavigatorParamsList>();

export default function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignInStack"
        component={SignInScreen} // Use SignInStack here
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Main"
        component={BottomTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NestedNavigatorName"
        component={MainStackNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CardNavigation"
        component={CardNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ApprovedScreen"
        component={ApprovedScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ApprovalNavigator"
        component={ApprovalNavigator}
        options={{headerShown: false}}
      />
        {/* <Stack.Screen
        name="Leave"
        component={LeaveApplication}
        options={{headerShown: false}}
      /> */}
        <Stack.Screen
        name="Application"
        component={ApplicationNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
