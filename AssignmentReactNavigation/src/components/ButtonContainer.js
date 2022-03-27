import React from 'react';
import {Pressable, Text, StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const ButtonContainer = prop => {
  return (
    <Pressable
      style={{...styles.buttonContainer, ...prop.style}}
      onPress={prop.click}>
      <Text style={styles.buttonText}>{prop.text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: screenWidth * 0.4,
    height: screenHeight * 0.045,
    backgroundColor: 'blue',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    padding: 2,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ButtonContainer;

// onPress={() => navigation.navigate(screenString.HOME)}
