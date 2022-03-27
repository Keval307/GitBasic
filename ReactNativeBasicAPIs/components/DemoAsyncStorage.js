import React, {useEffect, useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DemoAsyncStorage = () => {
  const [textValue, setTextValue] = useState('');
  const [value, setValue] = useState();

  useEffect(() => {
    getValue();
  });

  const saveValue = async () => {
    if (textValue.length === 0) {
      Alert.alert('Warning!', 'Please write your Data');
    } else {
      try {
        await AsyncStorage.setItem('UserName', textValue);
        Alert.alert('Data Saved');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getValue = async () => {
    try {
      await AsyncStorage.getItem('UserName').then(val => {
        setValue(val);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('UserName');
      getValue();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={text => setTextValue(text)}
        placeholder="Enter Text Here"
        style={styles.inputContainer}
        // value={textValue}
      />
      <TouchableOpacity style={styles.button} onPress={saveValue}>
        <Text style={styles.buttonText}>Save Value</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={getValue}>
        <Text style={styles.buttonText}>Get Value</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={removeValue}>
        <Text style={styles.buttonText}>Remove Value</Text>
      </TouchableOpacity>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  inputContainer: {
    height: 45,
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 10,
    fontSize: 18,
    padding: 1,
  },
  button: {
    // fontSize: 16,
    backgroundColor: 'blue',
    padding: 2,
    marginTop: 10,
    minWidth: 250,
    height: 40,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    padding: 5,
    color: 'white',
    fontSize: 16,
  },
});

export default DemoAsyncStorage;
