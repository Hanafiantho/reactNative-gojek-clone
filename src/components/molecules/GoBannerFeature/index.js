import {View, Image, Text, StyleSheet} from 'react-native';
import React from 'react';
import {CustomButton} from '../../atoms';

export default function GoBannerFeature({img, icon, title, desc}) {
  return (
    <View style={styles.goBannerContainer}>
      <Image source={img} style={styles.goBannerImage} />
      <View style={styles.darkerImage}></View>
      <View style={styles.gojekIconContainer}>
        <Image source={icon} style={styles.gojekIcon} />
      </View>
      <View style={styles.goBannerBodyContainer}>
        <View>
          <Text style={styles.goBannerTitle}>{title}</Text>
          <Text style={styles.goBannerDesc}>{desc}</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <CustomButton>GET VOUCHER</CustomButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  goBannerContainer: {
    marginHorizontal: 16,
    position: 'relative',
    borderBottomWidth: 1,
    borderBottomColor: '#E8E9ED',
    paddingBottom: 16,
    marginBottom: 16,
  },
  goBannerImage: {
    width: '100%',
    height: 170,
    borderRadius: 7,
  },
  darkerImage: {
    backgroundColor: 'black',
    width: '100%',
    height: 170,
    borderRadius: 7,
    opacity: 0.2,
    position: 'absolute',
  },
  gojekIconContainer: {
    position: 'absolute',
    width: 60,
    height: 15,
    top: 16,
    left: 16,
  },
  gojekIcon: {
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    flex: 1,
  },
  goBannerBodyContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 16,
    left: 0,
    width: '100%',
    paddingHorizontal: 19,
    paddingBottom: 16,
  },
  goBannerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  goBannerDesc: {
    fontSize: 12,
    fontWeight: '400',
    color: 'white',
  },
});
