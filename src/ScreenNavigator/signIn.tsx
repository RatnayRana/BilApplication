import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screen/auth/signin';
import {RootStackNavigatorParamsList} from '../component/interface/routeinterface';

const Stack = createNativeStackNavigator<RootStackNavigatorParamsList>();



export default function SignInScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
