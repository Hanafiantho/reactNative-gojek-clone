import {View, StyleSheet} from 'react-native';
import React from 'react';
import MainFeatureIcon from '../../../components/molecules/MainFeatureIcon';

export default function MainFeature() {
  const data = [
    {icon: require('../../../assets/icon/go-ride.png'), name: 'GO-RIDE'},
    {icon: require('../../../assets/icon/go-car.png'), name: 'GO-CAR'},
    {
      icon: require('../../../assets/icon/go-bluebird.png'),
      name: 'GO-BLUEBIRD',
    },
    {icon: require('../../../assets/icon/go-send.png'), name: 'GO-SEND'},
    {icon: require('../../../assets/icon/go-deals.png'), name: 'GO-DEALS'},
    {icon: require('../../../assets/icon/go-pulsa.png'), name: 'GO-PULSA'},
    {icon: require('../../../assets/icon/go-food.png'), name: 'GO-FOOD'},
    {icon: require('../../../assets/icon/go-more.png'), name: 'MORE'},
  ];

  return (
    <View style={styles.mainFeaturesContainer}>
      {data.map((datum, key) => (
        <MainFeatureIcon key={key} icon={datum.icon} text={datum.name} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  mainFeaturesContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
  },
});
