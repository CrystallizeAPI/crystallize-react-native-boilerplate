import React from "react"
import { ViewStyle, TextStyle, View, Text, SafeAreaView } from "react-native"
import { ShoppingCartList } from "../../components/basket/cart/cart"
import { LargeButton } from "../button/large-button"

export const PayWithCardScreen = ({ basket, loading, handleCardPayPress }) => {
  const [cartCount, setCartCount] = React.useState(0)
  React.useEffect(() => {
    if (basket.status === "ready" && basket.cart.length > 0) {
      let c = basket?.cart?.map((x) => x.quantity)?.reduce((a, b) => a + b)
      c = c >= 99 ? `${c}+` : c.toString()
      setCartCount(c)
    }
  }, [basket.cart])
  return (
    <View>
      <Text style={HEADER}>You have {cartCount} items in Cart</Text>
      <ShoppingCartList itemStyle={ITEM} basket={basket} />
      <SafeAreaView>
        <LargeButton
          label="Pay with Card"
          iconType="card"
          loading={loading}
          action={handleCardPayPress}
        />
      </SafeAreaView>
    </View>
  )
}

const ITEM: ViewStyle = {}

const HEADER: TextStyle = {
  fontSize: 30,
  fontWeight: "bold",
  margin: 10,
}
