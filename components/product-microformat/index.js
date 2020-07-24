import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Button,
  FlatList,
  Text,
  Image,
} from 'react-native';

import styles from './styles';

const ProductCard = ({item}) => {
  const navigation = useNavigation();

  let image;

  const {name, variants} = item;
  const {price, image: i} = variants
    ? variants.find((variant) => variant.isDefault)
    : {};

  image = i;

  return (
    <TouchableOpacity
      style={{...styles.btn, flex: 1}}
      onPress={() => navigation.navigate('Product', {...item})}>
      <Image
        style={styles.image}
        source={{
          uri: image.url,
        }}
      />
      <View style={styles.footer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
