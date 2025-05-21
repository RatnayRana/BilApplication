import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from '../screen/bottomtab/bottomTabs';
import MainStackNavigator from './index.stacknavigator';
import { RootStackNavigatorParamsList } from '../component/interface/routeinterface';
import SignInScreen from './signIn';
// import ApprovedScreen from '../screen/ApprovedFolder/ERP/approved';
import CardNavigation from '../screen/CardNavigation/index.cardnavigation';
import ApprovedScreen from '../screen/ApprovedFolder/ERP/Leave/approved';
import { ApprovalNavigator } from './ERP/erpapproval';
import { HomeNavigator } from './Home/homeNavigator';
import LeaveApplication from '../screen/ERP/LeaveApplication/index.leave';
import SearchApplication from '../screen/ERP/Search/search';
import TravelApprovedScreen from '../screen/ApprovedFolder/ERP/TravelRequest/travelApproved';
import TravelApproval from '../screen/Approval/ERP/TravelApproval/travelApproval';
import TrainingApprovedScreen from '../screen/ApprovedFolder/ERP/Training/trainingApproved';

import ViewPersonalScreen from '../screen/ERP/ViewData/ApplicationView';
import NestedViewApplication from './ERP/ViewApplication/viewApplication';
import SalaryAdvance from '../screen/ERP/SalaryAdvance/salaryAdvance';

const Stack = createNativeStackNavigator<RootStackNavigatorParamsList>();

export default function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignInStack"
        component={SignInScreen} // Use SignInStack here
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={BottomTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NestedNavigatorName"
        component={MainStackNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CardNavigation"
        component={CardNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ApprovedScreen"
        component={ApprovedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TravelApprovedScreen"
        component={TravelApprovedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TrainingApprovedScreen"
        component={TrainingApprovedScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ApprovalNavigator"
        component={ApprovalNavigator}
        options={{ headerShown: false }}
      />
      
      <Stack.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LeaveApplication"
        component={LeaveApplication}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchApplication"
        component={SearchApplication}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TravelApproval"
        component={TravelApproval}
        options={{ headerShown: false }}
      />

      {/* Nested View Application */}
      <Stack.Screen
        name="NestedViewApplication"
        component={NestedViewApplication}
        options={{ headerShown: false }}
      />
      {/* View Option Application */}
      <Stack.Screen
        name="ViewPersonalScreen"
        component={ViewPersonalScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="SalaryAdvance"
        component={SalaryAdvance}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
