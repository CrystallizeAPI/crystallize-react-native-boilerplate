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

export const ProductCardItem = ({ item }) => {
  const navigation = useNavigation()
  const nextScreen = () => navigation.navigate("demo")

  return (
    <View style={PRODUCT_ITEM_WRAPPER}>
      <TouchableOpacity onPress={nextScreen}>
        <Image source={{ uri: item.url }} style={PRODUCT_CARD_IMAGE} />
        <View style={IMAGE_OVERLAY}></View>
        <Text style={PRODUCT_IMAGE_HEADING}>{item.title}</Text>
        <Text style={PRODUCT_IMAGE_SUBHEADING}>{item.content}</Text>
      </TouchableOpacity>
    </View>
  )
}
