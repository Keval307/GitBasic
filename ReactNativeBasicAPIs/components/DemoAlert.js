import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  View,
  StyleSheet,
} from 'react-native';

const DemoAlert = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const pressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      Alert.alert(
        'Warning',
        'The name must be longer than 3 character',
        [
          {
            text: 'Ok',
            onPress: () => {
              console.warn('Ok Button Clicked');
            },
            style: 'default',
          },
          {
            text: 'Cancel',
            onPress: () => {
              console.warn('Cancel Button Clicked');
            },
            style: 'cancel',
          },

          {
            text: 'Do not show again',
            onPress: () => {
              console.warn('Do not show again Button Clicked');
            },
            style: 'destructive',
          },
        ],
        {cancelable: true, onDismiss: () => console.warn('Alert Dismissed')},
      );
    }

    //   Alert.prompt(
    //     'Warning',
    //     'The name must be longer than 3 character',
    //     [
    //       {
    //         text: 'Ok',
    //         onPress: () => {
    //           console.warn('Ok Button Clicked');
    //         },
    //         style: 'default',
    //       },
    //       {
    //         text: 'Cancel',
    //         onPress: () => {
    //           console.warn('Cancel Button Clicked');
    //         },
    //         style: 'cancel',
    //       },

    //       {
    //         text: 'Do not show again',
    //         onPress: () => {
    //           console.warn('Do not show again Button Clicked');
    //         },
    //         style: 'destructive',
    //       },
    //     ],
    //     //() => console.warn('CallBack function'),
    //     'secure-text',
    //     'Hello',
    //     'default',
    //     {cancelable: true, onDismiss: () => console.warn('Alert Dismissed')},
    //   );
    // }
  };

  return (
    <View style={styles.viewContainer}>
      <Text>Enter Your Name :</Text>
      <TextInput
        style={styles.inputContainer}
        onChangeText={text => setName(text)}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={pressHandler}>
        <Text>{submitted ? 'Clear' : 'Add'}</Text>
      </TouchableOpacity>
      {submitted ? <Text>You are Registered as : {name}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    alignItems: 'center',
  },
  inputContainer: {
    width: 120,
    height: 25,
    padding: 1,
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
  },
  buttonContainer: {
    backgroundColor: 'blue',
    width: 70,
    height: 25,
    alignItems: 'center',
  },
});

export default DemoAlert;
