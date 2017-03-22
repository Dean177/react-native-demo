import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CodeExample from '../CodeExample'
import Slide from '../Slide'
import { sapGreen } from '../styling'

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
})

const exampleText = `import React from 'react'
import { Text, View } from 'react-native'

export const SomeComponent = ({ aProp }) =>
  <Text style={aProp}>
    Simple
  </Text>
    
export const OtherComponent = () =>
  <View>
    <SomeComponent aProp="1" />
    <SomeComponent aProp="2" />
  </View>
`

const WhatDoesItLookLike = () =>
  <Slide color={sapGreen} style={styles.container}>
    <CodeExample>{exampleText}</CodeExample>
  </Slide>


export default WhatDoesItLookLike

