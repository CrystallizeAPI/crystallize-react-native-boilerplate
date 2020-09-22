import React from 'react';

import {FlatList, View} from 'react-native';
import Product from 'components/product-microformat';
import Document from 'components/document-microformat';
const renderType = (item) => {
  const types = {
    document: <Document {...item} />,
    product: <Product {...item} />,
  };
  return types[item.itemType];
};

const renderItems = ({item}) => {
  console.log('item', item);
  if (!item.columns.length) {
    return null;
  }
  if (item.columns.length === 1) {
    renderType(item.columns?.[0]);
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      {item.columns.map((c) => (
        <View
          style={{
            flex: 1 / item.columns.length,
          }}>
          {renderType(c)}
        </View>
      ))}
    </View>
  );
};

const Grid = ({rows}) => {
  return (
    <FlatList
      data={rows}
      style={{
        paddingLeft: 15,
        paddingTop: 0,
        paddingRight: 15,
        paddingBottom: 15,
      }}
      renderItem={(item) => renderItems(item)}
    />
  );
};

export default Grid;
