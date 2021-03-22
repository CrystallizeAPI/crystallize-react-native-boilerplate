import React from "react"
import { View, ViewStyle, Image, ImageStyle, TextStyle, Text, TouchableOpacity } from "react-native"

interface IconButtonProps {
  name: string
  action: () => void
  showNotification?: boolean
  notificationLabel?: string
}

export function IconButton({ name, action, showNotification, notificationLabel }: IconButtonProps) {
  const images = {
    menu: require("../../../assets/ham.png"),
    cart: require("../../../assets/shopping-cart.png"),
    back: require("../../../assets/arrow-left.png"),
    arrowBlack: require("../../../assets/arrow-black-left.png"),
  }
  return (
    <TouchableOpacity style={WRAPPER_MARGIN} onPress={action}>
      <Image style={ICON_BUTTON_PLACEHOLDER} source={images[name]}></Image>
      {showNotification && (
        <View style={CART_COUNT_CONTAINER}>
          <Text style={CART_TEXT}>{notificationLabel}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

const CART_TEXT: TextStyle = {
  color: "#fff",
}

const CART_COUNT_CONTAINER: ViewStyle = {
  width: "auto",
  backgroundColor: "#000",
  borderRadius: 100,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: -6,
  right: -18,
  padding: 4,
}

const ICON_BUTTON_PLACEHOLDER: ImageStyle = {
  width: 40,
  height: 40,
  borderRadius: 5,
}

const WRAPPER_MARGIN: ViewStyle = {
  margin: 13,
}
