import React from "react"
import { View, ViewStyle, Text, ActivityIndicator } from "react-native"
import { observer } from "mobx-react-lite"

import { Header } from "../../components/navbar/navbar"
import { useBasket } from "../../components/basket/index"
import stripe from "tipsi-stripe"
import CardFormScreen from "../../components/checkout/form"
import { useQuery } from "urql"
import ServiceApi from "../../lib/service-api"

const STRIPE_QUERY = `
query {
    paymentProviders {
      stripe {
        config
      }
    }
  }

`

export const CheckoutScreen = observer(function CheckoutScreen() {
  const basket = useBasket()
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    async function getStripePublishableKey() {
      const response = await ServiceApi({
        query: STRIPE_QUERY,
      })

      if (response.data) {
        const publishableKey = response?.data?.paymentProviders?.stripe?.config?.publishableKey
        stripe.setOptions({
          publishableKey: publishableKey,
        })
        setLoading(false)
      }
    }

    getStripePublishableKey()
  }, [])

  return (
    <View style={FULL}>
      <Header headerType="backNavigation" />
      {loading ? <ActivityIndicator size="small" color="#000" /> : <CardFormScreen />}
    </View>
  )
})

const FULL: ViewStyle = { flex: 1 }
