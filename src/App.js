/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SearchFeature from './components/molecules/SearchFeature';
import NewsFeature from './components/molecules/NewsFeature';
import InternalInfoFeature from './components/molecules/InternalInfoFeature';
import GoBannerFeature from './components/molecules/GoBannerFeature';
import NavbarIcon from './components/molecules/NavbarIcon';
import Gopay from './containers/organism/GoPay';
import MainFeature from './containers/organism/MainFeatures';
import ScrollAbleGofood from './containers/organism/ScrollAbleGofood';
import NavBar from './containers/organism/NavBar';

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        {/* SEARCH */}
        <SearchFeature />

        <ScrollView>
          {/* GOPAY */}
          <Gopay />

          {/* MAIN FEATURE */}
          <MainFeature />

          <View style={{height: 17, backgroundColor: '#F2F2F4'}}></View>

          {/* NEWS */}
          <NewsFeature
            img={require('./assets/dummy/sepak-bola.jpg')}
            title="GO-NEWS"
            desc="Dimas Dirajat selamatkan penalti, Timnas U-23 kalahkan Brunei"
          />

          {/* INTERNAL INFO */}
          <InternalInfoFeature
            title="Complete your profile"
            pict={require('./assets/dummy/facebook-connect.png')}
            subtitle="Connect with Facebook"
            desc="Log in faster without verification code"
          />

          {/* GOBANNER */}
          <GoBannerFeature
            img={require('./assets/dummy/food-banner.jpg')}
            icon={require('./assets/logo/white.png')}
            title="Free GO-FOOD voucher"
            desc="Quick, before they run out!"
          />

          {/* SCROLLABLE GOFOOD */}
          <ScrollAbleGofood />
        </ScrollView>
      </View>

      <NavBar />
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
    paddingTop: 15,
  },
});

export default App;
