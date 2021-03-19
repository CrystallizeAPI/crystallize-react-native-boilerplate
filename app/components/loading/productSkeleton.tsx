import React from "react"
import { View, ViewStyle, TouchableOpacity } from "react-native"
import { Screen } from "../../components"
import { color } from "../../theme"

export const SkeletonProductProducts = () => {
  return (
    <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
      {[...Array(7)].map((x, k) => {
        return <SkeletonProductItem key={k} />
      })}
    </Screen>
  )
}

export const SkeletonProductItem = () => {
  return (
    <TouchableOpacity style={SHADOW}>
      <View style={PRODUCT_ITEM_CARD}></View>
    </TouchableOpacity>
  )
}

const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  padding: 10,
  flexDirection: "row",
  flexWrap: "wrap",
  margin: 0,
}

const SHADOW: ViewStyle = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,
  elevation: 2,
}

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
