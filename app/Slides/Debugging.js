import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Slide from '../Slide'
import { T } from '../T'
import { spaceCadet } from '../styling'

const styles = StyleSheet.create({
  container: { justifyContent: 'space-between' },
  failCat: { alignSelf: 'center' },
})

const Debugging = () => {
  console.log('bad result')
  return (
    <Slide color={spaceCadet} style={styles.container}>
      <View>
        <T>Inspector</T>
        <T>Chrome dev tools</T>
        <T>Via xcode</T>
        <T>Via android</T>
      </View>
      <Image source={require('./Debugging/scratch.png')} style={styles.failCat}/>
    </Slide>
  )
}

export default Debugging