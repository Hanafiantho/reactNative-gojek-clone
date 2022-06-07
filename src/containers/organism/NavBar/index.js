import {View, StyleSheet} from 'react-native';
import React from 'react';
import NavbarIcon from '../../../components/molecules/NavbarIcon';

export default function NavBar() {
  const data = [
    {icon: require('../../../assets/icon/home.png'), name: 'Home'},
    {icon: require('../../../assets/icon/order.png'), name: 'Orders'},
    {icon: require('../../../assets/icon/help.png'), name: 'Help'},
    {icon: require('../../../assets/icon/inbox.png'), name: 'Inbox'},
    {icon: require('../../../assets/icon/account.png'), name: 'Account'},
  ];

  return (
    <View style={styles.navMenuContainer}>
      {data.map((datum, key) => (
        <NavbarIcon key={key} icon={datum.icon} title={datum.name} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  navMenuContainer: {
    height: 54,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
});
