import React from "react"
import { View, ViewStyle, Text, TextStyle } from "react-native"
import { ParagraphContent } from "./paragraph-content"

export const ProductContent = ({ data }) => {
  const { name, variants } = data
  const { images, stock, priceVariants } = variants[0]
  const sku = variants[0].sku

  const currency = priceVariants.find((c) => c.currency === "EUR")
  const isInStock = stock > 0

  const components = data.components
  const description = components?.find((c) => c.type === "richText")?.content?.plainText[0]
  const paragraph = components?.find((c) => c.type === "paragraphCollection")?.content?.paragraphs

  return (
    <View style={PRODUCT_CONTENT}>
      <Text style={TEXT_HEADING}>{name}</Text>
      <Text style={PARA_TEXT_PARAGRAPH}>{description}</Text>
      <ParagraphContent data={paragraph}></ParagraphContent>
    </View>
  )
}

const PRODUCT_CONTENT: ViewStyle = {
  height: "100%",
  // backgroundColor: "red",
  borderTopRightRadius: 97,
  padding: 20,
  paddingTop: 50,
}

const TEXT_HEADING: TextStyle = {
  color: "#000",
  fontSize: 36,
  fontWeight: "bold",
  maxWidth: "100%",
  marginTop: 4,
  marginBottom: 4,
}

const PARA_TEXT_PARAGRAPH: TextStyle = {
  color: "rgba(0, 0, 0, 0.62)",
  fontSize: 18,
  marginTop: 4,
  marginBottom: 4,
  lineHeight: 38,
  fontWeight: "500",
}
