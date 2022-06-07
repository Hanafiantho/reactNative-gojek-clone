import {View, Image, Text, StyleSheet} from 'react-native';
import React from 'react';
import {CustomButton} from '../../atoms';

export default function InternalInfoFeature({title, pict, subtitle, desc}) {
  return (
    <View style={styles.InternalInfoContainer}>
      <Image
        source={require('../../../assets/logo/gojek.png')}
        style={styles.gojekIcon}
      />
      <Text style={styles.internalInfoTitle}>{title}</Text>
      <View style={styles.internalInfoBodyContainer}>
        <View>
          <Image source={pict} />
        </View>
        <View style={{paddingLeft: 16}}>
          <Text style={styles.internalInfoSubTitle}>{subtitle}</Text>
          <Text style={styles.internalInfoDesc}>{desc}</Text>
        </View>
      </View>
      <CustomButton>CONNECT</CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  InternalInfoContainer: {
    paddingHorizontal: 16,
    paddingTop: 0,
    paddingBottom: 32,
  },
  gojekIcon: {
    height: 15,
    width: 60,
    marginBottom: 15,
  },
  internalInfoTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1C1C1C',
    marginBottom: 20,
  },
  internalInfoBodyContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  internalInfoSubTitle: {
    fontSize: 15,
    color: '#4A4A4A',
    fontWeight: 'bold',
  },
  internalInfoDesc: {
    fontSize: 15,
    color: '#4A4A4A',
    width: '60%',
  },
});
