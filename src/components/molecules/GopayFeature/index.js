import {View, Image, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function GopayFeature({icon, text}) {
  return (
    <View style={styles.gopayIconContainer}>
      <Image source={icon} />
      <Text style={styles.gopayIconText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  gopayIconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gopayIconText: {
    color: 'white',
    fontSize: 13,
  },
});
