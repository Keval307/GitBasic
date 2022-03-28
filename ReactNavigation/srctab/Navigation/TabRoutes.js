import React from 'react';
import {Home, Profile, Explore} from '../Screen';
import navigationScreen from '../constants/navigationScreen.js';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import imagePath from '../constants/imagePath';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName={navigationScreen.HOME}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#ADD8E6',
          // bottom: 20,
          // position: 'absolute',
          // borderRadius: 15,
        },
      }}>
      <Tab.Screen
        name={navigationScreen.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={imagePath.icHome}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? 'red' : 'black',
                }}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name={navigationScreen.EXPLORE}
        component={Explore}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={imagePath.icExplore}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? 'red' : 'black',
                }}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name={navigationScreen.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={imagePath.icProfile}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? 'red' : 'black',
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
