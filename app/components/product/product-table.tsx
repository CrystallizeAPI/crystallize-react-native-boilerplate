import React from "react"
import { View, ViewStyle, Text, TextStyle } from "react-native"

export const ProductTable = ({ data }) => {
  if (data === undefined) {
    return (
      <View>
        <Text>couldnt render</Text>
      </View>
    )
  }
  return (
    <View>
      {data.map((section, index) => {
        return (
          <View key={index} style={TABLE_SECTION}>
            <Text style={TABLE_HEADING}>{section.title}</Text>
            {section.properties.map((property, key) => {
              return (
                <View key={key} style={TABLE_ITEM}>
                  <Text>{property.key}</Text>
                  <Text>{property.value}</Text>
                </View>
              )
            })}
          </View>
        )
      })}
    </View>
  )
}

const TABLE_HEADING: TextStyle = {
  color: "#000",
  fontSize: 34,
  fontWeight: "bold",
  maxWidth: "100%",
  marginTop: 4,
  marginBottom: 4,
  lineHeight: 47,
}

const TABLE_ITEM: ViewStyle = {
  width: "100%",
  padding: 20,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: "#D0F0EC",
  marginTop: 10,
}

const TABLE_SECTION: ViewStyle = {
  width: "100%",
  marginTop: 10,
  marginBottom: 10,
}
