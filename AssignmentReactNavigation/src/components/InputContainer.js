import React from 'react';
import {TextInput, StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const InputContainer = prop => {
  return <TextInput {...prop} style={styles.inputContainer} />;
};

const styles = StyleSheet.create({
  inputContainer: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.05,
    borderColor: 'black',
    borderWidth: 1,
    padding: 1,
    marginVertical: 10,
  },
});

export default InputContainer;
