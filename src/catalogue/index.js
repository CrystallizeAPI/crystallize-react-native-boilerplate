import {useQuery} from 'urql';
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Loading from 'components/loading';

import Product from 'components/product-microformat';
import Category from 'components/category-microformat';
import Document from 'components/document-microformat';

import styles from './styles';
import query from './query';

const renderType = (item) => {
  console.log('type', item.item.type);
  const types = {
    document: <Document {...item} />,
    product: <Product {...item} />,
    folder: <Category {...item} />,
  };
  return types[item.item.type];
};
const Catalogue = ({navigation, route}) => {
  const [{fetching, error, data}] = useQuery({
    query: query,
    variables: {
      language: 'en',
      path: route.params.path,
    },
  });
  if (fetching) {
    return <Loading />;
  }
  if (error) {
    return (
      <View>
        <Text>Something went wrong</Text>
      </View>
    );
  }
  const {folder} = data;
  return (
    <View style={styles.container}>
      <FlatList
        data={folder?.children}
        renderItem={(item) => renderType(item)}
        keyExtractor={(item) => item.id}
        numColumns={2}
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 10,
          paddingBottom: 15,
        }}
      />
    </View>
  );
};

export default Catalogue;
