import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useBasket} from './index';

export const Totals = () => {
  const {total} = useBasket();

  return (
    <View style={styles.table}>
      <View style={styles.row}>
        <Text>Net:</Text>
        <Text>${total.net}</Text>
      </View>
      <View style={styles.row}>
        <Text>VAT:</Text>
        <Text>${total.vat}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.rowLabel}>Total to pay:</Text>
        <Text style={styles.rowValue}>${total.gross}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 2,
  },
  table: {
    paddingVertical: 20,
    borderTopWidth: 0.8,
    borderColor: '#dfdfdf',
  },
  rowLabel: {
    fontWeight: '600',
    fontSize: 18,
    paddingVertical: 4,
  },
  rowValue: {
    paddingVertical: 4,

    fontSize: 18,
    fontWeight: '600',
  },
});
