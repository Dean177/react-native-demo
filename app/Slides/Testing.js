import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Slide from '../Slide'
import { T } from '../T'
import { cadiumOrange } from '../styling'

const Testing = () =>
  <Slide color={cadiumOrange}>
    <T>Jest</T>
    <T>Enzyme</T>
    <T>Storybook</T>
    <T>Native code via xcode & android</T>
    <Image source={require('./Testing/test-cat.jpg')} style={{ resizeMode: 'contain', width: 320, }} />
  </Slide>

export default Testing