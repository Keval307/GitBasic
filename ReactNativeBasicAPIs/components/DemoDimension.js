import React, {useState, useEffect} from 'react';
import {StyleSheet, Dimensions, View, Text} from 'react-native';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const DemoDimension = () => {
  const [dimensions, setDimensions] = useState({window, screen});

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({window, screen}) => {
        setDimensions({window, screen});
      },
    );
    return () => subscription.remove();
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Window Dimensions</Text>
      {Object.entries(dimensions.window).map(([key, value]) => {
        console.log(dimensions.window);
        // console.log(value);
        return (
          <Text key={key}>
            {key} - {value}
          </Text>
        );
      })}
      <Text style={styles.header}>Screen Dimensions</Text>
      {Object.entries(dimensions.screen).map(([key, value]) => (
        <Text key={key}>
          {key} - {value}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 16,
    marginVertical: 10,
  },
});

export default DemoDimension;
