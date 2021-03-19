import React from "react"
import { View, ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
import { color } from "../../theme"
import { useQuery } from "urql"
import { CategoryQuery } from "../../queries/category"
import { Render } from "./renderStackable"
import { SkeletonProductProducts } from "../../components/loading/productSkeleton"

export const RenderScreen = ({ route }) => {
  const routeName = route.name.toLowerCase()
  const [{ data, fetching, error }] = useQuery({
    query: CategoryQuery,
    variables: {
      language: "en",
      path: `/shop/${routeName}`,
    },
  })

  if (fetching) {
    return <SkeletonProductProducts />
  }

  const { document } = data
  const { children } = document
  const { components } = document
  const stacks = components?.find((c) => c.name === "Stackable content")?.content?.items

  // console.log("stack ->", stacks)

  return (
    <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
      <Render data={stacks}></Render>
      <Render data={children}></Render>
    </Screen>
  )
}

const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  padding: 10,
  flexDirection: "row",
  flexWrap: "wrap",
  margin: 0,
}
