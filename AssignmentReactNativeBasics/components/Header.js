import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.iconContainer}>
      <View>
        <TouchableOpacity>
          <Image source={require('../images/menu.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View>
        <Image
          source={require('../images/youtube_logo_dark.png')}
          style={styles.youtubeIcon}
          resizeMode="contain"
        />
      </View>

      <View style={styles.movieSearch}>
        <TouchableOpacity>
          <Image
            source={require('../images/video.png')}
            style={styles.movieIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../images/search.png')}
            style={styles.movieIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  icon: {
    height: 40,
    width: 40,
    tintColor: 'grey',
  },
  youtubeIcon: {
    height: 80,
    width: 150,
  },
  movieSearch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 70,
  },
  movieIcon: {
    height: 30,
    width: 30,
    tintColor: 'grey',
  },
});

export default Header;
