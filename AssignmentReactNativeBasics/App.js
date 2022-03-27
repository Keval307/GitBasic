import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from './components/Header.js';
import ButtonContainer from './components/ButtonContainer.js';
import ImageContainer from './components/ImageContainer.js';

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Header />
      <ButtonContainer />
      <ImageContainer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#e6e6e6',
  },
});

export default App;
