import React from "react"
import { View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"

import { CategoryTabBar } from "../../components/tab-bar/tab-bar"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

import { useQuery } from "urql"
import { Hquery } from "../../queries/home"
import { RenderScreen } from "../../components/render/renderView"
import { Header } from "../../components/navbar/navbar"

const Tab = createMaterialTopTabNavigator()

export const HomeScreen = observer(function HomeScreen() {
  const [{ data, fetching, error }] = useQuery({
    query: Hquery,
    variables: {
      language: "en",
      path: "/shop",
    },
  })

  if (fetching) {
    return <View></View>
  }

  const { document } = data
  const categories = document.children

  return (
    <View style={FULL}>
      <Header headerType="navigation" />
      <Tab.Navigator tabBar={(props) => <CategoryTabBar {...props} />}>
        {categories.map((category, key) => {
          return <Tab.Screen key={key} name={category.name} component={RenderScreen} />
        })}
      </Tab.Navigator>
    </View>
  )
})

const FULL: ViewStyle = { flex: 1 }
