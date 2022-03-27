import React, {useCallback, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import List from './List.js';

const PracticeCallback = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);
  const [data, setData] = useState('1');

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const submitData = () => {
    setNumber(Number(data));
  };

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333',
  };
  return (
    <View style={[styles.container, theme]}>
      <TextInput
        style={styles.inputContainer}
        onChangeText={text => setData(text)}
      />
      <TouchableOpacity onPress={() => setDark(prevDark => !prevDark)}>
        <Text>Toggle Theme</Text>
      </TouchableOpacity>
      <List getItems={getItems} />
      <TouchableOpacity onPress={submitData}>
        <Text style={{margin: 10, fontSize: 22}}>Submit</Text>
      </TouchableOpacity>
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
});

export default PracticeCallback;

// const [count, setCount] = useState(0);
//   const [todo, setTodo] = useState(['Hello']);

//   const add = () => {
//     setCount(prev => prev + 1);
//   };

//   const addTodo = () => {
//     setTodo(item => [...item, 'New Item']);
//     console.log('Inside Function');
//   };
