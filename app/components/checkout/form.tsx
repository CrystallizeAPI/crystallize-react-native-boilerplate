import React from "react"
import { ViewStyle, TextStyle, Image, ImageStyle, View, Text } from "react-native"

import stripe from "tipsi-stripe"
import { useBasket } from "../../components/basket"
import ServiceApi from "../../lib/service-api"
import { SafeAreaView } from "react-navigation"
import { ShoppingCartList } from "../../components/basket/cart/cart"
import { LargeButton } from "../button/large-button"

export const demoCardFormParameters = {
  // Only iOS support this options
  smsAutofillDisabled: true,
  requiredBillingAddressFields: "full",
  prefilledInformation: {
    billingAddress: {
      name: "Joel",
      line1: "Canary Place",
      line2: "3",
      city: "Macon",
      state: "Georgia",
      country: "US",
      postalCode: "31217",
      email: "joel@crystallize.com",
    },
  },
}

export default function CardFormScreen() {
  const basket = useBasket()
  const [loading, setLoading] = React.useState(false)
  const [paymentUIState, setPaymentUIState] = React.useState("in-cart")

  const handleCardPayPress = async () => {
    try {
      setLoading(true)
      const paymentMethod = await stripe.paymentRequestWithCardForm(demoCardFormParameters)
      const checkoutModel = {
        basketModel: basket.basketModel,
        customer: {
          firstName: paymentMethod.billingDetails.name,
          lastName: "",
          addresses: [
            {
              type: "billing",
              email: paymentMethod.billingDetails.email || null,
            },
          ],
        },
        confirmationURL: "https://crystallize.com",
        checkoutURL: "https://crystallize.com/checkout",
        termsURL: "https://crystallize.com/terms",
      }

      const stripePaymentIntent = await ServiceApi({
        query: `
          mutation StripePaymentIntent($checkoutModel: CheckoutModelInput!, $confirm: Boolean!, $paymentMethodId: String!) {
            paymentProviders {
              stripe {
                createPaymentIntent(checkoutModel: $checkoutModel, confirm: $confirm, paymentMethodId: $paymentMethodId)
              }

            }
          }
        `,
        variables: {
          checkoutModel,
          confirm: false,
          paymentMethodId: paymentMethod.id,
        },
      })

      const stripeClientSecret =
        stripePaymentIntent?.data?.paymentProviders?.stripe?.createPaymentIntent?.client_secret

      const confirm = await stripe.confirmPaymentIntent({ clientSecret: stripeClientSecret })
      if (confirm.status === "succeeded") {
        const paymentIntentId = confirm.paymentIntentId
        const response = await ServiceApi({
          query: `
              mutation confirmStripeOrder($checkoutModel: CheckoutModelInput!, $paymentIntentId: String!) {
                paymentProviders {
                  stripe {
                    confirmOrder(checkoutModel: $checkoutModel, paymentIntentId: $paymentIntentId) {
                      success
                      orderId
                    }
                  }
                }
              }
            `,
          variables: {
            checkoutModel,
            paymentIntentId: paymentIntentId,
          },
        })
        // const success = true
        const { success, orderId } = response.data.paymentProviders.stripe.confirmOrder
        console.log(response.data, orderId)
        if (success) {
          setPaymentUIState("success")
        } else {
          setPaymentUIState("error")
        }
      }

      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <View style={CONTAINER}>
      {paymentUIState === "in-cart" && (
        <PayWithCardScreen
          basket={basket}
          loading={loading}
          handleCardPayPress={handleCardPayPress}
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

const SuccessScreen = () => {
  return (
    <View style={SUCESS_CONTAINER}>
      <Image style={SUCESS_IMAGE} source={require("../../../assets/confirm-check.png")}></Image>
      <Text style={HEADER}>Order Confirmed!</Text>
    </View>
  )
}

const SUCESS_IMAGE: ImageStyle = {
  width: 100,
  height: 100,
}

const SUCESS_CONTAINER: ViewStyle = {
  flex: 1,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}

const PayWithCardScreen = ({ basket, loading, handleCardPayPress }) => {
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
