import React from 'react'
import { StyleSheet, View } from 'react-native'
import { reactBlue, slidePadding } from './styling'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: slidePadding,
  }
})

const Slide = ({ color, children, style }) =>
  <View style={[styles.container, { backgroundColor: color || reactBlue }, style]}>{children}</View>

export default Slide