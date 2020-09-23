import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import AttributeList from 'components/attribute-list';
// import {CurrencyValue} from 'components/currency-value';

export default function TinyBasketItem({actions, item}) {
  // const {attributes, addItemTime} = item;

  function increment() {
    actions.incrementItem(item);
  }

  function decrement() {
    actions.decrementItem(item);
  }

  function remove() {
    actions.removeItem(item);
  }
  console.log('item', item);
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
        </View>
        <View style={styles.qtyOuter}>
          <TouchableOpacity>
            <Text>+</Text>
          </TouchableOpacity>
          <Text>{item.quantity}</Text>
          <TouchableOpacity>
            <Text>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    // <Item>
    //   <ItemImage {...item.images?.[0]} />
    //   <ItemInfo>
    //     <Row>
    //       <ItemName>{item.name}</ItemName>
    //       {attributes?.length > 0 && <AttributeList attributes={attributes} />}
    //     </Row>

    //     <PriceWrapper>
    //       <PriceWrap>
    //         <Price>
    //           <CurrencyValue value={item.price?.gross} />
    //         </Price>
    //       </PriceWrap>

    //       <PriceVat>
    //         <span>{t('common.vat', {value: item.price?.vat})}</span>
    //       </PriceVat>
    //     </PriceWrapper>
    //   </ItemInfo>
    //   <div>
    //     <ItemQuantityChanger>
    //       <button
    //         onClick={decrement}
    //         type="button"
    //         disabled={item.quantity === 1}>
    //         -
    //       </button>
    //       <ItemQuantity>{item.quantity}</ItemQuantity>
    //       <button onClick={increment} type="button">
    //         +
    //       </button>
    //     </ItemQuantityChanger>
    //   </div>
    //   <ItemDelete onClick={remove}>{t('basket.removeItem', item)}</ItemDelete>
    // </Item>
  );
}

const styles = StyleSheet.create({
  outer: {
    borderBottomWidth: 0.8,
    paddingVertical: 10,
    borderBottomColor: '#dfdfdf',
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 20,
    backgroundColor: '#fff',
    // borderWidth: 0.8,
    borderColor: '#dfdfdf',
    borderRadius: 4,
    resizeMode: 'contain',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 14,
    fontWeight: '600',
  },
  itemPrice: {
    fontSize: 14,
  },
  qtyOuter: {
    borderWidth: 1,
  },
});
