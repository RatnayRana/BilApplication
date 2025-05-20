import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { RootStackNavigatorParamsList } from '../../../component/interface/routeinterface';
import ViewTravelApplication from '../../../screen/ERP/ViewData/Travel/viewTravelApplication';
import ViewLeaveApplication from '../../../screen/ERP/ViewData/Leave/viewLeaveapplication';
import ViewTrainingApplication from '../../../screen/ERP/ViewData/Training/viewTrainingApplication';

const Stack = createNativeStackNavigator<RootStackNavigatorParamsList>();

const NestedViewApplication = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ViewLeaveApplication"
        component={ViewLeaveApplication}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ViewTravelApplication"
        component={ViewTravelApplication}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ViewTrainingApplication"
        component={ViewTrainingApplication}
        options={{headerShown: false}}
      />
  
    </Stack.Navigator>
  );
};

export default NestedViewApplication;
