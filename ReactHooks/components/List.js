import React, {useEffect, useState} from 'react';
import {Text, StyleSheet} from 'react-native';

const List = ({getItems}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log('Updating Items');
  }, [getItems]);
  return items.map((item, index) => (
    <Text key={index} style={styles.text}>
      {item}
    </Text>
  ));
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
  },
});

export default List;
