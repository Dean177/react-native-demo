import React from 'react'
import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  text: {
    color: 'white',
    lineHeight: 28,
    fontSize: 19,
    marginBottom: 3,
  },
})

export const T = ({ children, style, ...rest }) =>
  <Text style={[styles.text, style]} {...rest}>{children}</Text>
