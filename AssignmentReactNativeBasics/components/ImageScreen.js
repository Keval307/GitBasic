import React from 'react';
import {View, Image, StyleSheet, Text, Dimensions} from 'react-native';
import Color from '../constants/color';

const screenWidth = Dimensions.get('window').width;

const ImageScreen = props => {
  return (
    <View style={styles.imageView}>
      <Image style={styles.image} resizeMode="cover" source={props.source} />
      <View style={styles.seenContainer}>
        <View style={styles.imageText}>
          <Image
            source={require('../images/view.png')}
            style={styles.seenImage}
          />
          <Text style={styles.seenText}>{`${props.view}M`}</Text>
        </View>
      </View>
      <View style={styles.dotContainer}>
        <Image source={require('../images/dots.png')} style={styles.dotImage} />
      </View>
      <View style={styles.minuteContainer}>
        <Text style={styles.minuteText}>{props.minutes}</Text>
      </View>
      <View style={styles.progressionbar}>
        <View style={{...styles.progress, width: props.width}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageView: {
    marginVertical: 15,
    marginHorizontal: 10,
    height: 230,
  },
  image: {
    flex: 1,
    borderRadius: 18,
    width: '100%',
    height: '100%',
  },
  seenContainer: {
    position: 'absolute',
    left: 12,
    top: 10,
    width: 75,
    height: 30,
    backgroundColor: Color.primary,
    borderRadius: 15,
  },
  seenText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  imageText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  seenImage: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
  dotContainer: {
    position: 'absolute',
    left: screenWidth - 70,
    top: 10,
  },
  dotImage: {
    width: 30,
    height: 25,
    tintColor: 'white',
  },
  minuteContainer: {
    position: 'absolute',
    left: screenWidth - 98,
    top: 192,
    paddingHorizontal: 10,
    paddingVertical: 1,
    backgroundColor: '#383131',
    borderRadius: 10,
  },
  minuteText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  progressionbar: {
    position: 'absolute',
    left: 16,
    top: 226,
  },
  progress: {
    backgroundColor: Color.primary,
    height: 4,
    width: 50,
  },
});

export default ImageScreen;
