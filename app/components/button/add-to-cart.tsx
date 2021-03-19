import React from "react"
import { View, ViewStyle, Text, TextStyle, TouchableOpacity } from "react-native"

export const AddToCartButton = ({ label, action }) => {
  return (
    <TouchableOpacity onPress={action}>
      <View style={ADD_TO_CARD_BUTTON}>
        <Text style={BUTTON_TEXT}>{label || "Button"}</Text>
      </View>
    </TouchableOpacity>
  )
}

const ADD_TO_CARD_BUTTON: ViewStyle = {
  width: "100%",
  height: 60,
  borderRadius: 7,
  backgroundColor: "#000",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
}

const BUTTON_TEXT: TextStyle = {
  color: "#fff",
  textAlign: "center",
  fontSize: 16,
}
