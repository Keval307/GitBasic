import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';

const CountComponent = ({count}) => {
  const [countValue, setCountValue] = useState(count);
  console.log(count, 'count');
  console.log(countValue, 'countvalue');
  useEffect(() => {
    setCountValue(count);
    console.log(countValue, 'useEffect'); //here countValue also used so write also countValue in array argument
  }, [count, countValue]);
  return <Text>Count: {countValue}</Text>;
};

export default CountComponent;
