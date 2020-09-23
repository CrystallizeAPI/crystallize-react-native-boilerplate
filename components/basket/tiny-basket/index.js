import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import {useBasket} from '../index';
import {Totals} from '../totals';
import TinyBasketItem from './item';

export function TinyBasket() {
  const {status, cart, actions} = useBasket();

  if (status !== 'ready') {
    return null;
  }

  if (!cart?.length) {
    return (
      <View>
        <Text>Empty Basket</Text>
      </View>
    );
  }

  return (
    <View style={styles.outer}>
      <FlatList
        data={cart}
        renderItem={(item) => <TinyBasketItem {...item} actions={actions} />}
      />
      <Totals />
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    paddingHorizontal: 25,
  },
});
