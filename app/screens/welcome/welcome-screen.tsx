import React from "react"
import { View, ViewStyle, Image, ImageStyle, TextStyle } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color, spacing, typography } from "../../theme"

import { HorizontalList } from "../../components/product-card/small-product-item"
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
    </View>
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
        <CollectionCard onPress={productScreen} />
        <CollectionCard onPress={productScreen} />
        <HorizontalList data={DummyData} />
        <Article onPress={articleScreen} />
        <ProductItem onPress={nextScreen} />
        <ProductItem onPress={nextScreen} />
        <ProductItem onPress={nextScreen} />
        <ProductItem onPress={nextScreen} />
      </Screen>
    </View>
  )
})
