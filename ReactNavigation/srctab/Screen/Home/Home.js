import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import HeaderComp from '../../Components/HeaderComp.js';
import ButtonComp from '../../Components/ButtonComp.js';
import navigationScreen from '../../constants/navigationScreen.js';

const Home = ({navigation}) => {
  const goToScreen = () => {
    navigation.navigate(navigationScreen.PRODUCT_DETAILS);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{marginHorizontal: 20}}>
        <HeaderComp text="Home" />
        <ButtonComp buttonText="Product Details" onPress={goToScreen} />
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

export default Home;
