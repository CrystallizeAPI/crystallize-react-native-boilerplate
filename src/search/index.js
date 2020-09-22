import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {simplyFetchFromSearchGraph} from 'lib/graph/simply-fetch-from-search-graph';

import Spec from './spec';
import Results from './results';

import query from './query';
import {orderByOptions} from './helpers';

const SearchPage = () => {
  const [result, setResult] = useState({pageInfo: {totalNodes: 0}});
  const [searchTerm, setSearchTerm] = useState('');
  const [orderByIndex, setOrderByIndex] = useState(0);

  async function load() {
    try {
      const {data} = await simplyFetchFromSearchGraph({
        query,
        variables: {
          orderBy: {
            field: orderByOptions[orderByIndex].field,
            direction: orderByOptions[orderByIndex].direction,
          },
          filter: {searchTerm, productVariants: {isDefault: true}},
        },
      });
      setResult(data.search);
    } catch (err) {
      console.log('search error', err);
    }
  }
  const search = (term) => {
    setSearchTerm(term);
    load();
  };
  return (
    <View style={styles.outer}>
      <View>
        <Text style={styles.title}>Search</Text>
        <Spec
          {...result}
          search={search}
          searchTerm={searchTerm}
          orderByOptions={orderByOptions}
          orderByIndex={orderByIndex}
          setOrderByIndex={setOrderByIndex}
        />
      </View>
      <Results items={result?.edges} />
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  outer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 100,
  },
  title: {
    fontWeight: '900',
    fontSize: 24,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
