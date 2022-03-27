import TabRoutes from './TabRoutes.js';
import React from 'react';
import navigationScreen from '../constants/navigationScreen';

const MainStack = Stack => {
  return (
    <>
      <Stack.Screen name={navigationScreen.TABS} component={TabRoutes} />
    </>
  );
};

export default MainStack;
