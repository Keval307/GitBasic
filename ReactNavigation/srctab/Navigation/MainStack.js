import TabRoutes from './TabRoutes.js';
import React from 'react';
import navigationScreen from '../constants/navigationScreen';
import {EditProfile, ProductDetails} from '../Screen/index.js';
import Search from '../Components/ButtonComp.js';

const MainStack = Stack => {
  return (
    <>
      <Stack.Screen name={navigationScreen.TABS} component={TabRoutes} />
      <Stack.Screen
        name={navigationScreen.PRODUCT_DETAILS}
        component={ProductDetails}
      />
      <Stack.Screen name={navigationScreen.SEARCH} component={Search} />
      <Stack.Screen
        name={navigationScreen.EDITPROFILE}
        component={EditProfile}
      />
    </>
  );
};

export default MainStack;
