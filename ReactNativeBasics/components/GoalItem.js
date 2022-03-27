import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = prop => {
  return (
    <TouchableOpacity onPress={() => prop.onDelete(prop.id)}>
      <View style={styles.listItem}>
        <Text>{prop.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default GoalItem;
