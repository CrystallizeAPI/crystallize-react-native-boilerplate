import React from "react"
import { TouchableOpacity } from "react-native-gesture-handler"
import { View, ViewStyle, Text, TextStyle, Image, ImageStyle, FlatList } from "react-native"

export function CartItem({ item, actions }) {
  const { attributes, images, price, name, quantity } = item

  return (
    <TouchableOpacity style={CART_ITEM}>
      <Image style={IMAGE_PREVIEW} source={{ uri: images[0].url }}></Image>
      <View style={CART_CONTENT}>
        <Text style={CART_TITLE}>{name}</Text>
        <Text style={CART_LABEL}>{quantity}</Text>
        <Text style={CART_ITEM_PRICE}>{`${price.currency} ${price.gross}`}</Text>
      </View>
    </TouchableOpacity>
  )
}

const CART_ITEM: ViewStyle = {
  width: "100%",
  backgroundColor: "#F2F2F2",
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
