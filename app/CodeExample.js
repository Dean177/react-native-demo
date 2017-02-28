import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  code: {
    color: 'white',
    fontFamily: 'menlo',
    fontSize: 12,
  },
  wrapper: {
    backgroundColor: 'black',
    padding: 15,
  },
})

const CodeExample = ({ children, style }) =>
  <View style={[styles.wrapper, style]}>
    <Text style={styles.code}>{children}</Text>
  </View>

export default CodeExample
