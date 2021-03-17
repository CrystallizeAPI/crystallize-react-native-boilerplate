import React from "react"
import { View, Text, ViewStyle, Image, ImageStyle, TextStyle, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

export const ProductItem = ({ onPress, data }) => {
  const navigation = useNavigation()

  const { name, variants } = data
  const { images, stock, priceVariants } = variants[0]
  const displayImage = images[0]?.url

  const currency = priceVariants.find((c) => c.currency === "EUR")
  const isInStock = stock > 0

  const productScreen = () => {
    const components = data.components
    const richText = components?.find((c) => c.type === "richText")
    const propertiesTable = components?.find((c) => c.type === "propertiesTable")
    const paragraphCollection = components?.find((c) => c.type === "paragraphCollection")

    navigation.navigate("productItem", { data: data })
  }

  return (
    <TouchableOpacity style={SHADOW} onPress={productScreen}>
      <View style={PRODUCT_ITEM_CARD}>
        <View style={PRODUCT_IMAGE_CONTAINER}>
          <Image style={PRODUCT_IMAGE} source={{ uri: displayImage }} />
        </View>
        <View style={PRODUCT_CONTENT_WRAPPER}>
          <View style={PRODUCT_TEXT_WRAPPER}>
            <Text style={PRODUCT_PRICE}>
              {currency.currency} {currency.price}
            </Text>
            <Text style={PRODUCT_STOCK_LABEL}>{isInStock ? "In stock" : "out of stock"}</Text>
          </View>
          <Text style={PRODUCT_TITLE}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const SHADOW: ViewStyle = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,
  elevation: 2,
}

const PRODUCT_ITEM_CARD: ViewStyle = {
  width: 176,
  height: 248,
  backgroundColor: "#fff",
  borderRadius: 17,
  margin: 10,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
}

const PRODUCT_IMAGE_CONTAINER: ViewStyle = {
  height: "65%",
  backgroundColor: "#F9F9F9",
  overflow: "hidden",
}

const PRODUCT_IMAGE: ImageStyle = {
  width: 176,
  height: "100%",
}

const PRODUCT_CONTENT_WRAPPER: ViewStyle = {
  height: "35%",
  padding: 10,
  justifyContent: "center",
}

const PRODUCT_PRICE: TextStyle = {
  fontSize: 18,
  color: "#000",
}

const PRODUCT_STOCK_LABEL: TextStyle = {
  fontSize: 18,
  color: "#54B195",
}

const PRODUCT_TITLE: TextStyle = {
  fontSize: 18,
  color: "#898989",
}

const PRODUCT_TEXT_WRAPPER: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 10,
}
