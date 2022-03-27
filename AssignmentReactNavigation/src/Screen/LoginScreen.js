import React, {useEffect, useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, Platform, Alert} from 'react-native';
import screenString from '../constants/screenString';
import InputContainer from '../components/InputContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonContainer from '../components/ButtonContainer';

const LoginScreen = ({navigation}) => {
  const [emailValue, setEmailValue] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let value = await AsyncStorage.getItem('key');
    if (value !== null) {
      navigation.replace(screenString.HOME);
    }
  };

  const emailUpdate = text => {
    setEmailValue(text);
  };

  const passwordUpdate = text => {
    setPassword(text);
  };

  const alertNotification = (title, message) => {
    Alert.alert(title, message);
  };

  const saveValue = async value => {
    try {
      await AsyncStorage.setItem('key', value);
    } catch (e) {}
  };

  const pressHandler = () => {
    let emailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    let passwordValidator =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!.,\\@#\$%\^&\*])(?=.{8,})/;
    if (Number(emailValue.length) === 0 || Number(password.length) === 0) {
      alertNotification('Hang on!', 'Email or Password Field Empty');
    } else if (emailValidator.test(emailValue) === false) {
      alertNotification('Invalid Email', 'Email Format: abc@gmail.com');
    } else if (passwordValidator.test(password) === false) {
      alertNotification(
        'Invalid Password',
        'Password must be 8 character with minimum 1 Capital letter, 1 Small letter, 1 Special Character',
      );
    } else {
      saveValue(emailValue);
      navigation.replace(screenString.HOME);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <InputContainer
        placeholder="Enter Email"
        onChangeText={emailUpdate}
        autoCapitalize="none"
      />
      <InputContainer
        placeholder="Enter Password"
        onChangeText={passwordUpdate}
        secureTextEntry={true}
      />
      <ButtonContainer click={pressHandler} text="login" />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
