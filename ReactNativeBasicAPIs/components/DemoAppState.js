import React, {useRef, useEffect, useState} from 'react';
import {StyleSheet, Text, View, AppState} from 'react-native';

const DemoAppState = () => {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    // console.log(AppState);
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
      }
      //   console.log('nextState', nextAppState);
      //   console.log('AppState', appState.current);

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);
  return (
    <View style={styles.container}>
      <Text>AppState Example</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DemoAppState;
