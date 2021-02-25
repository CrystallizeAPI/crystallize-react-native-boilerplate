import React from "react"
import { View, Text, ViewStyle, Image, ImageStyle, TextStyle, TouchableOpacity } from "react-native"

const COLLECTION_ITEM_CARD: ViewStyle = {
  width: 176,
  height: 248,
  backgroundColor: "#fff",
  borderRadius: 17,
  margin: 10,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
}

const COLLECTION_IMAGE_CONTAINER: ViewStyle = {
  height: "100%",
  backgroundColor: "#F9F9F9",
  overflow: "hidden",
}

const COLLECTION_IMAGE: ImageStyle = {
  width: 176,
  height: "100%",
}

const COLLECTION_TITLE: TextStyle = {
  fontSize: 18,
  color: "#FFF",
}

const COLLECTION_CATEGORY: TextStyle = {
  fontSize: 14,
  color: "rgba(255, 255, 255, 0.72);",
}

const PRODUCT_TEXT_WRAPPER: ViewStyle = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  padding: 20,
  top: 170,
}

export const CollectionCard = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={COLLECTION_ITEM_CARD}>
        <View style={COLLECTION_IMAGE_CONTAINER}>
          <Image
            style={COLLECTION_IMAGE}
            source={{ uri: "https://source.unsplash.com/user/erondu/300x200" }}
          />
          <View style={PRODUCT_TEXT_WRAPPER}>
            <Text style={COLLECTION_TITLE}>Sofas</Text>
            <Text style={COLLECTION_CATEGORY}>Living</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}
