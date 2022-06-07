import {View, Image, Text, StyleSheet} from 'react-native';
import React from 'react';
import GopayFeature from '../../../components/molecules/GopayFeature';

export default function Gopay() {
  const data = {
    saldo: 'Rp 100.000',
    features: [
      {icon: require('../../../assets/icon/pay.png'), name: 'Pay'},
      {icon: require('../../../assets/icon/nearby.png'), name: 'Nearby'},
      {icon: require('../../../assets/icon/topup.png'), name: 'Top Up'},
      {icon: require('../../../assets/icon/more.png'), name: 'More'},
    ],
  };

  return (
    <View style={styles.gopayContainer}>
      <View style={styles.headerGopayContainer}>
        <Image source={require('../../../assets/icon/gopay.png')} />
        <Text style={styles.gopaySaldoText}>{data.saldo}</Text>
      </View>
      <View style={styles.bodyGopayContainer}>
        {data.features.map((feature, key) => (
          <GopayFeature key={key} icon={feature.icon} text={feature.name} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gopayContainer: {
    paddingHorizontal: 18,
    marginBottom: 18,
  },
  headerGopayContainer: {
    padding: 14,
    backgroundColor: '#2C5FBB',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopStartRadius: 14,
    borderTopEndRadius: 14,
  },
  gopaySaldoText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  bodyGopayContainer: {
    flexDirection: 'row',
    backgroundColor: '#2F65BD',
    paddingTop: 20,
    paddingBottom: 14,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
});
