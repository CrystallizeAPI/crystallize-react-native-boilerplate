import React from "react"
import { View, Image, ViewStyle, Text, TextStyle, ImageStyle, TouchableOpacity } from "react-native"

const ARTICLE_WRAPPER: ViewStyle = {
  marginLeft: 10,
  marginVertical: 10,
}

const ARTICLE_ITEM: ImageStyle = {
  borderRadius: 10,
  width: 374,
  height: 205,
}

const ARTICLE_OVERLAY: ViewStyle = {
  borderRadius: 10,
  backgroundColor: "rgba(0,0,0,0.2)",
  width: 374,
  height: 205,
  position: "absolute",
}

const ARTICLE_HEADING: TextStyle = {
  position: "absolute",
  left: 25,
  top: 140,
  fontWeight: "bold",
  fontSize: 23,
  color: "#fff",
}

export const Article = ({ onPress, data }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={ARTICLE_WRAPPER}>
        {/* {data.components.map((item, i) => {
          // if (item.id === "title") {
          //   return <Text> {item.name}</Text>
          // }
        })} */}
        <Image
          source={{ uri: "https://source.unsplash.com/random/300x200/?sofas" }}
          style={ARTICLE_ITEM}
        />
        <View style={ARTICLE_OVERLAY}></View>
        <Text style={ARTICLE_HEADING}> Nice couches</Text>
      </View>
    </TouchableOpacity>
  )
}
