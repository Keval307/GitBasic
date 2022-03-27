import React, {useEffect} from 'react';
import {Alert, BackHandler, StyleSheet, Text, View} from 'react-native';

const DemoBackHandler = () => {
  const backAction = () => {
    Alert.alert('Hold on', 'Are you sure you want to exit', [
      {text: 'Cancel', onPress: () => {}, style: 'cancel'},
      {text: 'Ok', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Click Back Button</Text>
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

export default DemoBackHandler;
