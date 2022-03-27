import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = props => {
  return <TextInput {...props} style={{...styles.input, ...props.style}} />;
};

const styles = StyleSheet.create({
  input: {
    height: 37,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginVertical: 8,
  },
});

export default Input;
