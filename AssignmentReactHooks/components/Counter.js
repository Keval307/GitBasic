import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
  Alert,
  Keyboard,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputField from './InputField.js';
import Button from './Button.js';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Counter = () => {
  const [textValue, setTextValue] = useState(0);
  const [stepValue, setStepValue] = useState(0);

  useEffect(() => {
    getValue();
  }, []);

  const getValue = async () => {
    try {
      let previousValueSet = await AsyncStorage.multiGet([
        'CounterValue',
        'Step',
      ]);
      const [[, previousCounterValue], [, previousStepValue]] =
        previousValueSet;
      setTextValue(Number(previousCounterValue));
      setStepValue(Number(previousStepValue));
    } catch (error) {
      console.log(error);
    }
  };

  const incrementHandler = () => {
    let temp = textValue + stepValue;
    if (isNaN(temp) || temp < 0 || temp >= 10000) {
      Alert.alert('Invalid Number', 'The Number must be between 0 to 1000');
      setTextValue(0);
    } else {
      setTextValue(temp);
      saveValue(temp.toString());
      saveStepValue(stepValue.toString());
      Keyboard.dismiss();
    }
  };

  const decrementHandler = () => {
    let temp = textValue - stepValue;
    if (isNaN(temp) || temp < 0 || temp >= 10000) {
      Alert.alert('Invalid Number', 'The Number must be between 0 to 10000');
      setTextValue(0);
    } else {
      setTextValue(temp);
      saveValue(temp.toString());
      saveStepValue(stepValue.toString());
      Keyboard.dismiss();
    }
  };

  const saveValue = async newValue => {
    try {
      await AsyncStorage.setItem('CounterValue', newValue);
    } catch (error) {
      console.log(error);
    }
  };

  const saveStepValue = async newStep => {
    try {
      await AsyncStorage.setItem('Step', newStep);
    } catch (error) {
      console.log(error);
    }
  };

  const counterValidation = text => {
    let convertNumber = Number(text);
    if (isNaN(convertNumber) || convertNumber < 0 || convertNumber >= 10000) {
      Alert.alert('Invalid Number', 'The Number must be between 0 to 10000');
      setTextValue(0);
    } else {
      setTextValue(convertNumber);
    }
  };

  const stepValidation = text => {
    let convertNumber = Number(text);
    if (isNaN(convertNumber) || convertNumber < 0 || convertNumber >= 1000) {
      Alert.alert('Invalid Step', 'The Step must be between 0 to 1000');
      setStepValue(0);
    } else {
      setStepValue(convertNumber);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.counterStepContainer}>
      <View style={styles.counterContainer}>
        <Button text="Increase" pressEvent={incrementHandler} />
        <InputField
          style={styles.InputContainer}
          keyboard="number-pad"
          changeText={counterValidation}
          currentValue={textValue.toString()}
        />
        <Button text="Decrease" pressEvent={decrementHandler} />
      </View>
      <View style={styles.stepContainer}>
        <Text style={styles.stepText}>Step to</Text>
        <InputField
          style={styles.stepInputContainer}
          keyboard="number-pad"
          changeText={stepValidation}
          currentValue={stepValue.toString()}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  counterStepContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    width: screenWidth * 0.5,
    height: screenHeight * 0.22,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  InputContainer: {
    height: '25%',
  },
  stepContainer: {
    width: screenWidth * 0.45,
    height: screenHeight * 0.18,
    marginTop: 80,
  },
  stepText: {
    fontSize: screenWidth * 0.05,
    alignSelf: 'flex-start',
  },
  stepInputContainer: {
    height: screenHeight * 0.06,
    marginTop: 6,
  },
});

export default Counter;
