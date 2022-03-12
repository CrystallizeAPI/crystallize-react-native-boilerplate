import React from "react"
import { View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"

import { Header } from "../../components/navbar/navbar"
import { ShoppingCart } from "../../components/basket/cart/cart"
import { useBasket } from "../../components/basket/index"

export const CartScreen = observer(function CartScreen() {
  const basket = useBasket()
  return (
    <View style={FULL}>
      <Header />
      <ShoppingCart basket={basket} />
    </View>
  )
})

const FULL: ViewStyle = { flex: 1 }
