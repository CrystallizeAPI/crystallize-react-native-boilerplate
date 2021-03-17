import React from "react"
import { View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { Text } from "../../components"
import { color } from "../../theme"

import { CategoryTabBar } from "../../components/tab-bar/tab-bar"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

import { useQuery } from "urql"
import { Hquery } from "../../queries/home"
import { RenderScreen } from "../../components/render/renderView"

const Tab = createMaterialTopTabNavigator()

export const WelcomeScreen = observer(function WelcomeScreen() {
  const [{ data, fetching, error }] = useQuery({
    query: Hquery,
    variables: {
      language: "en",
      path: "/shop",
    },
  })

  if (fetching) {
    return (
      <View>
        <Text>Loading..</Text>
      </View>
    )
  }

  const { document } = data
  const { components } = document
  const categories = document.children

  return (
    <View style={FULL}>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: { fontSize: 12 },
          tabStyle: { width: 100 },
          style: { backgroundColor: "powderblue" },
          scrollEnabled: true,
        }}
        tabBar={(props) => <CategoryTabBar {...props} />}
      >
        {/* <Tab.Screen key={"shop"} name={"Shop"} component={RenderScreen} /> */}
        {categories.map((category, key) => {
          return <Tab.Screen key={key} name={category.name} component={RenderScreen} />
        })}
      </Tab.Navigator>
    </View>
  )
})

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  padding: 10,
  flexDirection: "row",
  flexWrap: "wrap",
}
