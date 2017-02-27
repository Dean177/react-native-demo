import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Slide from '../Slide'
import { T } from '../T'
import { spaceCadet } from '../styling'

const styles = StyleSheet.create({
})

export default class Debugging extends Component {
  render () {
    console.log('bad result')
    return (
      <Slide color={spaceCadet}>
        <T>Inspector</T>
        <T>Chrome dev tools</T>
        <T>Via xcode</T>
        <T>Via android</T>
      </Slide>
    )
  }
}
