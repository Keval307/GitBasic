import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  BackHandler,
} from 'react-native';
import screenString from '../constants/screenString';
import DATA from '../constants/data';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonContainer from '../components/ButtonContainer';

const screenWidth = Dimensions.get('window').width;

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);

  const logoutHandler = () => {
    navigation.replace(screenString.LOGIN);
    AsyncStorage.clear();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Simform Technology</Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <ButtonContainer
        click={logoutHandler}
        style={styles.buttonContainer}
        text="logout"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  header: {
    fontWeight: '900',
    color: 'white',
    margin: 12,
    fontSize: 30,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 16,
    width: screenWidth * 0.9,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
  buttonContainer: {
    marginVertical: 10,
  },
  buttonText: {
    textAlign: 'center',
    padding: 2,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default HomeScreen;
