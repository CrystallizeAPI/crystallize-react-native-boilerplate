import {useQuery} from 'urql';
import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import Loading from 'components/loading';

import styles from './styles';
import query from './query';
import {ScrollView} from 'react-native-gesture-handler';
const {
  container,
  fold,
  heroImage,
  foldContent,
  published,
  divider,
  summary,
} = styles;

const Article = ({navigation, route}) => {
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
  const {document} = data;
  const title = document?.components.find((c) => c.name === 'Title')?.content
    ?.text;
  const image = document?.components.find((c) => c.name === 'Image')?.content
    ?.images?.[0];
  const date = new Date(document.publishedAt);
  const intro = document?.components.find((c) => c.name === 'Intro')?.content
    ?.plainText;
  return (
    <ScrollView>
      <View style={container}>
        <View style={fold}>
          <Image
            style={heroImage}
            source={{
              uri: image.url,
            }}
          />
          <View style={foldContent}>
            <Text style={published}>{date.toDateString()}</Text>
            <View style={divider} />
            <Text style={styles.title}>{title}</Text>
            <Text style={summary}>{intro}</Text>
          </View>
        </View>

        <Text>Article</Text>
      </View>
    </ScrollView>
  );
};

export default Article;
