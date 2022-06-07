import {View, TextInput, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function SearchFeature() {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginBottom: 8,
        paddingHorizontal: 17,
      }}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="What do you want to eat?"
          style={styles.searchInput}
        />
        <Image
          source={require('../../../assets/icon/search.png')}
          style={styles.searchIcon}
        />
      </View>
      <View style={styles.promoIconContainer}>
        <Image
          source={require('../../../assets/icon/promo.png')}
          style={styles.promoIcon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    position: 'relative',
    flex: 1,
    marginRight: 18,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 25,
    height: 40,
    fontSize: 13,
    paddingLeft: 45,
    paddingRight: 20,
    backgroundColor: 'white',
  },
  searchIcon: {
    position: 'absolute',
    top: 7,
    left: 12,
  },
  promoIconContainer: {
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  promoIcon: {
    width: 27,
    height: 27,
  },
});
