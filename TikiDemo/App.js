/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';

import HomeScreen from './scr/screen/HomeScreen';

const App = () => {
  return (
    <View style={styles.containerView}>
      <HomeScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
});
