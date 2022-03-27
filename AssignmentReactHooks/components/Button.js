import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text, Platform} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const Button = ({text, pressEvent}) => {
  return (
    <Pressable style={styles.buttonContainer} onPress={pressEvent}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: screenWidth * 0.4,
    borderRadius: 4,
    padding: 4,
    ...Platform.select({
      ios: {
        backgroundColor: '#61d800',
      },
      android: {
        backgroundColor: '#f47100',
      },
    }),
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Button;
