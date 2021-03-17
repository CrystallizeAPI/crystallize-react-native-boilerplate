import React from "react"
import { View, ViewStyle, Text, TextStyle, ImageStyle, Image, FlatList, Button } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { color, spacing, typography } from "../../theme"

import { TouchableOpacity } from "react-native-gesture-handler"
import { ImageHeaderScrollView, TriggeringView } from "react-native-image-header-scroll-view"
import { useBasket } from "../../components/basket/index"

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

export const ProductItemScreen = observer(function ProductScreen(props) {
  const [title, setTitle] = React.useState("")
  const [image, setImage] = React.useState(undefined)
  const [description, setDescription] = React.useState("")
  const [properties, setProperties] = React.useState([])
  const [paragraph, setParagraph] = React.useState([])
  const [sku, setSku] = React.useState([])
  const [path, setPath] = React.useState([])
  const navigation = useNavigation()

  const params = props.route.params
  const basket = useBasket()

  React.useEffect(() => {}, [basket.cart])

  const AddToCart = () => {
    basket.actions.addItem({
      sku: sku,
      path: path,
      key: path,
    })
    navigation.openDrawer()
  }

  React.useEffect(() => {
    if (params !== undefined) {
      const { data } = params

      const { name, variants } = data
      const { images, stock, priceVariants } = variants[0]
      const displayImage = images[0]?.url
      const sku = variants[0].sku

      const currency = priceVariants.find((c) => c.currency === "EUR")
      const isInStock = stock > 0

      const components = data.components
      const richText = components?.find((c) => c.type === "richText")
      const propertiesTable = components?.find((c) => c.type === "propertiesTable")
      const paragraphCollection = components?.find((c) => c.type === "paragraphCollection")

      setProperties(propertiesTable?.content?.sections)
      setParagraph(paragraphCollection?.content?.paragraphs)
      setSku(sku)
      setPath(data.path)

      setTitle(name)
      setImage(displayImage)
      setDescription(richText?.content?.plainText[0])
    }
  }, [params])

  const RenderHeaderImage = () => {
    return (
      <View style={PRODUCT_BG_IMAGE}>
        <BackButton />
      </View>
    )
  }

  return (
    <ImageHeaderScrollView
      maxHeight={300}
      minHeight={0}
      headerImage={{
        uri: image === undefined ? "https://source.unsplash.com/random/400x300" : image,
      }}
      renderForeground={() => <RenderHeaderImage />}
    >
      <View style={PRODUCT_BODY}>
        <TriggeringView>
          <Button title="ADD TO CART" onPress={AddToCart} />
          <View style={PRODUCT_CONTENT}>
            <Text style={TEXT_HEADING}>{title}</Text>
            <Text style={TEXT_PARAGRAPH}>{description}</Text>
            <Paragraph data={paragraph}></Paragraph>

            <Table data={properties}></Table>
          </View>
        </TriggeringView>
      </View>
    </ImageHeaderScrollView>
  )
})

const Paragraph = ({ data }) => {
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
            <Text style={PARA_TEXT_HEADING}>{title}</Text>
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

const PARA_TEXT_HEADING: TextStyle = {
  color: "#000",
  fontSize: 26,
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
  lineHeight: 30,
}

const PARAGRAPH_CONTAINER: ViewStyle = {
  marginTop: 20,
  marginBottom: 20,
}

const PARAGRAPH_IMAGE_FULL: ImageStyle = {
  width: 360,
  height: 300,
  marginTop: 10,
  marginBottom: 10,
  marginRight: 10,
  borderRadius: 10,
  backgroundColor: "#dfdfdf",
}

const PARAGRAPH_IMAGE_HALF: ImageStyle = {
  width: 240,
  height: 300,
  marginTop: 10,
  marginBottom: 10,
  marginRight: 10,
  borderRadius: 10,
  backgroundColor: "#dfdfdf",
}

const Table = ({ data }) => {
  if (data === undefined) {
    return (
      <View>
        <Text>couldnt render</Text>
      </View>
    )
  }
  return (
    <View>
      {data.map((section, index) => {
        return (
          <View key={index} style={TABLE_SECTION}>
            <Text style={PARA_TEXT_HEADING}>{section.title}</Text>
            {section.properties.map((property, key) => {
              return (
                <View key={key} style={TABLE_ITEM}>
                  <Text>{property.key}</Text>
                  <Text>{property.value}</Text>
                </View>
              )
            })}
          </View>
        )
      })}
    </View>
  )
}

const TABLE_ITEM: ViewStyle = {
  width: "100%",
  padding: 20,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: "#D0F0EC",
  marginTop: 10,
}

const TABLE_SECTION: ViewStyle = {
  width: "100%",
  marginTop: 10,
  marginBottom: 10,
}

const PRODUCT_BG_IMAGE: ViewStyle = {
  backgroundColor: "#f9f9f9",
  justifyContent: "center",
  alignItems: "center",
}

const PRODUCT_BODY: ViewStyle = {
  height: "auto",
  // backgroundColor: "blue",
  borderTopRightRadius: 97,
}

const PRODUCT_CONTENT: ViewStyle = {
  height: "100%",
  // backgroundColor: "red",
  borderTopRightRadius: 97,
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
  fontSize: 36,
  fontWeight: "bold",
  maxWidth: "100%",
  marginTop: 4,
  marginBottom: 4,
}

const TEXT_PARAGRAPH: TextStyle = {
  color: "rgba(0, 0, 0, 0.62)",
  fontSize: 20,
  marginTop: 4,
  marginBottom: 4,
  lineHeight: 30,
}

const TEXT_LABEL: TextStyle = {
  color: "rgba(0, 0, 0, 0.22)",
  fontSize: 20,
  marginTop: 4,
  marginBottom: 4,
}

const FOOTER: ViewStyle = {
  margin: 30,
  position: "absolute",
  bottom: 10,
  width: "100%",
}

const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  padding: 10,
  flexDirection: "row",
  flexWrap: "wrap",
}

const TRANSPARANT = { backgroundColor: "transparent" }
