import React from "react"
import {
  View,
  Image,
  ViewStyle,
  Text,
  TextStyle,
  ImageStyle,
  FlatList,
  TouchableOpacity,
} from "react-native"
import { useNavigation } from "@react-navigation/native"

export const ProductCardItem = ({ data }) => {
  const navigation = useNavigation()
  const nextScreen = () => navigation.navigate("demo")

  const { name, variants } = data
  const { images, stock, priceVariants } = variants[0]
  const displayImage = images[0]?.url

  const currency = priceVariants.find((c) => c.currency === "EUR")
  const isInStock = stock > 0

  return (
    <View style={PRODUCT_ITEM_WRAPPER}>
      <TouchableOpacity onPress={nextScreen}>
        <Image source={{ uri: displayImage }} style={PRODUCT_CARD_IMAGE} />
        <View style={IMAGE_OVERLAY}></View>
        <Text style={PRODUCT_IMAGE_HEADING}>{name}</Text>
        <Text style={PRODUCT_IMAGE_SUBHEADING}>text descp</Text>
      </TouchableOpacity>
    </View>
  )
}

const PRODUCT_CARD_IMAGE: ImageStyle = {
  flex: 1,
  width: 175,
  height: 157,
  backgroundColor: "#f9f9f9",
  borderRadius: 17,
}

const IMAGE_OVERLAY: ViewStyle = {
  width: 175,
  height: 157,
  backgroundColor: "#000",
  opacity: 0.2,
  borderRadius: 17,
  position: "absolute",
}

const PRODUCT_IMAGE_HEADING: TextStyle = {
  position: "absolute",
  fontWeight: "500",
  color: "#fff",
  top: 99,
  left: 14,
}

const PRODUCT_IMAGE_SUBHEADING: TextStyle = {
  position: "absolute",
  fontWeight: "500",
  color: "rgba(255, 255, 255, 0.72)",
  top: 121,
  left: 14,
}

const PRODUCT_ITEM_WRAPPER: ViewStyle = {
  paddingVertical: 15,
  marginLeft: 10,
}
