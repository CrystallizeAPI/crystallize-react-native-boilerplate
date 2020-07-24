import {useQuery} from 'urql';
import React, {useEffect, useState} from 'react';
import Loading from 'components/loading';
import {View, Text, ScrollView, FlatList, SafeAreaView} from 'react-native';
import Grid from 'components/grid';
import query from './query';
import Card from 'components/category-microformat';
import styles from './styles';

const Home = ({navigation, route, ...rest}) => {
  console.log(navigation);
  const [{fetching, error, data}] = useQuery({
    query: query,
    variables: {
      language: 'en',
      path: '/shop',
    },
  });
  if (fetching) {
    return <Loading />;
  }
  if (error) {
    console.log('error', error);
    return (
      <View>
        <Text>Something went wrong</Text>
      </View>
    );
  }
  const {folder, grid} = data;
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Welcome</Text>
        <FlatList
          data={folder.children}
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
