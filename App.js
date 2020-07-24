import 'react-native-gesture-handler';
import {Provider, createClient} from 'urql';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/home/index';
import Catalogue from './src/catalogue/index';
import Product from './src/product/index';
import Article from './src/article/index';
import * as React from 'react';
import {StatusBar} from 'react-native';

const Stack = createStackNavigator();

const client = createClient({
  url: 'https://api.crystallize.com/furniture/catalogue',
});

const stackStyling = {
  headerStyle: {
    backgroundColor: '#EFEFEF',
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
  headerTintColor: '#000',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerLeftContainerStyle: {
    paddingLeft: 10,
  },
  headerTitleContainerStyle: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 18,
  },
};
const App = () => {
  return (
    <>
      <Provider value={client}>
        <NavigationContainer>
          <Stack.Navigator
            options={{
              headerTransparent: true,
            }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false, ...stackStyling}}
            />
            <Stack.Screen
              name="Catalogue"
              component={Catalogue}
              options={(props) => {
                return {
                  headerTitle: props.route.params.name,
                  headerBackTitleVisible: false,
                  ...stackStyling,
                };
              }}
            />
            <Stack.Screen
              name="Product"
              component={Product}
              options={{
                headerTitle: 'Product',
                headerBackTitleVisible: false,
                ...stackStyling,
              }}
            />
            <Stack.Screen
              name="Article"
              component={Article}
              options={{
                headerTitle: '',
                headerTransparent: true,
                headerBackTitleVisible: false,
                headerStyle: {
                  backgroundColor: 'transparent',
                  position: 'absolute',
                  zIndex: 100,
                  top: 0,
                  left: 0,
                  right: 0,
                  ...stackStyling.headerStyle,
                },
                ...stackStyling,
                headerTintColor: '#fff',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
