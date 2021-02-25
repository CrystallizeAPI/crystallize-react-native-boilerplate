import React from "react"
import { View, ViewStyle, Text, TextStyle } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { color, spacing, typography } from "../../theme"

import { TouchableOpacity } from "react-native-gesture-handler"
import { ImageHeaderScrollView, TriggeringView } from "react-native-image-header-scroll-view"

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

const PRODUCT_BG_IMAGE: ViewStyle = {
  backgroundColor: "#f9f9f9",
  justifyContent: "center",
  alignItems: "center",
}

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
