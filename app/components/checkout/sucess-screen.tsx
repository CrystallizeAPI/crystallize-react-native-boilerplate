import React from "react"
import { ViewStyle, TextStyle, View, Text, ImageStyle, Image } from "react-native"

export const SuccessScreen = () => {
  return (
    <View style={SUCESS_CONTAINER}>
      <Image style={SUCESS_IMAGE} source={require("../../../assets/confirm-check.png")}></Image>
      <Text style={HEADER}>Order Confirmed!</Text>
    </View>
  )
}

const SUCESS_IMAGE: ImageStyle = {
  width: 100,
  height: 100,
}

const SUCESS_CONTAINER: ViewStyle = {
  flex: 1,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}

const HEADER: TextStyle = {
  fontSize: 30,
  fontWeight: "bold",
  margin: 10,
}
