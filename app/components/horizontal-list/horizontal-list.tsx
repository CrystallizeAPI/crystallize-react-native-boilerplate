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
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={data}
          renderItem={({ item }) => {
            return React.createElement(renderItem, { id: item.id, item: item })
          }}
        ></FlatList>
      )}
      {type === "productCard" && (
        <FlatList
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={data}
          renderItem={({ item }) => {
            return React.createElement(renderItem, {
              id: item.id,
              onPress: productScreen,
              data: item,
            })
          }}
        ></FlatList>
      )}

      {type === "article" && (
        <FlatList
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={data}
          renderItem={({ item }) => {
            return React.createElement(renderItem, {
              id: item.id,
              onPress: articleScreen,
              item: item,
            })
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
