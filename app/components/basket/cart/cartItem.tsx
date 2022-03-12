import React from "react"
import { TouchableOpacity } from "react-native-gesture-handler"
import { View, ViewStyle, Text, TextStyle, Image, ImageStyle, Button } from "react-native"
import { IconButton } from "../../../components/IconButton/IconButton"

export function CartItem({ item, actions, itemStyle }) {
  const { attributes, images, price, name, quantity } = item
  const symbol = price.currency === "EUR" ? "€" : price.currency
  const { removeItem, incrementItem, decrementItem } = actions

  function increment() {
    incrementItem(item)
  }

  function decrement() {
    decrementItem(item)
  }

  const remove = () => {
    removeItem(item)
  }

  return (
    <View style={{ ...CART_ITEM, ...itemStyle }}>
      <Image style={IMAGE_PREVIEW} source={{ uri: images[0].url }}></Image>
      <View style={CART_CONTENT}>
        <Text style={CART_TITLE}>{name}</Text>
        <Text style={CART_LABEL}>{quantity}</Text>
        <Text style={CART_ITEM_PRICE}>{`${symbol} ${price.gross}`}</Text>
        <View style={BUTTON_CONTAINER}>
          <IconButton name="plus" action={increment} style={BSTYLE}></IconButton>
          <IconButton name="minus" action={decrement} style={BSTYLE}></IconButton>
        </View>
      </View>
      <View style={CLOSE_BUTTON_CONTAINER}>
        <IconButton name="close" action={remove} style={BSTYLE}></IconButton>
      </View>
    </View>
  )
}

const BSTYLE = {
  width: 20,
  height: 20,
}

const CLOSE_BUTTON_CONTAINER: ViewStyle = {
  position: "absolute",
  borderRadius: 100,
  right: 0,
  width: 40,
  height: 40,
}

const BUTTON_CONTAINER: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  marginTop: 10,
}

const CART_ITEM: ViewStyle = {
  width: "100%",
  backgroundColor: "#F3F2F0",
  borderRadius: 7,
  marginTop: 10,
  marginBottom: 10,
  padding: 14,
  display: "flex",
  flexDirection: "row",
}

const IMAGE_PREVIEW: ImageStyle = {
  width: 64,
  height: 64,
  backgroundColor: "#f9f9f9",
  borderRadius: 6,
}

const CART_CONTENT: ViewStyle = {
  marginLeft: 10,
}

const CART_TITLE: TextStyle = {
  color: "#000",
  fontSize: 16,
  fontWeight: "500",
}

const CART_LABEL: TextStyle = {
  color: "#999",
  fontSize: 16,
  fontWeight: "500",
}

const CART_ITEM_PRICE: TextStyle = {
  color: "#000",
  fontSize: 18,
  fontWeight: "600",
}
