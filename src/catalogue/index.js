import {useQuery} from 'urql';
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Loading from 'components/loading';

import ProductCard from 'components/product-microformat';

import styles from './styles';
import query from './query';

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
      {/* <Text style={styles.title}>Welcome</Text> */}
      <FlatList
        data={folder?.children}
        renderItem={(item) => <ProductCard {...item} />}
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
