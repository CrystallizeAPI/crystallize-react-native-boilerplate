import React from "react"
import { View, ViewStyle, Text, TextStyle, FlatList, Dimensions } from "react-native"
import { DrawerContentComponentProps, DrawerContentOptions } from "@react-navigation/drawer"
import { CartItem } from "./cartItem"
import { AddToCardButton } from "../../../components/button/add-to-cart"

export function ShoppingCart({ basket }: any) {
  return (
    <View style={SHOPPING_CART_WRAPPER}>
      <View style={SHOPPING_CART_INNERWRAPPER}>
        <Text style={SHOPPING_CART_HEADING}>My Cart - {basket.cart.length} Items</Text>

        <View style={CART_ITEMS_CONTAINER}>
          <FlatList
            data={basket.cart}
            renderItem={({ item }) => <CartItem item={item} actions={basket.actions} />}
            keyExtractor={(item) => item.sku}
          ></FlatList>
        </View>
        <View style={CART_BUTTON_CONTAINER}>
          <AddToCardButton label="Checkout" />
        </View>
      </View>
    </View>
  )
}

const CART_BUTTON_CONTAINER: ViewStyle = {
  marginTop: 20,
}

const CART_ITEMS_CONTAINER: ViewStyle = {
  width: "100%",
  marginTop: 20,
  height: Dimensions.get("window").height * 0.65,
}

const SHOPPING_CART_WRAPPER: ViewStyle = {
  flex: 1,
  backgroundColor: "#fff",
  padding: 25,
}

const SHOPPING_CART_INNERWRAPPER: ViewStyle = {
  marginTop: 75,
}

const SHOPPING_CART_HEADING: TextStyle = {
  fontSize: 30,
  color: "#000",
  fontWeight: "bold",
}
