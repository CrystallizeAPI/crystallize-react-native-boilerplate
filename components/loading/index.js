import React from 'react';

import {View, Text, ActivityIndicator} from 'react-native';

const Loading = ({text = 'Fetching awesomeness '}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator />
      <Text
        style={{
          fontSize: 12,
          opacity: 0.5,
          textTransform: 'uppercase',
          marginTop: 10,
        }}>
        {text}
      </Text>
    </View>
  );
};

export default Loading;
