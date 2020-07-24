import React from 'react';
import styles from './styles';

import {View, TouchableOpacity, Text} from 'react-native';
const reduceAttributes = (variants) =>
  variants.reduce((acc, variant) => {
    const attrs = acc;

    variant.attributes.forEach(({attribute, value}) => {
      const currentAttribute = attrs[attribute];
      if (!currentAttribute) {
        attrs[attribute] = [value];
        return;
      }

      const valueExists = currentAttribute.find((str) => str === value);
      if (!valueExists) {
        attrs[attribute].push(value);
      }
    });

    return attrs;
  }, {});

const VariantSelector = ({
  variants,
  selectedVariant,
  onVariantChange,
  onAttributeChange,
}) => {
  const attributes = reduceAttributes(variants);

  if (!Object.keys(attributes).length) {
    return (
      <View style={styles.outer}>
        <View style={styles.attributeSelector}>
          {variants.map((variant) => (
            <TouchableOpacity
              style={styles.attributeButton}
              key={variant.id}
              selected={variant.id === selectedVariant.id}
              onPress={() => onVariantChange(variant)}>
              <Text style={styles.attributeButtonText}>{variant.name}</Text>
              {variant.id === selectedVariant.id && (
                <View style={styles.marker} />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }

  return (
    <View style={styles.outer}>
      {Object.keys(attributes).map((name) => {
        const attr = attributes[name];
        const selectedAttr = selectedVariant.attributes.find(
          (a) => a.attribute === name,
        );

        if (!selectedAttr) {
          return null;
        }
        return (
          <View styles={styles.outer} key={name}>
            <View style={styles.attributeSelector}>
              {attr.map((value) => (
                <TouchableOpacity
                  style={styles.attributeButton}
                  key={value}
                  onPress={() =>
                    onAttributeChange(selectedVariant.attributes, {
                      attribute: name,
                      value,
                    })
                  }
                  selected={value === selectedAttr.value}>
                  <Text style={styles.attributeButtonText}>{value}</Text>
                  {value === selectedAttr.value && (
                    <View style={styles.marker} />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );
      })}
    </View>
  );
};

VariantSelector.displayName = 'VariantSelector';

export default VariantSelector;
