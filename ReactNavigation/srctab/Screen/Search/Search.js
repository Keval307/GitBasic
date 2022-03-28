import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HeaderComp from '../../Components/HeaderComp.js';

const Search = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderComp
        goBack={() => {
          navigation.goBack();
        }}
      />
      <Text>Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
});

export default Search;
