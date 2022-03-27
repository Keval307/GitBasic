import React from 'react';
import {Button, Text, View} from 'react-native';
import styles from './styles.js';

const Explore = ({navigation}) => (
  <View style={styles.container}>
    <Text>Explore</Text>
    <Button title="Go Back" onPress={() => navigation.goBack()} />
    <Button title="Go To Home" onPress={() => navigation.popToTop()} />
  </View>
);

export default Explore;
