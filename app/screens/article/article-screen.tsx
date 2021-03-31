import React from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"

import { ImageHeaderScrollView, TriggeringView } from "react-native-image-header-scroll-view"
import { IconButton } from "../../components/IconButton/IconButton"
import { ParagraphContent } from "../../components/product/paragraph-content"

export const ArticleScreen = observer(function Article(props) {
  const navigation = useNavigation()
  function goBack() {
    navigation.goBack()
  }
  const HeaderImage = () => {
    return (
      <View style={PRODUCT_BG_IMAGE}>
        <View style={BUTTON_BACK}>
          <IconButton name={"back"} action={goBack}></IconButton>
        </View>
      </View>
    )
  }

  const data = props?.route.params?.content
  const image = props?.route.params?.image

  return (
    <ImageHeaderScrollView
      maxHeight={250}
      minHeight={0}
      headerImage={{ uri: image?.url }}
      renderForeground={() => <HeaderImage />}
    >
      <View style={PRODUCT_BODY}>
        <TriggeringView>
          <View style={PRODUCT_CONTENT}>
            <ParagraphContent data={data}></ParagraphContent>
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
  top: 60,
  left: 5,
  zIndex: 10,
  borderRadius: 10,
}

const TEXT_HEADING: TextStyle = {
  color: "#000",
  fontSize: 34,
  fontWeight: "bold",
  marginTop: 4,
  marginBottom: 4,
}

const TEXT_PARAGRAPH: TextStyle = {
  color: "rgba(0, 0, 0, 0.62)",
  fontSize: 20,
  lineHeight: 38,
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
