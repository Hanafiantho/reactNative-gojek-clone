/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
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
              source={require('./assets/icon/search.png')}
              style={styles.searchIcon}
            />
          </View>
          <View style={styles.promoIconContainer}>
            <Image
              source={require('./assets/icon/promo.png')}
              style={styles.promoIcon}
            />
          </View>
        </View>

        <View style={{paddingHorizontal: 18, marginBottom: 18}}>
          <View style={styles.headerGopayContainer}>
            <Image source={require('./assets/icon/gopay.png')} />
            <Text style={styles.gopaySaldoText}>Rp 100.000</Text>
          </View>
          <View style={styles.bodyGopayContainer}>
            <View style={styles.gopayIconContainer}>
              <Image source={require('./assets/icon/pay.png')} />
              <Text style={styles.gopayIconText}>Pay</Text>
            </View>
            <View style={styles.gopayIconContainer}>
              <Image source={require('./assets/icon/nearby.png')} />
              <Text style={styles.gopayIconText}>Nearby</Text>
            </View>
            <View style={styles.gopayIconContainer}>
              <Image source={require('./assets/icon/topup.png')} />
              <Text style={styles.gopayIconText}>Top Up</Text>
            </View>
            <View style={styles.gopayIconContainer}>
              <Image source={require('./assets/icon/more.png')} />
              <Text style={styles.gopayIconText}>More</Text>
            </View>
          </View>
        </View>

        <View>
          <View style={{flexDirection: 'row', marginBottom: 18}}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderWidth: 1,
                  width: 58,
                  height: 58,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 6,
                }}>
                <Image source={require('./assets/icon/go-ride.png')} />
              </View>
              <Text
                style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center'}}>
                GO-RIDE
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderWidth: 1,
                  width: 58,
                  height: 58,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 6,
                }}>
                <Image source={require('./assets/icon/go-car.png')} />
              </View>
              <Text
                style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center'}}>
                GO-CAR
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderWidth: 1,
                  width: 58,
                  height: 58,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 6,
                }}>
                <Image source={require('./assets/icon/go-bluebird.png')} />
              </View>
              <Text
                style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center'}}>
                GO-BLUEBIRD
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderWidth: 1,
                  width: 58,
                  height: 58,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 6,
                }}>
                <Image source={require('./assets/icon/go-send.png')} />
              </View>
              <Text
                style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center'}}>
                GO-SEND
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderWidth: 1,
                  width: 58,
                  height: 58,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 6,
                }}>
                <Image source={require('./assets/icon/go-deals.png')} />
              </View>
              <Text
                style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center'}}>
                GO-DEALS
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderWidth: 1,
                  width: 58,
                  height: 58,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 6,
                }}>
                <Image source={require('./assets/icon/go-pulsa.png')} />
              </View>
              <Text
                style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center'}}>
                GO-PULSA
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderWidth: 1,
                  width: 58,
                  height: 58,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 6,
                }}>
                <Image source={require('./assets/icon/go-food.png')} />
              </View>
              <Text
                style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center'}}>
                GO-FOOD
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderWidth: 1,
                  width: 58,
                  height: 58,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 6,
                }}>
                <Image source={require('./assets/icon/go-more.png')} />
              </View>
              <Text
                style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center'}}>
                MORE
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.navMenuContainer}>
        <View style={styles.navMenu}>
          <Image
            source={require('./assets/icon/home.png')}
            style={styles.navMenuIcon}
          />
          <Text style={styles.navMenuText}>Home</Text>
        </View>
        <View style={styles.navMenu}>
          <Image
            source={require('./assets/icon/order.png')}
            style={styles.navMenuIcon}
          />
          <Text style={styles.navMenuText}>Orders</Text>
        </View>
        <View style={styles.navMenu}>
          <Image
            source={require('./assets/icon/help.png')}
            style={styles.navMenuIcon}
          />
          <Text style={styles.navMenuText}>Help</Text>
        </View>
        <View style={styles.navMenu}>
          <Image
            source={require('./assets/icon/inbox.png')}
            style={styles.navMenuIcon}
          />
          <Text style={styles.navMenuText}>Inbox</Text>
        </View>
        <View style={styles.navMenu}>
          <Image
            source={require('./assets/icon/account.png')}
            style={styles.navMenuIcon}
          />
          <Text style={styles.navMenuText}>Account</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: 'white',
    // paddingHorizontal: 17,
    paddingTop: 15,
  },
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
  navMenuContainer: {
    height: 54,
    flexDirection: 'row',
    backgroundColor: 'white',
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
  gopayIconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gopayIconText: {
    color: 'white',
    fontSize: 13,
  },

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

export default App;
