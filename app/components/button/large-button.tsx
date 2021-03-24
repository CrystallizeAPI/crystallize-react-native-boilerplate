import React from "react"
import { View, ViewStyle, Text, TextStyle, ActivityIndicator, TouchableOpacity } from "react-native"
import { IconButton } from "../IconButton/IconButton"

interface ButtonProps {
  label: string
  disabledText?: string
  loading?: boolean
  disabled?: boolean
  style?: any
  iconType?: string
  action: (e: any) => void
}

export const LargeButton = (props: ButtonProps) => {
  const handlePress = (event) => {
    const { loading, disabled, action } = props

    if (loading || disabled) {
      return
    }

    if (action) {
      action(event)
    }
  }

  const { label, disabledText, loading, disabled, iconType, style, ...rest } = props

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={ADD_TO_CARD_BUTTON}>
        {loading && <ActivityIndicator animating size="small" />}

        {!loading && !disabled && (
          <>
            <IconButton name={iconType || "cartWhite"} style={BUTTON_ICON_SMALL}></IconButton>
            <Text style={BUTTON_TEXT}>{label || ""}</Text>
          </>
        )}
      </View>
    </TouchableOpacity>
  )
}

const BUTTON_ICON_SMALL = {
  width: 30,
  height: 30,
}

const ADD_TO_CARD_BUTTON: ViewStyle = {
  width: "100%",
  height: 60,
  borderRadius: 7,
  backgroundColor: "#000",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
}

const BUTTON_TEXT: TextStyle = {
  color: "#fff",
  textAlign: "center",
  fontSize: 16,
}
