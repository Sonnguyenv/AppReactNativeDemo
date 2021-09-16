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
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomeSectionView from '../components/HomeSectionView';

const HomeScreen = () => {
  return (
    <View style={styles.containerView}>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerView}>
        {/* InputView */}
        <View style={styles.inputView}>
          <FontAwesome name="search" size={20} color={colorTextPlaceHolder} />
          <TextInput
            style={styles.inputText}
            placeholder="Bạn tìm gì hôm nay?"
          />
        </View>
        {/* CartView */}
        <View style={styles.cartView}>
          <FontAwesome name="shopping-cart" size={24} color="white" />
        </View>
      </View>
      <ScrollView>
        <HomeSectionView />
        <HomeSectionView />
        <HomeSectionView />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const colorTextPlaceHolder = '#969696';
const colorBackgroundHeader = '#1e88e5';

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },

  headerView: {
    backgroundColor: colorBackgroundHeader,
    paddingTop: 50,
    paddingBottom: 4,
    flexDirection: 'row',
  },

  inputView: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginLeft: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 2,
  },

  inputText: {
    color: colorTextPlaceHolder,
    fontSize: 14,
    marginLeft: 8,
    fontWeight: '500',
  },

  cartView: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
