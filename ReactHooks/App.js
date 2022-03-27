import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import UseState from './components/UseState.js';
import Practice from './components/Practice.js';
import PracticeCallback from './components/PracticeUseCallback.js';

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      {/* <UseState /> */}
      {/* <Practice /> */}
      <PracticeCallback />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default App;
