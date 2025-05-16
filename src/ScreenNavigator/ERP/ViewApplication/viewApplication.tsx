import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { RootStackNavigatorParamsList } from '../../../component/interface/routeinterface';
import ViewTravelApplication from '../../../screen/ERP/ViewData/Training/viewTrainingApplication';
import ViewLeaveApplication from '../../../screen/ERP/ViewData/Leave/viewLeaveapplication';

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
      {/* <Stack.Screen
        name="TravelApplicationScreen"
        component={TravelApplicationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TrainingApplicationScreen"
        component={TrainingApplicationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChangeRequestScreen"
        component={ChangeRequestScreen}
        options={{headerShown: false}}
      /> */}
    
    </Stack.Navigator>
  );
};

export default NestedViewApplication;
