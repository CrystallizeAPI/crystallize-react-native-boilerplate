import React, {useRef, useEffect} from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export default function SearchTerm({searchTerm, onChange}) {
  const input = useRef();
  useEffect(() => {
    input.current.focus();
  });
  return (
    <View style={styles.outer}>
      <TextInput
        type="text"
        value={searchTerm}
        onChangeText={(text) => onChange(text)}
        style={styles.input}
        ref={input}
      />
      <TouchableOpacity style={styles.btn}>
        <Text>➔</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    marginTop: 30,
    marginBottom: 8,
    marginHorizontal: 8,
    borderColor: '#000',
    borderWidth: 1,
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    borderRadius: 20,
    paddingLeft: 20,
  },
  input: {
    fontSize: 16,
    flexGrow: 1,
    fontWeight: 'bold',
  },
  btn: {
    borderRadius: 100,
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
