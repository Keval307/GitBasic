import React from 'react';
import {Dimensions, TextInput, StyleSheet} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const InputField = ({style, keyboard, changeText, currentValue}) => {
  return (
    <TextInput
      style={{...styles.textInput, ...style}}
      keyboardType={keyboard}
      onChangeText={changeText}
      value={currentValue}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: screenWidth * 0.45,
    textAlign: 'center',
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'black',
    padding: 2,
  },
});

export default InputField;
