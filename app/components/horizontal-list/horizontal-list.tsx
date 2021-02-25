import React from "react"
import { View, ViewStyle, FlatList } from "react-native"
import { useNavigation } from "@react-navigation/native"

interface HorizontalListProps {
  type: string
  data: any
  renderItem: React.ReactNode
}

export const HorizontalList = ({ type, data, renderItem }: HorizontalListProps) => {
  const navigation = useNavigation()
  const productScreen = () => navigation.navigate("productItem")
  const articleScreen = () => navigation.navigate("article")

  return (
    <View style={HORIZONTAL_LIST_WRAPPER}>
      {type === "miniCard" && (
        <FlatList
          horizontal={true}
          data={data}
          renderItem={({ item }) => {
            return React.createElement(renderItem, { item: item })
          }}
        ></FlatList>
      )}
      {type === "productCard" && (
        <FlatList
          horizontal={true}
          data={data}
          renderItem={({ item }) => {
            console.log("thissss")
            return React.createElement(renderItem, { onPress: productScreen })
          }}
        ></FlatList>
      )}

      {type === "article" && (
        <FlatList
          horizontal={true}
          data={data}
          renderItem={({ item }) => {
            console.log("thissss")
            return React.createElement(renderItem, { onPress: articleScreen })
          }}
        ></FlatList>
      )}
    </View>
  )
}

const HORIZONTAL_LIST_WRAPPER: ViewStyle = {
  paddingLeft: 2,
  paddingTop: 5,
  paddingBottom: 5,
}
