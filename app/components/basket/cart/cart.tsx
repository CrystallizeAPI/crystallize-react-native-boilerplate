import React from "react"
import { View, ViewStyle, Text, TextStyle, FlatList, Dimensions, Alert } from "react-native"
import { CartItem } from "./cartItem"
import { LargeButton } from "../../../components/button/large-button"
import { useNavigation } from "@react-navigation/native"

export function ShoppingCartList({ basket, itemStyle }) {
  return (
    <FlatList
      data={basket.cart}
      renderItem={({ item }) => (
        <CartItem item={item} actions={basket.actions} itemStyle={itemStyle} />
      )}
      keyExtractor={(item) => item.sku}
    ></FlatList>
  )
}

export function ShoppingCart({ basket }: any) {
  const navigation = useNavigation()
  const { total, totalWithoutDiscounts, status } = basket
  const { currency } = total
  const hasDiscount = total?.discount > 0
  const isLoading = status === "server-basket-is-stale"

  const tax = parseInt((total.gross - total.net) * 100, 10) / 100

  return (
    <View style={SHOPPING_CART_WRAPPER}>
      <View style={SHOPPING_CART_INNERWRAPPER}>
        <Text style={SHOPPING_CART_HEADING}>My Cart - {basket.cart.length} Items</Text>

        <View style={CART_ITEMS_CONTAINER}>
          <ShoppingCartList itemStyle={{}} basket={basket}></ShoppingCartList>
        </View>

        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <View>
            {/* <Text>Total Price - {totalWithoutDiscounts.gross}</Text>
            {hasDiscount && <Text>{total.discount * -1}</Text>}
            <Text>tax - {tax}</Text> */}
            <Text style={SHOPPING_CART_HEADING}>To pay - €{total.gross}</Text>
          </View>
        )}

        <View style={CART_BUTTON_CONTAINER}>
          <LargeButton
            label="Go to Checkout"
            action={() => {
              navigation.navigate("checkout")
            }}
          />
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
  height: Dimensions.get("window").height * 0.55,
}

const SHOPPING_CART_WRAPPER: ViewStyle = {
  flex: 1,
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
