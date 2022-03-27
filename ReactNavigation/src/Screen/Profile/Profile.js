import React from 'react';
import {Button, SafeAreaView, Text, TextInput, View} from 'react-native';
import navigationScreen from '../../constants/navigationScreen.js';
import styles from './styles.js';
import HeaderComp from '../../Components/HeaderComp.js';

const Profile = ({navigation, route}) => {
  //   console.log(route, 'profile');
  //   const [postText, setPostText] = React.useState('');
  const {title, id} = route.params;
  //   console.log('profile');
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(title)}</Text>
      <Text>{JSON.stringify(id)}</Text>
      <Text>Profile</Text>

      {/* <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{height: 40, padding: 10, backgroundColor: 'white'}}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: {post: postText},
            // merge: true,
          });
        }}
      /> */}

      <Button
        title="Go To Explore"
        onPress={() => navigation.navigate(navigationScreen.EXPLORE)}
      />
      <Button
        title="Replace To Explore"
        onPress={() => navigation.replace(navigationScreen.EXPLORE)}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="Update Data"
        onPress={() => navigation.setParams({title: 'hello Guys', id: 2})}
      />
    </View>
  );
};

export default Profile;
