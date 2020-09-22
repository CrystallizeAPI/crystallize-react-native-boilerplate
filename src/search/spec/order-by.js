import React from 'react';

import {Picker} from '@react-native-community/picker';

const OrderBy = ({orderByIndex, setOrderByIndex, orderByOptions}) => {
  return (
    <Picker
      selectedValue={orderByIndex}
      onValueChange={(itemValue) => {
        setOrderByIndex(itemValue);
      }}>
      {orderByOptions.map((o, i) => (
        <Picker.Item key={`${o.value}-${i}`} label={o.name} value={i} />
      ))}
    </Picker>
  );
};

export default OrderBy;
