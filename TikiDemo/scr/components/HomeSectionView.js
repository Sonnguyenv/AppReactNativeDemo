import {enumStringBody} from '@babel/types';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  Button,
  TouchableHighlight,
} from 'react-native';

const {width} = Dimensions.get('window');

const section_banner = require('../assets/section_banner.png');
const item_image_1 = require('../assets/item_image_1.png');
const item_image_2 = require('../assets/item_image_2.png');
const item_image_3 = require('../assets/item_image_3.png');
const item_image_4 = require('../assets/item_image_4.png');

const listItem = [
  {image1: item_image_1, image2: item_image_2},
  {image1: item_image_2, image2: item_image_3},
  {image1: item_image_4, image2: item_image_1},
  {image1: item_image_1, image2: item_image_2},
];

const ItemCommon = ({image, name, price}) => (
  <View style={styles.itemView}>
    <Image source={image} style={styles.itemImage} />
    <Text style={styles.fontName} numberOfLines={2}>
      {name}
    </Text>
    <Text style={styles.fontPrice}>{price}</Text>
  </View>
);

export const TypeCategories = {
  ALL: 'Tất cả',
  PHONE: 'Điện thoại',
  TABLET: 'Máy tính bảng',
};

const listCategories = [
  TypeCategories.ALL,
  TypeCategories.PHONE,
  TypeCategories.TABLET,
];

const HomeSectionView = () => {
  typeSelected = TypeCategories.ALL;
  state = {
    typeSelected: TypeCategories.ALL,
  };

  return (
    <View>
      <View style={styles.bodyView}>
        <Text style={styles.sectionTitle}>Điện thoại - Máy Tính Bảng</Text>
        <Image source={section_banner} style={styles.sectionImage} />
        <ScrollView horizontal={true}>
          <View style={styles.filterContainer}>
            {listCategories.map((item, index) => (
              <View>
                <View
                  key={index.toString()}
                  style={
                    item == this.state.typeSelected
                      ? styles.categoriesTitleActive
                      : styles.categoriesTitleInActive
                  }>
                  {/* <Text
                    style={
                      item == this.state.typeSelected
                        ? styles.filterActiveText
                        : styles.filterInactiveText
                    }>
                    {item}
                  </Text> */}
                  <Button
                    title={item}
                    color={item == this.state.typeSelected ? '#fff' : '#5a5a5a'}
                    // onPress={() => this.setState({typeSelected: item})}
                  />
                  {/* <TouchableHighlight
                  style={styles.fullWidthButtonText}
                  onPress={this.buttonPressed}>
                  <Text
                    style={
                      item == this.state.typeSelected
                        ? styles.filterActiveText
                        : styles.filterInactiveText
                    }>
                    {item}
                  </Text>
                </TouchableHighlight> */}
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
        {/* <ScrollView> */}
        <ScrollView horizontal={true}>
          <View style={styles.listItemView}>
            {listItem.map((item, index) => (
              <View key={index.toString()}>
                <ItemCommon
                  image={item.image1}
                  name="Điện thoại Vsmart Bee(Gray)"
                  price="699.000đ"
                />
                <ItemCommon
                  image={item.image2}
                  name="Điện thoại Vsmart Bee(Gray)"
                  price="699.000đ"
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.seeMoreView}>
        <Text style={styles.seeMoreText}>XEM THÊM 636 SẢN PHẨM ></Text>
      </View>
    </View>
  );
};

export default HomeSectionView;

const styles = StyleSheet.create({
  bodyView: {
    flex: 1,
    paddingHorizontal: 12,
  },

  sectionTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#2f2f2f',
    marginVertical: 12,
  },

  sectionImage: {
    width: width - 24,
    height: 130,
    borderRadius: 4,
  },

  listItemView: {
    flexDirection: 'row',
    marginTop: 10,
  },

  itemView: {
    width: 100,
    marginRight: 12,
    marginTop: 10,
  },

  itemImage: {
    width: 100,
    height: 120,
  },

  fontName: {
    fontSize: 14,
    color: '#484848',
    marginVertical: 4,
  },

  fontPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2a2a2a',
  },

  filterContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },

  categoriesTitleActive: {
    backgroundColor: '#242424',
    // paddingHorizontal: 12,
    // paddingVertical: 6,
    borderRadius: 4,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  categoriesTitleInActive: {
    backgroundColor: '#fff',
    // paddingHorizontal: 12,
    // paddingVertical: 6,
    borderColor: '#5a5a5a',
    borderRadius: 4,
    borderWidth: 1,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  filterActiveText: {
    color: '#fff',
  },

  filterInactiveText: {
    color: '#5a5a5a',
  },

  seeMoreView: {
    marginTop: 10,
    padding: 12,
    alignItems: 'center',
    borderTopWidth: 0.6,
    borderTopColor: '#ededed',
    borderBottomWidth: 8,
    borderBottomColor: '#d7d7d7',
  },

  seeMoreText: {
    color: '#0e45b4',
  },

  fullWidthButtonText: {
    // fontSize: 100,
    color: 'white',
  },
});
