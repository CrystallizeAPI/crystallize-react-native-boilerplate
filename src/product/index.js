import React, {useState} from 'react';
import {useQuery} from 'urql';
import {attributesToObject} from 'lib/util/variants';
import isEqual from 'lodash/isEqual';

import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Loading from 'components/loading';

import VariantSelector from './variant-selector';
import styles from './styles';
import query from './query';

const Product = ({navigation, route}) => {
  const [chosenVariant, setChosenVariant] = useState(null);
  console.log('router', route);
  const [{fetching, error, data}] = useQuery({
    query: query,
    variables: {
      language: 'en',
      path: route.params.path,
    },
  });
  if (fetching) {
    return <Loading />;
  }
  if (error) {
    return (
      <View>
        <Text>Something went wrong</Text>
      </View>
    );
  }
  const {product} = data;

  const selectedVariant =
    chosenVariant || product.variants.find((v) => v.isDefault);

  const onAttributeChange = (attributes, newAttribute) => {
    const newAttributes = attributesToObject(attributes);
    newAttributes[newAttribute.attribute] = newAttribute.value;

    const newSelectedVariant = product.variants.find((variant) => {
      const variantAttributes = attributesToObject(variant.attributes);
      return isEqual(variantAttributes, newAttributes);
    });

    setChosenVariant(newSelectedVariant);
  };

  const onVariantChange = (variant) => setChosenVariant(variant);

  const summary = product?.components?.find((c) => c.name === 'Summary');
  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: selectedVariant.image.url,
          }}
        />

        <View style={styles.content}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.summary}>{summary?.content?.plainText}</Text>
        </View>
      </ScrollView>
      <View style={styles.actions}>
        <View style={styles.priceLabel}>
          {product.variants?.length > 1 ? (
            <>
              <Text style={styles.price}>${selectedVariant.price}</Text>
              <VariantSelector
                variants={product.variants}
                selectedVariant={selectedVariant}
                onVariantChange={onVariantChange}
                onAttributeChange={onAttributeChange}
              />
            </>
          ) : (
            <>
              <Text style={styles.price}>${selectedVariant.price}</Text>
              <Text style={styles.sku}>{selectedVariant.sku}</Text>
            </>
          )}
        </View>
        <TouchableOpacity
          style={styles.buyBtn}
          onPress={() => alert('@TODO add buy functionality')}>
          <Image
            style={styles.buyIcon}
            source={require('assets/images/shopping-bag.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;
