import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Profile, Explore} from '../Screen';
import navigationScreen from '../constants/navigationScreen.js';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainStack from './MainStack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Tab.Screen name={navigationScreen.PROFILE} component={Profile} />
        <Tab.Screen name={navigationScreen.HOME} component={Home} />
        <Tab.Screen name={navigationScreen.EXPLORE} component={Explore} /> */}
        {MainStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
