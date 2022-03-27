import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Profile, Explore} from '../Screen';
import navigationScreen from '../constants/navigationScreen.js';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={navigationScreen.HOME}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name={navigationScreen.PROFILE}
          component={Profile}
          initialParams={{title: 'Simform Solutions', id: 1}}
        />
        <Stack.Screen name={navigationScreen.HOME} component={Home} />
        <Stack.Screen name={navigationScreen.EXPLORE} component={Explore} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
