import {View, Image, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function ScrollAbleItem({img, title}) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemImgContainer}>
        <Image source={img} style={styles.itemImg} />
      </View>
      <View>
        <Text style={styles.itemTitle}>{title}a</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginRight: 16,
  },
  itemImgContainer: {
    width: 150,
    height: 150,
    marginBottom: 12,
  },
  itemImg: {
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    flex: 1,
    borderRadius: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C1C1C',
  },
});
