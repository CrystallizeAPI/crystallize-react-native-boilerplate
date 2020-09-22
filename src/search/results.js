import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

const routingType = {
  product: 'Product',
  document: 'Article',
  folder: 'Catalogue',
};

const ResultLine = ({item, index}) => {
  const navigation = useNavigation();
  const {
    node: {name, id, type, path},
  } = item;
  return (
    <TouchableOpacity
      style={styles.outer}
      onPress={() => navigation.navigate(routingType[type], {path})}>
      <Text style={styles.name}>{name}</Text>
      <View style={{alignItems: 'flex-end'}}>
        <Text style={styles.type}>{type}</Text>
        <Text style={styles.path}>{path}</Text>
      </View>
    </TouchableOpacity>
  );
};

const SearchResults = ({items = []}) => {
  return (
    <View>
      <FlatList
        data={items}
        renderItem={(item, index) => <ResultLine {...item} index={index} />}
        keyExtractor={(item, index) => `${item?.node?.id}-${index}`}
        style={{paddingLeft: 20, paddingTop: 10, paddingBottom: 15}}
      />
    </View>
  );
};

export default SearchResults;
const styles = StyleSheet.create({
  outer: {
    flexDirection: 'row',
    borderBottomWidth: 0.6,
    borderColor: '#dfdfdf',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: '600',
    fontSize: 18,
  },
  type: {
    fontSize: 10,
  },
  path: {
    fontSize: 10,
  },
});
