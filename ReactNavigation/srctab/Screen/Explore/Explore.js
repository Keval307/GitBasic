import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import navigationScreen from '../../constants/navigationScreen.js';
import HeaderComp from '../../Components/HeaderComp.js';
import ButtonComp from '../../Components/ButtonComp.js';

const Explore = ({navigation}) => {
  const goToScreen = () => {
    navigation.navigate(navigationScreen.SEARCH);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{marginHorizontal: 20}}>
        <HeaderComp text="Explore" />
        <ButtonComp buttonText="Search" onPress={goToScreen} />
      </SafeAreaView>
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

export default Explore;
