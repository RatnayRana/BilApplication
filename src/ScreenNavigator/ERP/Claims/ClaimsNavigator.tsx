import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { RootStackNavigatorParamsList } from '../../../component/interface/routeinterface';
import TravelClaimScreen from '../../../screen/ERP/Claim/TravelClaim/TravelClaimScreen';
import TrainingClaimScreen from '../../../screen/ERP/Claim/TrainingClaim/TrainingClaimScreen';

const Stack = createNativeStackNavigator<RootStackNavigatorParamsList>();

const ClaimsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TravelClaimScreen"
        component={TravelClaimScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TrainingClaimScreen"
        component={TrainingClaimScreen}
        options={{headerShown: false}}
      />
  
    </Stack.Navigator>
  );
};

export default ClaimsNavigator;
