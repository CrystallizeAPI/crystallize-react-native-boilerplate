import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {useBasket, TinyBasket} from './../basket/index';

const BasketSidebar = ({...props}) => {
  return (
    <SafeAreaView style={styles.outer}>
      <Text style={styles.header}>Cart</Text>
      <TinyBasket />
      <TouchableOpacity
        style={styles.checkoutBtn}
        onPress={() => alert('go to checkout functionality')}>
        <Text style={styles.checkoutBtnText}>Go to checkout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default BasketSidebar;

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  header: {
    paddingVertical: 25,
    paddingHorizontal: 25,
    fontWeight: '600',
    fontSize: 20,
  },
  checkoutBtn: {
    borderWidth: 1,
    marginHorizontal: 25,
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 5,
  },
  checkoutBtnText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 14,
    textTransform: 'uppercase',
  },
});
