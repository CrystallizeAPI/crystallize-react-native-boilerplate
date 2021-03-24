import React from "react"
import { View, ViewStyle, Text, TextStyle, SafeAreaView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"

import { ImageHeaderScrollView, TriggeringView } from "react-native-image-header-scroll-view"
import { useBasket } from "../../components/basket/index"
import { LargeButton } from "../../components/button/large-button"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

import { ProductTableContent } from "../../components/product/table-content"
import { ProductContent } from "../../components/product/product-content"
import { IconButton } from "../../components/IconButton/IconButton"
import { CRYSTALLIZE_TENANT_IDENTIFIER } from "@env"

const Tab = createMaterialTopTabNavigator()

export const ProductItemScreen = observer(function ProductScreen(props) {
  const [image, setImage] = React.useState(undefined)
  const [variants, setVarients] = React.useState(undefined)
  const [selectedVarient, setSelectedVarient] = React.useState(undefined)
  const [item, setItem] = React.useState(undefined)
  const navigation = useNavigation()

  const params = props.route.params
  const { data } = params

  const basket = useBasket()

  const AddToCart = () => {
    if (item) {
      basket.actions.addItem(item)
      navigation.openDrawer()
    }
  }

  React.useEffect(() => {
    if (params !== undefined) {
      const { variants } = data
      const { images, stock, priceVariants } = variants[0]
      const displayImage = images[0]?.url
      const sku = variants[0].sku

      setItem({
        sku: sku,
        path: data.path,
        key: data.path,
      })

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

  const ProductContentComponent = () => {
    return <ProductContent data={data} />
  }

  const ProductTableComponent = () => {
    return <ProductTableContent data={data} />
  }

  return (
    <>
      <ImageHeaderScrollView
        maxHeight={300}
        minHeight={0}
        headerImage={{
          uri: image || "https://source.unsplash.com/random/400x300",
        }}
        renderForeground={() => <HeaderImage />}
      >
        <View style={PRODUCT_BODY}>
          <TriggeringView>
            <Tab.Navigator>
              <Tab.Screen name={"Product"} component={ProductContentComponent} />
              <Tab.Screen name={"Information"} component={ProductTableComponent} />
            </Tab.Navigator>
          </TriggeringView>
        </View>
      </ImageHeaderScrollView>
      <SafeAreaView>
        <View style={CART_BUTTON_CONTAINER}>
          <LargeButton label="Add to Cart" action={AddToCart}></LargeButton>
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
