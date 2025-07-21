import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home';
import Favourite from '../Favourite';
import Aboutus from '../aboutus';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Calculator from '../calculator/calculator';
import { colors } from '../../utils/color';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        height: 80,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 12,

      },
      tabBarLabelStyle: {
        fontWeight: 'bold',
        fontSize: 11,
      },
      tabBarIconStyle: {
        alignItems: 'center',
        justifyContent: 'center',
      }
    }}>
      <Tab.Screen name="Home" component={Home} options={{
        headerTitleStyle: { display: 'none' },


        // Hides the default title
        headerStyle: {
          backgroundColor: colors.primary, shadowColor: 'transparent', // for iOS
          elevation: 0,
        },
        tabBarIcon: ({ focused, color, size }) => (
          <Icon
            name={focused ? 'home' : 'home'}  // Choose icon based on focus
            size={size}  // Use the provided size
            color={color}
          />),
      }} />
      {/* <Tab.Screen
        name="Calculator"
        component={Calculator}
        // eslint-disable-next-line react/no-unstable-nested-components
        options={{headerShown: false,tabBarIcon: ({ focused, color, size }) => (

          <FontAwesome
            name={focused ? 'calculator' : 'calculator'}  // Choose icon based on focus
            size={size}  // Use the provided size
            color={color}  // Use the provided color
          />   )   }}
      /> */}
      <Tab.Screen
        name="User"
        component={Aboutus}
        options={{
          headerTitleStyle: { display: 'none' },


          // Hides the default title
          headerStyle: {
            backgroundColor: colors.primary, shadowColor: 'transparent', // for iOS
            elevation: 0,
          }, tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? 'user' : 'user'}  // Choose icon based on focus
              size={size}  // Use the provided size
              color={color}  // Use the provided color
            />)
        }}


      />
      <Tab.Screen
        name="Setting"
        component={Favourite}
        options={{
          headerTitleStyle: { display: 'none' },


          // Hides the default title
          headerStyle: {
            backgroundColor: colors.primary, shadowColor: 'transparent', // for iOS
            elevation: 0,
          }, tabBarIcon: ({ focused, color, size }) => (
            <AntDesign
              name={focused ? 'setting' : 'setting'}  // Choose icon based on focus
              size={size}  // Use the provided size
              color={color}  // Use the provided color
            />)
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
