import React from "react"
import { View, Text, ViewStyle, Image, ImageStyle, TextStyle, TouchableOpacity } from "react-native"

const PRODUCT_ITEM_CARD: ViewStyle = {
  width: 176,
  height: 248,
  backgroundColor: "#fff",
  borderRadius: 17,
  margin: 10,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
}

const PRODUCT_IMAGE_CONTAINER: ViewStyle = {
  height: "65%",
  backgroundColor: "#F9F9F9",
  overflow: "hidden",
}

const PRODUCT_IMAGE: ImageStyle = {
  width: 176,
  height: "100%",
}

const PRODUCT_CONTENT_WRAPPER: ViewStyle = {
  height: "35%",
  padding: 10,
  justifyContent: "center",
}

const PRODUCT_PRICE: TextStyle = {
  fontSize: 18,
  color: "#000",
}

const PRODUCT_STOCK_LABEL: TextStyle = {
  fontSize: 18,
  color: "#54B195",
}

const PRODUCT_TITLE: TextStyle = {
  fontSize: 18,
  color: "#898989",
}

const PRODUCT_TEXT_WRAPPER: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 10,
}

export const ProductItem = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={PRODUCT_ITEM_CARD}>
        <View style={PRODUCT_IMAGE_CONTAINER}>
          <Image
            style={PRODUCT_IMAGE}
            source={{ uri: "https://source.unsplash.com/random/300x200/?food" }}
          />
        </View>
        <View style={PRODUCT_CONTENT_WRAPPER}>
          <View style={PRODUCT_TEXT_WRAPPER}>
            <Text style={PRODUCT_PRICE}>$200</Text>
            <Text style={PRODUCT_STOCK_LABEL}>in stock</Text>
          </View>
          <Text style={PRODUCT_TITLE}>Wall paper</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
