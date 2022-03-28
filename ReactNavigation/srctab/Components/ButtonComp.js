import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Color from '../constants/color.js';

const Search = ({buttonText, onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Color.tabColor,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  buttonText: {
    color: 'blue',
  },
});

export default Search;
