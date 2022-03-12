import React from "react"
import { View, ViewStyle, Text, TextStyle } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"

import { TouchableOpacity } from "react-native-gesture-handler"

export const BackButton = () => {
  const navigation = useNavigation()
  const homeScreen = () => navigation.navigate("welcome")

  return (
    <View style={BUTTON_BACK}>
      <TouchableOpacity onPress={homeScreen}>
        <Text style={TEXT_STYLE}>back</Text>
      </TouchableOpacity>
    </View>
  )
}

export const ProductItemScreen = observer(function ProductScreen() {
  const RenderHeaderImage = () => {
    return (
      <View>
        <BackButton />
      </View>
    )
  }

  return (
    <View>
      <Text>Category</Text>
    </View>
  )
})

const BUTTON_BACK: ViewStyle = {
  position: "absolute",
  backgroundColor: "#fff",
  top: 80,
  left: 16,
  padding: 20,
  zIndex: 10,
  borderRadius: 10,
}

const TEXT_STYLE: TextStyle = {
  color: "#000",
}
