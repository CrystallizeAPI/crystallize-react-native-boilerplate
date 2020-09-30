import React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useQuery} from 'urql';
import Loading from 'components/loading';
import Grid from 'components/grid';
import query from './query';
import Card from 'components/category-microformat';
import styles from './styles';
import {CRYSTALLIZE_FRONTPAGE_GRID_IDENTIFIER} from '@env';

const Home = ({route}) => {
  const navigation = useNavigation();

  const [{fetching, error, data}] = useQuery({
    query: query,
    variables: {
      language: 'en',
      path: '/shop',
      gridId: CRYSTALLIZE_FRONTPAGE_GRID_IDENTIFIER,
    },
  });

  if (fetching) {
    return <Loading />;
  }
  if (error) {
    console.log('error', error);
    return (
      <View
        style={{
          paddingVertical: 200,
        }}>
        <Text style={{textAlign: 'center'}}>Something went wrong</Text>
      </View>
    );
  }
  const {folder, grid} = data;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome</Text>

          <TouchableOpacity
            style={styles.searchAction}
            onPress={() => navigation.navigate('Search')}>
            <Image
              style={styles.searchIcon}
              source={require('assets/images/search.png')}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={folder?.children}
          renderItem={(item) => <Card {...item} />}
          keyExtractor={(item) => item.id}
          horizontal={true}
          style={{paddingLeft: 20, paddingTop: 10, paddingBottom: 15}}
        />
        <Grid {...grid} />
      </ScrollView>
    </View>
  );
};

export default Home;
