import React from "react"
import { View, ViewStyle, Text, TextStyle, SafeAreaView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"

import { TouchableOpacity } from "react-native-gesture-handler"
import { ImageHeaderScrollView, TriggeringView } from "react-native-image-header-scroll-view"
import { useBasket } from "../../components/basket/index"
import { AddToCartButton } from "../../components/button/add-to-cart"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

import { ProductTableContent } from "../../components/product/table-content"
import { ProductContent } from "../../components/product/product-content"
import { IconButton } from "../../components/IconButton/IconButton"

const Tab = createMaterialTopTabNavigator()

export const ProductItemScreen = observer(function ProductScreen(props) {
  const [image, setImage] = React.useState(undefined)
  const [sku, setSku] = React.useState([])
  const [path, setPath] = React.useState([])
  const navigation = useNavigation()

  const params = props.route.params
  const { data } = params

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
      const { name, variants } = data
      const { images, stock, priceVariants } = variants[0]
      const displayImage = images[0]?.url
      const sku = variants[0].sku

      const currency = priceVariants.find((c) => c.currency === "EUR")
      const isInStock = stock > 0

      setSku(sku)
      setPath(data.path)
      setImage(displayImage)
    }
  }, [params])

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

  return (
    <>
      <ImageHeaderScrollView
        maxHeight={300}
        minHeight={0}
        headerImage={{
          uri: image === undefined ? "https://source.unsplash.com/random/400x300" : image,
        }}
        renderForeground={() => <HeaderImage />}
      >
        <View style={PRODUCT_BODY}>
          <TriggeringView>
            <Tab.Navigator>
              <Tab.Screen name={"Product"} component={() => <ProductContent data={data} />} />
              <Tab.Screen name={"Table"} component={() => <ProductTableContent data={data} />} />
            </Tab.Navigator>
          </TriggeringView>
        </View>
      </ImageHeaderScrollView>
      <SafeAreaView>
        <View style={CART_BUTTON_CONTAINER}>
          <AddToCartButton label="Add to Cart" action={AddToCart}></AddToCartButton>
        </View>
      </SafeAreaView>
    </>
  )
})

const CART_BUTTON_CONTAINER: ViewStyle = {
  margin: 20,
}

const PRODUCT_BG_IMAGE: ViewStyle = {
  backgroundColor: "#f9f9f9",
  justifyContent: "center",
  alignItems: "center",
}

const PRODUCT_BODY: ViewStyle = {
  height: "auto",
  borderTopRightRadius: 97,
}

const BUTTON_BACK: ViewStyle = {
  position: "absolute",
  top: 60,
  left: 5,
  zIndex: 10,
  borderRadius: 10,
}

const TEXT_STYLE: TextStyle = {
  color: "#000",
}
