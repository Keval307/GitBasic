import React from 'react';
import {View, Pressable, Text, StyleSheet, Dimensions} from 'react-native';
import Color from '../constants/color.js';

const ButtonContainer = () => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={() => {}} style={[styles.button, styles.firstButton]}>
        <Text style={[styles.text, styles.firstButtonText]}>High Tech</Text>
      </Pressable>
      <Pressable onPress={() => {}} style={styles.button}>
        <Text style={styles.text}>News</Text>
      </Pressable>
      <Pressable onPress={() => {}} style={styles.button}>
        <Text style={styles.text}>Music</Text>
      </Pressable>
      <Pressable onPress={() => {}} style={styles.button}>
        <Text style={styles.text}>All</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: Dimensions.get('window').height / 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  button: {
    borderWidth: 2,
    borderColor: Color.primary,
    borderRadius: 19,
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  text: {
    color: Color.primary,
    fontWeight: 'bold',
    fontSize: 15,
  },
  firstButton: {
    backgroundColor: Color.primary,
  },
  firstButtonText: {
    color: 'white',
  },
});

export default ButtonContainer;
