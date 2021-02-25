import React from "react"
import { View, ViewStyle, Text, TextStyle, FlatList } from "react-native"
import { DrawerContentComponentProps, DrawerContentOptions } from "@react-navigation/drawer"
import { CartItem } from "../../components/cart-item/cart-item"

// dummy
const DATA = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }]

export function ShoppingCart(props: DrawerContentComponentProps<DrawerContentOptions>) {
  return (
    <View style={SHOPPING_CART_WRAPPER}>
      <View style={SHOPPING_CART_INNERWRAPPER}>
        <Text style={SHOPPING_CART_HEADING}>My Cart – 4 Items</Text>
        <FlatList data={DATA} renderItem={CartItem}></FlatList>
      </View>
    </View>
  )
}

const SHOPPING_CART_WRAPPER: ViewStyle = {
  flex: 1,
  backgroundColor: "#fff",
  padding: 30,
}

const SHOPPING_CART_INNERWRAPPER: ViewStyle = {
  marginTop: 100,
}

const SHOPPING_CART_HEADING: TextStyle = {
  fontSize: 27,
  color: "#000",
  fontWeight: "bold",
}
