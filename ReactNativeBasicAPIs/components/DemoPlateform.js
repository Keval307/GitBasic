import React from 'react';
import {Text, ScrollView, Platform, StyleSheet, Dimensions} from 'react-native';

const DemoPlateform = () => {
  console.log(Platform);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>OS</Text>
      <Text style={styles.value}>{Platform.OS}</Text>
      <Text>OS Version</Text>
      <Text style={styles.value}>{Platform.Version}</Text>
      <Text>Width</Text>
      <Text style={styles.value}>{Dimensions.get('window').width}</Text>
      <Text>Height</Text>
      <Text style={styles.value}>{Dimensions.get('window').height}</Text>
      <Text>isTesting</Text>
      <Text style={styles.value}>{Platform.isTesting.toString()}</Text>
      <Text>isTV</Text>
      <Text style={styles.value}>{Platform.isTV.toString()}</Text>
      {Platform.OS === 'ios' && (
        <>
          <Text>isPad</Text>
          <Text style={styles.value}>{Platform.isPad.toString()}</Text>
        </>
      )}
      <Text>Constants</Text>
      <Text style={styles.value}>
        {JSON.stringify(Platform.constants, null, 2)}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    fontWeight: '600',
    padding: 4,
    marginBottom: 8,
    ...Platform.select({
      android: {
        color: 'green',
      },
      ios: {
        color: 'red',
      },
      default: {
        // other platforms, web for example
        color: 'blue',
      },
    }),
  },
});

export default DemoPlateform;
