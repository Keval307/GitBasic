import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Counter from './components/Counter.js';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Counter />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
