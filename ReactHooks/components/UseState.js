import React, {useState} from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import CountComponent from './CountComponent.js';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const UseState = () => {
  const [count, setCount] = useState(0);
  // const count = arr[0];
  // const setCount = arr[1];

  // console.log('render1');
  const Minus = () => {
    // console.log(count, 'start');
    setCount(pcount => pcount - 1);
    // console.log(count, 'onpress');
    // setCount(pcount => pcount - 1);
    // console.log(count, 'end');
  };

  const Add = () => {
    // console.log(count, 'start');
    setCount(pcount => pcount + 1);
    // console.log(count, 'onpress');
    // setCount(pcount => pcount - 1);
    // console.log(count, 'end');
  };
  // console.log('render1');
  // useEffect(() => {
  //   console.log('render2');
  //   return () => {
  //     console.log('render3');
  //   };
  // }, [count]);
  return (
    <View style={styles.container}>
      {/* {console.log('hello')} */}
      <Button title="Minus" onPress={Minus} />
      {/* <Text>{count}</Text> */}
      <CountComponent count={count} />
      <Button title="Plus" onPress={Add} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'grey',
    width: 40,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});

export default UseState;
