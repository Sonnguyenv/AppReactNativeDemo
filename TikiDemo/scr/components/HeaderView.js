import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HeaderView = ({title}) => {
  <View style={styles.headerView}>
    <View style={styles.inputView}>
      <FontAwesome name="search" size={20} color={colorTextPlaceHolder} />
      <Text style={styles.inputText}>{title}</Text>
    </View>
    <View style={styles.cartView}>
      <FontAwesome name="shopping-cart" size={24} />
    </View>
  </View>;
};

export default HeaderView;

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: '#1e88e5',
    paddingTop: 50,
    flexDirection: 'row',
  },

  inputView: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginLeft: 10,
    marginBottom: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 2,
  },

  inputText: {
    color: colorTextPlaceHolder,
    fontSize: 14,
    marginLeft: 8,
  },

  cartView: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
