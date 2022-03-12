import React from "react"
import { View, Image, ViewStyle, Text, TextStyle, ImageStyle, TouchableOpacity } from "react-native"
import { HorizontalList } from "../horizontal-list/horizontal-list"
import { useNavigation } from "@react-navigation/native"

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

const CARD: ViewStyle = {
  width: 250,
  height: 400,
  backgroundColor: "#aaa",
  margin: 10,
  borderRadius: 10,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: 14,
  overflow: "hidden",
}

const CARD_CONTENT: ViewStyle = {
  width: "100%",
  height: "auto",
}

const CARD_HEADING: TextStyle = {
  fontSize: 24,
  fontWeight: "bold",
  color: "#fff",
}

const CARD_DESP: TextStyle = {
  fontSize: 16,
  fontWeight: "normal",
  lineHeight: 24,
  color: "#fff",
}

const CARD_IMAGE: ImageStyle = {
  width: 250,
  height: 400,
  position: "absolute",
}

const TallCard = ({ item }) => {
  const navigation = useNavigation()

  const title = item?.components.find((c) => c.name === "Title")?.content?.text
  const image = item?.components.find((c) => c.name === "Image")?.content?.images?.[0]
  const intro = item?.components.find((c) => c.name === "Intro")?.content?.plainText[0]
  const content = item?.components.find((c) => c.name === "Body")?.content?.paragraphs

  const goToStory = () => {
    navigation.navigate("article", { content: content, image: image })
  }

  return (
    <TouchableOpacity onPress={goToStory}>
      <View style={CARD}>
        <Image
          source={{
            uri: image.url,
          }}
          style={CARD_IMAGE}
        />
        <View style={CARD_CONTENT}>
          <Text style={CARD_HEADING}>{title}</Text>
          <Text style={CARD_DESP} numberOfLines={2}>
            {intro}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export const Article = ({ data }) => {
  const name = data.name
  const title = data?.components.find((c) => c.name === "Title")?.content?.text
  const image = data?.components.find((c) => c.name === "Image")?.content?.images?.[0]
  const items = data?.components.find((c) => c.name === "Items")?.content?.items

  return (
    <>
      {name === "latest-inspirational-articles" && items !== undefined && (
        <View>
          <HorizontalList type={"article"} data={items} renderItem={TallCard}></HorizontalList>
        </View>
      )}
      {name === "posters-banner" && (
        <TouchableOpacity>
          <View style={ARTICLE_WRAPPER}>
            <Image
              source={{
                uri: image.url,
              }}
              style={ARTICLE_ITEM}
            />
            <View style={ARTICLE_OVERLAY}></View>
            <Text style={ARTICLE_HEADING}> {title}</Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  )
}
