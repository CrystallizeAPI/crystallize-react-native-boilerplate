import React from "react"
import { View } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { HorizontalList } from "../../components/horizontal-list/horizontal-list"
import { ProductCardItem } from "../../components/product-card/small-product-item"
import { ProductItem } from "../../components/product-card/shop-product-item"
import { CollectionCard } from "../../components/product-card/collection-items-card"
import { Article } from "../../components/product-card/article-card"

export const Render = ({ data }) => {
  const navigation = useNavigation()
  const productScreen = () => navigation.navigate("productItem")

  if (data === undefined) return <View></View>

  return (
    <>
      {data.map((item, key) => {
        // product items
        const allItems = item?.components?.find((p) => p.id === "items")?.content?.items
        const onlyProducts = allItems?.filter((p) => p.__typename === "Product")
        const onlyDocuments = allItems?.filter((p) => p.__typename === "Document")

        if (onlyProducts !== undefined && onlyProducts.length > 0) {
          return (
            <HorizontalList
              type="productCard"
              key={key}
              data={onlyProducts}
              renderItem={ProductItem}
            />
          )
        }

        if (item.__typename === "collection") {
          return <CollectionCard key={key} onPress={productScreen} />
        }
        if (item.__typename === "Product") {
          return <ProductItem key={key} onPress={productScreen} data={item} />
        }
        if (item.__typename === "Document") {
          return <Article key={key} data={item} />
        }
        if (item.__typename === "list") {
          return (
            <HorizontalList
              type="miniCard"
              key={key}
              data={item.data}
              renderItem={ProductCardItem}
            />
          )
        }
        if (item.__typename === "productList") {
          return (
            <HorizontalList
              type="productCard"
              key={key}
              data={item.data}
              renderItem={ProductItem}
            />
          )
        }
        if (item.__typename === "postList") {
          return <HorizontalList type="article" key={key} data={item.data} renderItem={Article} />
        }
      })}
    </>
  )
}
