import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/colors.js';

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.accent,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 22,
    color: Colors.accent,
  },
});

export default NumberContainer;
