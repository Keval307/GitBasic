import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';
import Color from '../constants/color';

const screenWidth = Dimensions.get('window').width;

const Description = props => {
  return (
    <View style={styles.descriptionContainer}>
      <Image style={styles.channelPhoto} source={props.channelImage} />
      <View style={styles.description}>
        <Text style={styles.videoDescriptionText}>{props.videoTitle}</Text>
        <View style={styles.nameTimeContainer}>
          <View style={styles.rightIconContainer}>
            <Image
              style={styles.rightIcon}
              source={require('../images/right.png')}
            />
          </View>
          <View style={styles.nameTime}>
            <Text style={styles.nameTimeText}>{props.channelName}</Text>
            <Text style={styles.nameTimeText}>{` ﹒${props.videoTime}`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  channelPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  description: {
    marginHorizontal: 3,
  },
  videoDescriptionText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: screenWidth / 29,
  },
  nameTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightIconContainer: {
    backgroundColor: Color.primary,
    width: 12,
    height: 12,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIcon: {
    width: 6,
    height: 6,
    tintColor: 'white',
  },
  nameTime: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: 2,
  },
  nameTimeText: {
    color: 'grey',
  },
});

export default Description;
