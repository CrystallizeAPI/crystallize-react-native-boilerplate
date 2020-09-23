import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function TinyBasketItem({actions, item}) {
  function increment() {
    actions.incrementItem(item);
  }

  function decrement() {
    actions.decrementItem(item);
  }

  function remove() {
    actions.removeItem(item);
  }
  return (
    <View style={styles.outer}>
      <View style={styles.info}>
        <Image
          style={styles.image}
          source={{
            uri: item.images?.[0].url,
          }}
        />
        <View>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>$ {item.price?.gross}</Text>
          <Text>Qty: {item.quantity}</Text>
        </View>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionBtn} onPress={() => remove()}>
          <Text style={styles.removeBtnTxt}>✕</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn} onPress={() => increment()}>
          <Text> ↑</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionBtn}
          onPress={() => decrement()}
          disabled={item.quantity === 1}>
          <Text> ↓</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    paddingVertical: 10,
    marginBottom: 4,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderBottomColor: '#dfdfdf',
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
    backgroundColor: '#fff',
    borderColor: '#dfdfdf',
    borderRadius: 4,
    resizeMode: 'contain',
  },
  info: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
  },
  itemPrice: {
    fontSize: 16,
  },
  actions: {
    width: 50,
    borderColor: '#dfdfdf',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  actionBtn: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeBtnTxt: {
    color: 'red',
  },
});
