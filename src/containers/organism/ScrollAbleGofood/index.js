import {View, Image, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import ScrollAbleItem from '../../../components/molecules/ScrollAbleItem';

export default function ScrollAbleGofood() {
  const data = [
    {
      img: require('../../../assets/dummy/go-food-banka.jpg'),
      name: 'Martabak Bangka',
    },
    {img: require('../../../assets/dummy/go-food-gm.jpg'), name: 'Bakmi GM'},
    {
      img: require('../../../assets/dummy/go-food-kfc.jpg'),
      name: 'KFC Antapani',
    },
    {
      img: require('../../../assets/dummy/go-food-orins.jpg'),
      name: 'Orins Jakarta',
    },
    {
      img: require('../../../assets/dummy/go-food-pak-boss.jpg'),
      name: 'Pak Boss Jakarta',
    },
  ];

  return (
    <View style={{marginBottom: 16}}>
      <View style={styles.gopayIconContainer}>
        <Image
          source={require('../../../assets/logo/go-food.png')}
          style={styles.gopayIcon}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 16,
          paddingHorizontal: 16,
        }}>
        <View>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C'}}>
            Nearby Restaurant
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61A756'}}>
            See All
          </Text>
        </View>
      </View>

      <ScrollView horizontal style={{paddingLeft: 16}}>
        {data.map((datum, key) => (
          <ScrollAbleItem key={key} img={datum.img} title={datum.name} />
        ))}
      </ScrollView>

      <View style={styles.bottomLine}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  gopayIconContainer: {
    width: 60,
    height: 15,
    marginLeft: 16,
  },
  gopayIcon: {
    height: undefined,
    width: undefined,
    resizeMode: 'contain',
    flex: 1,
  },
  bottomLine: {
    borderBottomWidth: 1,
    paddingTop: 16,
    marginHorizontal: 16,
    borderBottomColor: '#E8E9ED',
  },
});
