import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Slide from '../Slide'
import { T } from '../T'
import { cadiumOrange } from '../styling'

export default class Testing extends Component {
  render () {
    return (
      <Slide color={cadiumOrange}>
        <T>Jest (Or any other javascript test runner / framework)</T>
        <T>Enzyme</T>
        <T>Storybook</T>
        <T>Native code via xcode & android</T>
      </Slide>
    )
  }
}
