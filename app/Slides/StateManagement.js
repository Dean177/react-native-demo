import React from 'react'
import { Image, StyleSheet } from 'react-native'
import Slide from '../Slide'

const mobX = require('./WhatAboutTheRest/mobservable.png')
const redux = require('./WhatAboutTheRest/redux.png')

const styles = StyleSheet.create({
  redux: {
    resizeMode: 'contain',
    width: 300,
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'space-around',
  }
})

const StateManagement = () =>
  <Slide color="white" style={styles.slide}>
    <Image source={mobX} />
    <Image source={redux} style={styles.redux} />
  </Slide>

export default StateManagement
