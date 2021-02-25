import React from "react"
import { View, ViewStyle, Image, ImageStyle, TextStyle, Button, SafeAreaView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Header, Screen, Text, Wallpaper } from "../../components"
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

export const ArticleScreen = observer(function Article() {
  function RenderHeaderImage() {
    return (
      <View style={PRODUCT_BG_IMAGE}>
        <BackButton></BackButton>
      </View>
    )
  }
  return (
    <ImageHeaderScrollView
      maxHeight={250}
      minHeight={0}
      headerImage={{ uri: "https://source.unsplash.com/random/500x400/?sofa" }}
      renderForeground={() => <RenderHeaderImage />}
    >
      <View style={PRODUCT_BODY}>
        <TriggeringView>
          <View style={PRODUCT_CONTENT}>
            <Text style={TEXT_HEADING}>How to Buy a Sofa that Lasts</Text>
            <Text style={TEXT_PARAGRAPH}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </Text>
          </View>
        </TriggeringView>
      </View>
    </ImageHeaderScrollView>
  )
})

const PRODUCT_BG_IMAGE: ViewStyle = {
  backgroundColor: "#f9f9f9",
  justifyContent: "center",
  alignItems: "center",
}

const PRODUCT_BODY: ViewStyle = {
  // height: 1000,
  paddingBottom: 50,
}

const PRODUCT_CONTENT: ViewStyle = {
  height: "100%",
  padding: 20,
  paddingTop: 50,
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

const TEXT_HEADING: TextStyle = {
  color: "#000",
  fontSize: 30,
  fontWeight: "bold",
  marginTop: 4,
  marginBottom: 4,
}

const TEXT_PARAGRAPH: TextStyle = {
  color: "rgba(0, 0, 0, 0.62)",
  fontSize: 20,
  lineHeight: 34,
  marginTop: 4,
  marginBottom: 4,
}

const TEXT_LABEL: TextStyle = {
  color: "rgba(0, 0, 0, 0.22)",
  fontSize: 18,
  marginTop: 4,
  marginBottom: 4,
}

const ADD_TO_CARD_BUTTON: ViewStyle = {
  width: "100%",
  height: 60,
  borderRadius: 7,
  backgroundColor: "#000",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
}

const BUTTON_TEXT: TextStyle = {
  color: "#fff",
  textAlign: "center",
  fontSize: 16,
}
