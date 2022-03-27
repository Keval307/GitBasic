import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screen/HomeScreen';
import LoginScreen from '../Screen/LoginScreen';
import screenString from '../constants/screenString';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={screenString.LOGIN} component={LoginScreen} />
        <Stack.Screen name={screenString.HOME} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
