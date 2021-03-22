import React from "react"
import { View, ViewStyle, Text, TextStyle, FlatList, Image, ImageStyle } from "react-native"

export const ParagraphContent = ({ data }) => {
  if (data === undefined) {
    return (
      <View>
        <Text>couldnt render</Text>
      </View>
    )
  }

  return (
    <View>
      {data.map((content, index) => {
        const title = content?.title?.text
        const bodyText = content?.body?.plainText.join("")
        return (
          <View style={PARAGRAPH_CONTAINER} key={index}>
            <Text style={PARA_TEXT_SUBHEADING}>{title}</Text>
            <Text style={PARA_TEXT_PARAGRAPH}>{bodyText}</Text>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={content?.images}
              renderItem={({ item }) => {
                const fullImgView = !(content?.images?.length > 1)
                return (
                  <Image
                    style={fullImgView ? PARAGRAPH_IMAGE_FULL : PARAGRAPH_IMAGE_HALF}
                    source={{ uri: item.url }}
                  ></Image>
                )
              }}
            ></FlatList>
          </View>
        )
      })}
    </View>
  )
}

const PARA_TEXT_SUBHEADING: TextStyle = {
  color: "#000",
  fontSize: 27,
  fontWeight: "bold",
  maxWidth: "100%",
  marginTop: 4,
  marginBottom: 4,
  lineHeight: 42,
}

const PARA_TEXT_PARAGRAPH: TextStyle = {
  color: "rgba(0, 0, 0, 0.62)",
  fontSize: 18,
  marginTop: 4,
  marginBottom: 4,
  lineHeight: 38,
  fontWeight: "500",
}

const PARAGRAPH_CONTAINER: ViewStyle = {
  marginTop: 20,
  marginBottom: 20,
}

const PARAGRAPH_IMAGE_FULL: ImageStyle = {
  width: 360,
  height: 300,
  marginTop: 30,
  marginBottom: 10,
  marginRight: 10,
  borderRadius: 20,
  backgroundColor: "#dfdfdf",
}

const PARAGRAPH_IMAGE_HALF: ImageStyle = {
  width: 240,
  height: 300,
  marginTop: 30,
  marginBottom: 10,
  marginRight: 10,
  borderRadius: 20,
  backgroundColor: "#dfdfdf",
}
