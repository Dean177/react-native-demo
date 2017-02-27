import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CodeExample from '../CodeExample'
import Slide from '../Slide'
import { sapGreen } from '../styling'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
  },
  titleText: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  instructions: {
    color: '#333333',
    textAlign: 'center',
    marginBottom: 5,
  },

})

const exampleText = `import React from 'react'
import { Text } from 'react-native'

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
  <Slide color={sapGreen}>
    <CodeExample>{exampleText}</CodeExample>
  </Slide>


export default WhatDoesItLookLike

