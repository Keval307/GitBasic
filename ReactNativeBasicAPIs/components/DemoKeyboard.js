import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const DemoKeyboard = () => {
  const [keyboardStatus, setKeyboardStatus] = useState();

  useEffect(() => {
    const show = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus('Keyboard Shown');
    });

    const hide = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus('Keyboard Hidden');
    });

    return () => {
      show.remove();
      hide.remove();
    };
  }, []);
  return (
    <View>
      <TextInput
        style={styles.inputContainer}
        onSubmitEditing={Keyboard.dismiss}
      />
      <Text style={styles.status}>{keyboardStatus}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 4,
    marginTop: 5,
    width: Dimensions.get('window').width * 0.7,
  },
  status: {
    padding: 10,
    textAlign: 'center',
  },
});

export default DemoKeyboard;
