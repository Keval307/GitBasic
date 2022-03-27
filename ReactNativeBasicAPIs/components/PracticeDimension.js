import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function PracticeDimension(props) {
  return (
    <View style={styles.container}>
      <Text
        style={
          Dimensions.get('window').height > 600
            ? styles.bigText
            : styles.smallText
        }>
        Hello World
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Click</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1}>
        <Text style={styles.text}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: 'yellow',
    // backgroundColor: 'yellow',
    alignItems: 'center',
    // width: Dimensions.get('window').height > 600 ? '62%' : '70%',
    width: Dimensions.get('window').width * 0.7,
  },
  text: {
    //fontSize: width / 12,
    // fontSize: height / 12,
    fontSize: Dimensions.get('window').height > 600 ? 23 : 13,
  },
  smallText: {
    //fontSize: width / 12,
    // fontSize: height / 12,
    fontSize: 13,
  },
  bigText: {
    fontSize: 23,
  },
  button: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Dimensions.get('window').height > 600 ? 20 : 10,
  },
  button1: {
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
    marginTop: Dimensions.get('window').height > 600 ? 20 : 10,
  },
});

export default PracticeDimension;
