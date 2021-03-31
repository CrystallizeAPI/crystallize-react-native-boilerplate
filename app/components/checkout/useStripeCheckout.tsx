import React from "react"

import stripe from "tipsi-stripe"
import { useBasket } from "../../components/basket"
import ServiceApi from "../../lib/service-api"

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

export function useStripeCheckout() {
  const basket = useBasket()
  const [loading, setLoading] = React.useState(false)
  const [paymentUIState, setPaymentUIState] = React.useState("in-cart")

  const handleCardPay = async () => {
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

      console.log("stripe intent -", stripePaymentIntent)

      const stripeClientSecret =
        stripePaymentIntent?.data?.paymentProviders?.stripe?.createPaymentIntent?.client_secret

      console.log("stripe secet -", stripeClientSecret)

      const confirm = await stripe.confirmPaymentIntent({ clientSecret: stripeClientSecret })
      console.log("stripe confirm -", confirm)

      handleConfirmation(confirm, checkoutModel)
    } catch (error) {
      setLoading(false)
    }
  }

  const handleConfirmation = async (confirm, checkoutModel) => {
    console.log("in hereee ->>")
    try {
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

        const data = response?.data
        console.log("data -", data)
        if (data) {
          const { success, orderId } = data?.paymentProviders?.stripe?.confirmOrder
          console.log("response -", response, success)

          success ? setPaymentUIState("success") : setPaymentUIState("error")
        } else {
          setPaymentUIState("error")
        }

        setLoading(false)
      }
    } catch (error) {
      setPaymentUIState("error")
      console.log("error -> ", error)
    }
  }

  return {
    loading,
    paymentUIState,
    handleCardPay,
  }
}
