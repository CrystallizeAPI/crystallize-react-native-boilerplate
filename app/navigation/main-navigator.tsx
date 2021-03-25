/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { HomeScreen } from "../screens"
import { ProductItemScreen } from "../screens/productItem/product-item"
import { ArticleScreen } from "../screens/article/article-screen"
import { CheckoutScreen } from "../screens/checkout/checkout"

import { createDrawerNavigator } from "@react-navigation/drawer"
import { ShoppingCart } from "../components/basket/cart/cart"
import { useBasket } from "../components/basket/index"
import { Dimensions } from "react-native"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type PrimaryParamList = {
  home: undefined
  productItem: undefined
  article: undefined
  checkout: undefined
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createStackNavigator<PrimaryParamList>()
const Drawer = createDrawerNavigator()

function HomeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="productItem" component={ProductItemScreen} />
      <Stack.Screen name="article" component={ArticleScreen} />
      <Stack.Screen name="checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  )
}

export function MainNavigator() {
  const basket = useBasket()
  return (
    <Drawer.Navigator
      drawerContent={() => <ShoppingCart basket={basket} />}
      drawerPosition={"right"}
      drawerType="front"
      drawerStyle={{
        width: Dimensions.get("window").width * 0.86,
      }}
    >
      <Drawer.Screen name="Home" component={HomeNavigation} />
    </Drawer.Navigator>
  )
}

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["welcome"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
