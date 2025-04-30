import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackNavigatorParamsList} from '../component/interface/routeinterface';
import LeaveApplicationScreen from '../screen/ERP/LeaveApplicationPage/index.leaveapplicationpage';
import TravelApplicationScreen from '../screen/ERP/TravelApplicationScreen/index.travelapplication';
import TrainingApplicationScreen from '../screen/ERP/Training/index.trainingappliation';
import ChangeRequestScreen from '../screen/ERP/ChangeRequest/index.changerequest';

const Stack = createNativeStackNavigator<RootStackNavigatorParamsList>();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LeaveApplicationScreen"
        component={LeaveApplicationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
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
      />
    
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
