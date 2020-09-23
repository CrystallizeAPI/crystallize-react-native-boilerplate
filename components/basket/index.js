import React, {useEffect, useReducer} from 'react';

import {retrieveFromCache, persistToCache} from './cache';
export {TinyBasket} from './tiny-basket';
import reducer, {initialState} from './reducer';
import {useExtendedProductVariants} from './extend-product-variants';

const BasketContext = React.createContext();

export const useBasket = () => React.useContext(BasketContext);

export function BasketProvider({children}) {
  const [
    {
      cart,
      total,
      status,
      productsVariantsToExtend,
      metadata,
      changeTriggeredByChannel,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    // Retrieve cached cart
    (async function init() {
      const cache = await retrieveFromCache();
      dispatch({action: 'hydrate', ...cache});
    })();
  }, []);

  // Get extended product data from the Catalogue API
  const extendedProductVariants = useExtendedProductVariants({
    productsVariantsToExtend,
  });
  useEffect(() => {
    dispatch({action: 'extended-product-variants', extendedProductVariants});
  }, [extendedProductVariants]);

  // Store cart on change
  useEffect(() => {
    if (status !== 'not-hydrated') {
      const data = {
        cart: cart.map(({extended, ...rest}) => rest),
        metadata,
      };
      persistToCache(data);
    }
  }, [status, cart, metadata, changeTriggeredByChannel]);

  function dispatchCartItemAction(action) {
    return (data) => dispatch({action, ...data});
  }

  return (
    <BasketContext.Provider
      value={{
        status,
        cart: cart.map(({extended, ...rest}) => ({
          ...extended,
          ...rest,
        })),
        total,
        metadata,
        actions: {
          empty: () => dispatch({action: 'empty'}),
          setMetadata: (metadata) =>
            dispatch({action: 'set-metadata', metadata}),
          addItem: dispatchCartItemAction('add-item'),
          removeItem: dispatchCartItemAction('remove-item'),
          incrementItem: dispatchCartItemAction('increment-item'),
          decrementItem: dispatchCartItemAction('decrement-item'),
        },
      }}>
      {children}
    </BasketContext.Provider>
  );
}
