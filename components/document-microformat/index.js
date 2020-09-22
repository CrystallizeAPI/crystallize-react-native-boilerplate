import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {View, TouchableOpacity, Text, Image} from 'react-native';
import styles from './styles';

const Document = ({item, ...rest}) => {
  const navigation = useNavigation();
  const image = item?.components.find((c) => c.name === 'Image')?.content
    ?.images?.[0];

  return (
    <TouchableOpacity
      style={styles.outer}
      onPress={() => navigation.navigate('Article', {...item})}>
      {image ? (
        <>
          <Image
            style={styles.image}
            source={{
              uri: image?.url,
            }}
          />
          <View style={styles.overlay}>
            <Text style={styles.overlayText}>{item.name}</Text>
          </View>
        </>
      ) : (
        <Text style={styles.title}>{item.name}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Document;
