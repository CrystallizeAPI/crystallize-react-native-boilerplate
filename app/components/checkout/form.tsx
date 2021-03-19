import React from "react"
import { ViewStyle, TextStyle, View, Text } from "react-native"

import stripe from "tipsi-stripe"
import Button from "../checkout/button"
import { useBasket } from "../../components/basket"
import ServiceApi from "../../lib/service-api"

// import { demoCardFormParameters } from "../checkout/demoData"

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
        console.log("intent success!")
        const paymentIntentId = confirm.paymentIntentId
        console.log("intent ->", paymentIntentId)
        // const response = await ServiceApi({
        //   query: `
        //       mutation confirmStripeOrder($checkoutModel: CheckoutModelInput!, $paymentIntentId: String!) {
        //         paymentProviders {
        //           stripe {
        //             confirmOrder(checkoutModel: $checkoutModel, paymentIntentId: $paymentIntentId) {
        //               success
        //               orderId
        //             }
        //           }
        //         }
        //       }
        //     `,
        //   variables: {
        //     checkoutModel,
        //     paymentIntentId: paymentIntentId,
        //   },
        // })
        const success = true
        if (success) {
          // const { success, orderId } = response.data.paymentProviders.stripe.confirmOrder

          setPaymentUIState("success")
        } else {
          setPaymentUIState("error")
        }
      }

      setLoading(false)
    } catch (error) {
      console.log("error -", error)
      setLoading(false)
    }
  }

  return (
    <View style={CONTAINER}>
      {paymentUIState === "in-cart" && (
        <View>
          <Text style={HEADER}>Card Form Example</Text>
          <Text style={INSTRCUTIONS}>Click button to show Card Form dialog.</Text>
          <Button text="Enter you card and pay" loading={loading} onPress={handleCardPayPress} />
        </View>
      )}

      {paymentUIState === "loading" && (
        <View>
          <Text style={HEADER}>LOADING</Text>
        </View>
      )}

      {paymentUIState === "success" && (
        <View>
          <Text style={HEADER}>SUCCESS</Text>
        </View>
      )}

      {paymentUIState === "error" && (
        <View>
          <Text style={HEADER}>ERRRRR</Text>
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

const HEADER: ViewStyle = {
  fontSize: 20,
  textAlign: "center",
  margin: 10,
}

const INSTRCUTIONS: TextStyle = {
  textAlign: "center",
  color: "#333333",
  marginBottom: 5,
}

const PAYMENT_METHOD: ViewStyle = {
  height: 20,
}
