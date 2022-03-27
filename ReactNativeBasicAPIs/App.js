import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import DemoAlert from './components/DemoAlert.js';
import DemoPlateform from './components/DemoPlateform.js';
import DemoDimension from './components/DemoDimension.js';
import PracticeDimension from './components/PracticeDimension.js';
import DemoKeyboard from './components/DemoKeyboard.js';
import DemoAsyncStorage from './components/DemoAsyncStorage.js';
import DemoBackHandler from './components/DemoBackHandler.js';
import DemoAppState from './components/DemoAppState.js';
import DemoLinking from './components/DemoLinking.js';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <DemoAlert /> */}
      {/* <DemoPlateform /> */}
      {/* <DemoDimension /> */}
      {/* <PracticeDimension /> */}
      {/* <DemoKeyboard /> */}
      <DemoAsyncStorage />
      {/* <DemoBackHandler /> */}
      {/* <DemoAppState /> */}
      {/* <DemoLinking /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
  },
});

export default App;
