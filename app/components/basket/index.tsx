import React, { useEffect, useReducer, useRef, useMemo } from "react"

import ServiceApi from "../../lib/service-api"
import { useLocale } from "../../lib/i18n"

import { retrieveFromCache, persistToCache } from "./cache"
import reducer, { initialState } from "./reducer"
import GET_BASKET_QUERY from "./get-basket-query"

const BasketContext = React.createContext({})

export const useBasket = () => React.useContext(BasketContext)

function clientCartItemForAPI({ sku, path, quantity, priceVariantIdentifier }) {
  return { sku, path, quantity, priceVariantIdentifier }
}

export function BasketProvider({ children }) {
  const locale = useLocale()
  const [{ status, clientBasket, serverBasket, attentionCartItem }, dispatch] = useReducer(
    reducer,
    initialState,
  )

  useEffect(() => {
    ;(async function init() {
      const cache = await retrieveFromCache()
      dispatch({ action: "hydrate", ...cache })
    })()
  }, [])

  // Persist the basket on the client
  useEffect(() => {
    if (status !== "not-hydrated") {
      persistToCache({
        ...clientBasket,
        cart: clientBasket.cart.map(clientCartItemForAPI),
      })
    }
  }, [status, clientBasket])

  /**
   * Define the basketModel object.
   * Used here and in the checkout
   */
  const basketModel = useMemo(
    () => ({
      locale: {
        locale: "en",
        displayName: "English - US",
        appLanguage: "en-US",
        crystallizeCatalogueLanguage: "en",
        crystallizePriceVariant: "default",
      },
      cart: clientBasket.cart.map(clientCartItemForAPI),
      voucherCode: clientBasket.voucherCode,
      crystallizeOrderId: clientBasket.crystallizeOrderId,
      klarnaOrderId: clientBasket.klarnaOrderId,
    }),
    [locale, clientBasket],
  )

  // Get server state on cart change
  useEffect(() => {
    let stale = false

    async function getServerBasket() {
      try {
        const response = await ServiceApi({
          query: GET_BASKET_QUERY,
          variables: {
            basketModel,
          },
        })

        if (!stale) {
          dispatch({
            action: "set-server-state",
            serverBasket: response.data.basket,
          })
        }
      } catch (error) {
        console.log(error)
        dispatch({
          action: "server-update-failed",
        })
      }
    }

    let timeout
    if (status === "server-state-is-stale") {
      timeout = setTimeout(getServerBasket, 250)
    }

    return () => {
      stale = true
      clearTimeout(timeout)
    }
  }, [status, locale?.crystallizeCatalogueLanguage, basketModel])

  function dispatchCartItemAction(action) {
    return (data) => dispatch({ action, ...data })
  }

  function withLocalState(item) {
    // Exclude voucher codes
    if (item.sku.startsWith("--voucher--")) {
      return item
    }

    const clientBasketCartItem = clientBasket.cart.find((c) => c.sku === item.sku)

    /**
     * Don't show the cart item if it is not in
     * the client cache.
     **/
    if (!clientBasketCartItem) {
      return null
    }

    return {
      ...item,
      quantity: clientBasketCartItem.quantity,
    }
  }

  const cart = (serverBasket?.cart || []).map(withLocalState).filter(Boolean)
  const totalWithoutDiscounts = cart
    .filter((c) => !c.sku.startsWith("--voucher--"))
    .reduce(
      (acc, curr) => {
        return {
          gross: acc.gross + curr.price.gross,
          net: acc.net + curr.price.net,
          quantity: acc.quantity + curr.quantity,
        }
      },
      {
        gross: 0,
        quantity: 0,
      },
    )

  return (
    <BasketContext.Provider
      value={{
        status,
        basketModel,
        cart,
        total: serverBasket?.total || {},
        totalWithoutDiscounts,
        attentionCartItem,
        actions: {
          addVoucherCode: (voucherCode) => dispatch({ action: "add-voucher", voucherCode }),
          removeVoucherCode: () => dispatch({ action: "remove-voucher" }),
          empty: () => dispatch({ action: "empty" }),
          addItem: dispatchCartItemAction("add-item"),
          removeItem: dispatchCartItemAction("remove-item"),
          incrementItem: dispatchCartItemAction("increment-item"),
          decrementItem: dispatchCartItemAction("decrement-item"),
          drawAttention: (sku) => dispatch({ action: "draw-attention", sku }),
          setCrystallizeOrderId: (crystallizeOrderId) =>
            dispatch({
              action: "set-crystallize-order-id",
              crystallizeOrderId,
            }),
          setKlarnaOrderId: (klarnaOrderId) =>
            dispatch({ action: "set-klarna-order-id", klarnaOrderId }),
        },
      }}
    >
      {children}
    </BasketContext.Provider>
  )
}
