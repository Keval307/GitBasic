import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HeaderComp = ({goBack, text}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 42,
      }}>
      {!!goBack ? (
        <TouchableOpacity
          onPress={!!goBack ? goBack : () => navigation.goBack()}>
          <Text>GoBack</Text>
        </TouchableOpacity>
      ) : (
        <Text />
      )}

      <Text>{text}</Text>
      <Text />
    </View>
  );
};

export default HeaderComp;
