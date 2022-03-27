import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import ImageScreen from './ImageScreen.js';
import Description from './Description.js';

// const screenHeight = Dimensions.get('window').height;

const ImageContainer = () => {
  const DATA = [
    {
      id: '1',
      seen: 4.5,
      imageSource: require('../images/galaxy.png'),
      videoMinutes: '10:43',
      videoDescription: 'Samsung Galaxy S10+ Review: The Bar is Set!',
      channelName: 'Marques Brownlee',
      channelImage: require('../images/marques.jpeg'),
      width: 80,
      time: '3 months ago',
    },
    {
      id: '2',
      seen: 5.4,
      imageSource: require('../images/ipad_pro.jpeg'),
      videoMinutes: '10:43',
      videoDescription: 'Is The iPad Pro Worth Laptop Money?',
      channelName: 'Unbox Therapy',
      channelImage: require('../images/unbox_therapy.jpeg'),
      width: 100,
      time: '4 months ago',
    },
  ];

  return (
    <FlatList
      data={DATA}
      renderItem={({item}) => {
        return (
          <View style={styles.screen}>
            <View style={styles.post}>
              <ImageScreen
                source={item.imageSource}
                view={item.seen}
                minutes={item.videoMinutes}
                width={item.width}
              />
              <Description
                channelImage={item.channelImage}
                videoTitle={item.videoDescription}
                channelName={item.channelName}
                videoTime={item.time}
              />
            </View>
          </View>
        );
      }}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  post: {
    borderRadius: 5,
    borderColor: 'black',
    marginVertical: 10,
  },
});

export default ImageContainer;
