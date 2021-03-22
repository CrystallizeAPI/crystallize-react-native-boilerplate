import React from "react"
import {
  ViewStyle,
  View,
  Text,
  TextStyle,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from "react-native"

interface ButtonProps {
  text: string
  disabledText?: string
  loading?: boolean
  disabled?: boolean
  style?: any
  onPress: (e: any) => void
}

export default function Button(props: ButtonProps) {
  const handlePress = (event) => {
    const { loading, disabled, onPress } = props

    if (loading || disabled) {
      return
    }

    if (onPress) {
      onPress(event)
    }
  }

  const { text, disabledText, loading, disabled, style, ...rest } = props

  return (
    <TouchableOpacity {...rest} style={BUTTON_STYLE} onPress={handlePress}>
      <View>
        {loading && <ActivityIndicator animating size="small" />}
        {!loading && !disabled && <Text style={TEXT_STYLE}>{text}</Text>}
        {!loading && disabled && <Text style={TEXT_STYLE}>{disabledText || text}</Text>}
      </View>
    </TouchableOpacity>
  )
}

const TEXT_STYLE: TextStyle = {
  color: "#fff",
  fontSize: 20,
}

const BUTTON_STYLE: ViewStyle = {
  padding: 20,
  margin: 10,
  // height: Platform.OS === "ios" ? 35 : 40,
  width: 350,
  overflow: "hidden",
  borderWidth: 1,
  borderRadius: 7,
  backgroundColor: "#000",
  alignItems: "center",
}
