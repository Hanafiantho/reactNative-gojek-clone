import {View, Image, Text, StyleSheet} from 'react-native';
import React from 'react';
import {CustomButton} from '../../atoms';

export default function NewsFeature({img, title, desc}) {
  return (
    <View style={styles.newsContainer}>
      <View style={styles.newsPictureContainer}>
        <Image source={img} style={styles.newsPicture} />
        <View style={styles.darkerPictureNews}></View>
        <View style={styles.gojekIconContainer}>
          <Image
            source={require('../../../assets/logo/white.png')}
            style={styles.gojekIcon}
          />
        </View>
      </View>
      <View style={styles.newsBodyContainer}>
        <Text style={styles.newsTitle}>{title}</Text>
        <Text style={styles.newsDescription}>{desc}</Text>
        <CustomButton>READ</CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  newsContainer: {
    padding: 16,
  },
  newsPictureContainer: {
    marginBottom: 16,
    position: 'relative',
  },
  newsPicture: {
    width: '100%',
    height: 170,
    borderRadius: 7,
  },
  darkerPictureNews: {
    backgroundColor: 'black',
    width: '100%',
    height: 170,
    borderRadius: 7,
    opacity: 0.2,
    position: 'absolute',
  },
  gojekIconContainer: {
    position: 'absolute',
    height: 15,
    width: 60,
    top: 16,
    left: 16,
  },
  gojekIcon: {
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    flex: 1,
  },
  newsBodyContainer: {
    borderBottomWidth: 1,
    borderColor: '#E8E9ED',
    paddingBottom: 16,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C1C1C',
  },
  newsDescription: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#7A7A7A',
    marginBottom: 11,
  },
});
