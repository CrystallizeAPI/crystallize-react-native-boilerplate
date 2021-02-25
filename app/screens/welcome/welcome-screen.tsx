import React from "react"
import { View, ViewStyle, Image, ImageStyle, TextStyle, Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color, spacing, typography } from "../../theme"

import { HorizontalList } from "../../components/horizontal-list/horizontal-list"
import { ProductCardItem } from "../../components/product-card/small-product-item"
import { ProductItem } from "../../components/product-card/shop-product-item"
import { CollectionCard } from "../../components/product-card/collection-items-card"
import { Article } from "../../components/product-card/article-card"

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  padding: 10,
  flexDirection: "row",
  flexWrap: "wrap",
}

const DummyData = [
  {
    id: "1",
    url: "https://source.unsplash.com/random/200x150/?sofa",
    title: "Heading",
    content: "Sub heading",
  },
  {
    id: "2",
    url: "https://source.unsplash.com/random/200x150/?kitchen",
    title: "Heading",
    content: "Sub heading",
  },
  {
    id: "3",
    url: "https://source.unsplash.com/random/200x150/?plant",
    title: "Heading",
    content: "Sub heading",
  },
  {
    id: "4",
    url: "https://source.unsplash.com/random/200x150/?paintings",
    title: "Heading",
    content: "Sub heading",
  },
]

const CAROUSAL_WRAPPER: ViewStyle = {
  width: "100%",
  padding: 0,
  margin: 10,
}

const CAROUSAL_ITEM: TextStyle = {
  fontSize: 27,
  color: "#000",
  fontWeight: "bold",
}

const CarousalContainer = () => {
  return (
    <View style={CAROUSAL_WRAPPER}>
      <Text style={CAROUSAL_ITEM}>All</Text>
      <Text style={CAROUSAL_ITEM}>All</Text>
    </View>
  )
}

const renderList = [
  {
    type: "productList",
    data: DummyData,
  },
  {
    type: "postList",
    data: DummyData,
  },
  {
    type: "collection",
    name: "Collection #1",
  },
  {
    type: "collection",
    name: "Collection #2",
  },
  {
    type: "post",
    name: "Article #1",
  },
  {
    type: "list",
    data: DummyData,
  },
  {
    type: "product",
    name: "Product #1",
  },
  {
    type: "product",
    name: "Product #2",
  },

  {
    type: "post",
    name: "Article #1",
  },
]

interface renderScreenPops {
  data: any
}

const RenderScreen = (props: renderScreenPops) => {
  const { data } = props
  const navigation = useNavigation()
  const nextScreen = () => navigation.navigate("demo")
  const productScreen = () => navigation.navigate("productItem")
  const articleScreen = () => navigation.navigate("article")

  return (
    <>
      {data.map((item, key) => {
        if (!item.type) return null
        if (item.type === "collection") return <CollectionCard key={key} onPress={productScreen} />
        if (item.type === "product") return <ProductItem key={key} onPress={nextScreen} />
        if (item.type === "post") return <Article key={key} onPress={articleScreen} />
        if (item.type === "list") {
          return (
            <HorizontalList
              type="miniCard"
              key={key}
              data={item.data}
              renderItem={ProductCardItem}
            />
          )
        }
        if (item.type === "productList") {
          return (
            <HorizontalList
              type="productCard"
              key={key}
              data={item.data}
              renderItem={ProductItem}
            />
          )
        }
        if (item.type === "postList") {
          return <HorizontalList type="article" key={key} data={item.data} renderItem={Article} />
        }
      })}
    </>
  )
}

export const WelcomeScreen = observer(function WelcomeScreen() {
  const navigation = useNavigation()
  const nextScreen = () => navigation.navigate("demo")
  const productScreen = () => navigation.navigate("productItem")
  const articleScreen = () => navigation.navigate("article")

  return (
    <View testID="WelcomeScreen" style={FULL}>
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <CarousalContainer></CarousalContainer>
        <RenderScreen data={renderList}></RenderScreen>
      </Screen>
    </View>
  )
})
