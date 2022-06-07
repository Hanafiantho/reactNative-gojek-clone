import {View, Image, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function MainFeatureIcon({icon, text}) {
  return (
    <View style={styles.featureContainer}>
      <View style={styles.featureIconBox}>
        <Image source={icon} />
      </View>
      <Text style={styles.featureTextStyle}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  featureContainer: {
    // flex: 1 / 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 18,
    marginBottom: 18,
  },
  featureIconBox: {
    borderWidth: 1,
    width: 58,
    height: 58,
    borderColor: '#EFEFEF',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  featureTextStyle: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
