import React from "react"
import { View, ViewStyle, TextStyle, TouchableOpacity, Text, FlatList } from "react-native"
import Animated from "react-native-reanimated"

export function CategoryTabBar({ state, descriptors, navigation, position }) {
  // console.log("position ->", position)
  return (
    <View style={TAB_BAR_CONTAINER}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          })
        }

        const inputRange = state.routes.map((_, i) => i)
        const opacity = Animated.interpolate(position, {
          inputRange,
          outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
        })

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            style={TAB_BAR_ITEM}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Text style={isFocused ? TAB_ACTIVE : TAB_INACTIVE}>{label}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const TAB_BAR_CONTAINER: ViewStyle = {
  flexDirection: "row",
  // marginTop: 50,
  padding: 20,
  paddingBottom: 0,
  marginBottom: 0,
}

const TAB_BAR_ITEM: ViewStyle = {
  padding: 10,
  marginRight: 10,
}

const TAB_ACTIVE: TextStyle = {
  color: "#000",
  fontSize: 27,
  fontWeight: "bold",
}

const TAB_INACTIVE: TextStyle = {
  color: "#aaa",
  fontSize: 27,
  fontWeight: "bold",
}
