import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import navigationScreen from '../../constants/navigationScreen.js';
import styles from './styles.js';

const Home = ({navigation, route}) => {
  //   React.useEffect(() => {
  //     if (route.params?.post) {
  //     }
  //   }, [route.params?.post]);

  const pressHandler = () => {
    navigation.push(navigationScreen.PROFILE, {
      title: 'Hello World',
      id: 2,
    });
  };
  //   const extra = useNavigation();
  return (
    <View style={styles.container}>
      {/* <Text style={{margin: 10}}>Post: {route.params?.post}</Text> */}

      <Button title="Go To Profile" onPress={pressHandler} />
      {/* <Button
        title="Update the title"
        onPress={() => navigation.setOptions({title: 'Updated!'})}
      /> */}
      {/* <Button
        title="Replace To Profile"
        onPress={() => navigation.replace(navigationScreen.PROFILE)}
      /> */}
    </View>
  );
};

export default Home;
