import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Profile, Explore} from '../Screen';
import navigationScreen from '../constants/navigationScreen.js';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import imagePath from '../constants/imagePath';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName={navigationScreen.HOME}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name={navigationScreen.HOME} component={Home} />
      <Tab.Screen
        name={navigationScreen.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            <Image source={imagePath.icProfile} />;
          },
        }}
      />

      <Tab.Screen name={navigationScreen.EXPLORE} component={Explore} />
    </Tab.Navigator>
  );
};

export default TabRoutes;
