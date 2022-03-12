import React from "react"
import { ViewStyle, TextStyle, View, Text } from "react-native"

import { useStripeCheckout } from "./useStripeCheckout"
import { useBasket } from "../../components/basket"

import { PayWithCardScreen } from "./pay-with-card"
import { SuccessScreen } from "./sucess-screen"

export default function CardFormScreen() {
  const basket = useBasket()
  const { loading, paymentUIState, handleCardPay } = useStripeCheckout()

  return (
    <View style={CONTAINER}>
      {paymentUIState === "in-cart" && (
        <PayWithCardScreen
          basket={basket}
          loading={loading}
          handleCardPayPress={handleCardPay}
        ></PayWithCardScreen>
      )}

      {paymentUIState === "loading" && (
        <View>
          <Text style={HEADER}>Loading</Text>
        </View>
      )}

      {paymentUIState === "success" && <SuccessScreen></SuccessScreen>}

      {paymentUIState === "error" && (
        <View>
          <Text style={HEADER}>Oh snap!</Text>
        </View>
      )}
    </View>
  )
}

const CONTAINER: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}

const HEADER: TextStyle = {
  fontSize: 30,
  fontWeight: "bold",
  margin: 10,
}
