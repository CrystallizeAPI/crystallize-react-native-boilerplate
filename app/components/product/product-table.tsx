import React from "react"
import { View, ViewStyle, Text, TextStyle } from "react-native"

export const ProductTable = ({ data }) => {
  if (data === undefined) {
    return (
      <View>
        <Text style={TABLE_HEADING}>Couldn't render this area</Text>
      </View>
    )
  }
  return (
    <View style={CONTAINER}>
      {data.map((section, index) => {
        return (
          <View key={index} style={TABLE_SECTION}>
            <Text style={TABLE_HEADING}>{section.title}</Text>
            {section.properties.map((property, key) => {
              return (
                <View key={key} style={TABLE_ITEM}>
                  <View style={TABEL_CONTENT_CONTAINER_KEY}>
                    <Text style={TABEL_TEXT}>{property.key}</Text>
                  </View>
                  <View style={TABEL_CONTENT_CONTAINER_VALUE}>
                    <Text style={TABEL_TEXT}>{property.value}</Text>
                  </View>
                </View>
              )
            })}
          </View>
        )
      })}
    </View>
  )
}

const TABEL_CONTENT_CONTAINER_KEY: ViewStyle = {
  maxWidth: 140,
  minWidth: 140,
  borderStyle: "solid",
  height: "100%",
  padding: 30,
  flex: 1,
  flexShrink: 1,
  borderRightColor: "#DBDBDB",
  borderRightWidth: 1,
}

const TABEL_CONTENT_CONTAINER_VALUE: ViewStyle = {
  minWidth: 140,
  height: "100%",
  padding: 30,
  flex: 1,
  flexShrink: 1,
}

const CONTAINER: ViewStyle = {
  flex: 1,
  alignItems: "center",
}

const TABLE_HEADING: TextStyle = {
  color: "#000",
  fontSize: 28,
  fontWeight: "bold",
  maxWidth: "100%",
  marginTop: 4,
  marginBottom: 4,
  lineHeight: 47,
}

const TABLE_ITEM: ViewStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: "#fff",
  borderWidth: 1,
  overflow: "hidden",
  borderColor: "#DBDBDB",
}

const TABLE_SECTION: ViewStyle = {
  width: "90%",
  marginTop: 10,
  marginBottom: 10,
}

const TABEL_TEXT: TextStyle = {
  fontSize: 18,
  lineHeight: 28,
  fontWeight: "500",
}
