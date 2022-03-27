/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/Header.js';
import StartGameScreen from './screens/StartGameScreen.js';
import GameScreen from './screens/GameScreen.js';

const App = () => {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />;
  }

  return (
    <View style={styles.screen}>
      <Header title={'Guess a Number'} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
