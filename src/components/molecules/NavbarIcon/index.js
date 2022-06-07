import {View, Image, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function NavbarIcon({icon, title}) {
  return (
    <View style={styles.navMenu}>
      <Image source={icon} style={styles.navMenuIcon} />
      <Text style={styles.navMenuText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navMenu: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navMenuText: {
    color: '#545454',
    fontSize: 10,
  },
  navMenuIcon: {
    width: 26,
    height: 26,
  },
});
