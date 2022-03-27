import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const Practice = () => {
  const [name, setName] = useState('');
  //const renderCount = useRef(0);
  // const inputRef = useRef();
  const prevName = useRef();

  //console.log(renderCount, 'object');
  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1;
  // });

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  const nameUpdate = text => {
    setName(text);
  };

  // const focus = () => {
  //   // console.log(inputRef.current);
  //   inputRef.current.focus();
  //   inputRef.current.value = 'Hello world';
  // };

  return (
    <View style={styles.container}>
      <TextInput
        // ref={inputRef}
        style={styles.inputContainer}
        onChangeText={nameUpdate}
        value={name}
      />
      {/* <TouchableOpacity onPress={focus}>
        <Text>Click</Text>
      </TouchableOpacity> */}
      <Text>Hello {name}</Text>
      <Text>Previous Name: {prevName.current}</Text>
      {/* <Text>Rendered : {renderCount.current}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'black',
    width: 150,
  },
  button: {
    backgroundColor: 'blue',
    height: 20,
    width: 30,
    marginVertical: 5,
  },
});

export default Practice;
