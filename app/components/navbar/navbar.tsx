import React from "react"
import { View, ViewStyle, Image, ImageStyle, TextStyle, Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useBasket } from "../../components/basket/index"

interface HeaderProps {
  headerType: string
}

export function Header({ headerType }) {
  const navigation = useNavigation()
  const basket = useBasket()
  const [cartCount, setCartCount] = React.useState("0")

  React.useEffect(() => {
    if (basket.status === "ready") {
      let c = basket.cart.map((x) => x.quantity).reduce((a, b) => a + b)
      c = c >= 99 ? `${c}+` : c.toString()
      setCartCount(c)
    }
  }, [basket.status])

  function openDrawer() {
    navigation.openDrawer()
  }

  function goback() {
    navigation.goBack()
  }
  return (
    <View style={NAV_BAR_CONTAINER}>
      {headerType === "navigation" && (
        <View style={MENU_CONTAINER}>
          <IconButton name={"menu"} action={openDrawer}></IconButton>
          <View style={CART_MENU_CONTAINNER}>
            <IconButton
              name={"cart"}
              action={openDrawer}
              showNotification={true}
              notificationLabel={cartCount}
            ></IconButton>
            <ProfileButton></ProfileButton>
          </View>
        </View>
      )}

      {headerType === "backNavigation" && (
        <View style={MENU_CONTAINER}>
          <IconButton name={"menu"} action={goback}></IconButton>
        </View>
      )}
    </View>
  )
}

function ProfileButton() {
  return (
    <TouchableOpacity style={WRAPPER_MARGIN}>
      <View style={PROFILE_WRAPPER}></View>
    </TouchableOpacity>
  )
}

interface IconButtonProps {
  name: string
  action: () => void
  showNotification?: boolean
  notificationLabel?: string
}

function IconButton({ name, action, showNotification, notificationLabel }: IconButtonProps) {
  const images = {
    menu: require("../../../assets/ham.png"),
    cart: require("../../../assets/shopping-cart.png"),
  }
  return (
    <TouchableOpacity style={WRAPPER_MARGIN} onPress={action}>
      <Image style={ICON_BUTTON_PLACEHOLDER} source={images[name]}></Image>
      {showNotification && (
        <View style={CART_COUNT_CONTAINER}>
          <Text style={CART_TEXT}>{notificationLabel}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

const CART_TEXT: TextStyle = {
  color: "#fff",
}

const CART_COUNT_CONTAINER: ViewStyle = {
  width: "auto",
  backgroundColor: "#000",
  borderRadius: 100,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: -6,
  right: -18,
  padding: 4,
}

const ICON_BUTTON_PLACEHOLDER: ImageStyle = {
  width: 40,
  height: 40,
  borderRadius: 5,
}

const PROFILE_WRAPPER: ViewStyle = {
  width: 50,
  height: 50,
  borderRadius: 100,
  backgroundColor: "#000",
}

const WRAPPER_MARGIN: ViewStyle = {
  margin: 13,
}

const CART_MENU_CONTAINNER: ViewStyle = {
  width: 150,
  height: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
}

const MENU_CONTAINER: ViewStyle = {
  width: "100%",
  height: 50,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
}

const NAV_BAR_CONTAINER: ViewStyle = {
  width: "100%",
  flexDirection: "column",
  paddingHorizontal: 20,
  alignItems: "center",
  marginTop: 100,
  paddingTop: 0,
  paddingBottom: 0,
  justifyContent: "flex-start",
}
