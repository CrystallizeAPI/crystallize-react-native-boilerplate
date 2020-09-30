import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {StyleSheet, TouchableOpacity, Text, Image} from 'react-native';

const Card = ({item, ...rest}) => {
  const navigation = useNavigation();
  const image = item?.components.find((c) => c.name === 'Icon')?.content
    ?.images?.[0];
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => navigation.navigate('Catalogue', {...item})}>
      <Image
        style={styles.image}
        source={{
          uri: image?.url,
        }}
      />
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 120,
    marginBottom: 10,
    marginHorizontal: 4,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 7,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  title: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 2,
  },
});
