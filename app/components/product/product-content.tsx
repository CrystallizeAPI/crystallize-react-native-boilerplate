import React from "react"
import {
  View,
  ViewStyle,
  Text,
  TextStyle,
  Image,
  ImageStyle,
  TouchableOpacity,
  FlatList,
} from "react-native"
import { ParagraphContent } from "./paragraph-content"

export const ProductContent = ({ data }) => {
  const { name, variants } = data
  const { images, stock, priceVariants } = variants[0]
  const sku = variants[0].sku

  const currency = priceVariants.find((c) => c.currency === "EUR")
  const isInStock = stock > 0

  const variantItems = variants.map((varient) => {
    return {
      id: varient.id,
      name: varient.name,
      price: varient.price,
      sku: varient.sku,
      stock: varient.stock,
      path: data.path,
      priceVariants: null,
      images: varient.images.map((img) => img.url),
    }
  })

  const components = data.components
  const description = components?.find((c) => c.type === "richText")?.content?.plainText[0]
  const paragraph = components?.find((c) => c.type === "paragraphCollection")?.content?.paragraphs

  return (
    <View style={PRODUCT_CONTENT}>
      <Text style={TEXT_HEADING}>{name}</Text>
      <Text style={PARA_TEXT_PARAGRAPH}>{description}</Text>
      <VariantsComponent data={variantItems}></VariantsComponent>
      <ParagraphContent data={paragraph}></ParagraphContent>
    </View>
  )
}

const VariantsComponent = ({ data }) => {
  const [selectedVariant, setSelectedVariant] = React.useState(undefined)

  React.useEffect(() => {
    const firstVariant = data[0].id
    setSelectedVariant(firstVariant)
  }, [])

  return (
    <View style={VARIANTS}>
      <FlatList
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={data}
        renderItem={({ item }) => {
          const isActiveStyle = selectedVariant === item.id ? ACTIVE : INACTIVE

          return (
            <TouchableOpacity key={item.id} onPress={() => setSelectedVariant(item.id)}>
              <Image
                source={{ uri: item.images[0] }}
                style={{ ...VARIANT, ...isActiveStyle }}
              ></Image>
            </TouchableOpacity>
          )
        }}
      ></FlatList>
    </View>
  )
}

const ACTIVE: ImageStyle = {
  borderWidth: 2,
}

const INACTIVE: ImageStyle = {
  borderWidth: 0,
}

const VARIANTS: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  marginTop: 20,
}

const VARIANT: ImageStyle = {
  width: 100,
  height: 100,
  marginRight: 10,
  borderRadius: 10,
  borderWidth: 2,
  backgroundColor: "#fff",
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
