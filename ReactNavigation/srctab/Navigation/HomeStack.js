import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const HomeStack = createNativeStackNavigator();


function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name={} component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}
