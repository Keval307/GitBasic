import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from '../Screen/Home/styles';

const HeaderComp = ({goBack = () => {}, text}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 42,
      }}>
      <TouchableOpacity onPress={goBack}>
        <Text>GoBack</Text>
      </TouchableOpacity>
      <Text>{text}</Text>
      <Text />
    </View>
  );
};

export default HeaderComp;
