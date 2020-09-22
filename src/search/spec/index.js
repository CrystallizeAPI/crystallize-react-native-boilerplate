import React, {useState} from 'react';
// import {useRouter} from 'next/router';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

// import {Outer, Inner, InputFooter, TotalResults} from './styles';
import SearchTerm from './search-term';
import OrderBy from './order-by';

const {width} = Dimensions.get('window');

const SearchSpec = ({
  pageInfo: {totalNodes = 0},
  search,
  searchTerm,
  orderByOptions,
  orderByIndex,
  setOrderByIndex,
}) => {
  const [drawerIsOpen, setDrawerState] = useState(false);
  return (
    <>
      <View>
        <SearchTerm
          searchTerm={searchTerm}
          onChange={(s) => {
            search(s);
          }}
        />
        <View style={styles.searchFooter}>
          <Text>Found {totalNodes} matching results</Text>
          <TouchableOpacity onPress={() => setDrawerState(!drawerIsOpen)}>
            <Text style={styles.sortText}>
              {orderByOptions[orderByIndex].name}
            </Text>
          </TouchableOpacity>
        </View>
        {!!drawerIsOpen && (
          <View style={styles.drawer}>
            <View style={styles.drawerHeader}>
              <Text style={styles.drawerTitle}>Sort by</Text>
              <TouchableOpacity
                style={styles.drawerClose}
                onPress={() => setDrawerState(!drawerIsOpen)}>
                <Text>X</Text>
              </TouchableOpacity>
            </View>
            <OrderBy
              setOrderByIndex={setOrderByIndex}
              orderByIndex={orderByIndex}
              orderByOptions={orderByOptions}
            />
          </View>
        )}
      </View>
    </>
  );
};

export default SearchSpec;

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: '#dfdfdf',
    width: width,
    left: -20,
  },

  drawerTitle: {
    fontWeight: '600',
    fontSize: 14,
    paddingLeft: 20,
  },
  drawerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
  },
  drawerClose: {
    width: 50,
    height: 50,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dfdfdf',
  },
  searchFooter: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sortText: {
    fontWeight: '600',
  },
});
