import React from 'react'
import { Text, View } from 'react-native'
import Ul from '../Ul'
import Slide from '../Slide'
import { T } from '../T'
import { darkSienna } from '../styling'

const Overview = () =>
  <Slide color={darkSienna}>
    <T>React</T>
    <Ul>
      <T>Library for writing user interfaces</T>
      <T>JSX (Like html, but better)</T>
      <T>Components</T>
    </Ul>

    <T>React Native</T>
    <Ul>
      <T>Cross platform components & functions</T>
      <T>Supports iOS & Android</T>
    </Ul>
  </Slide>

export default Overview
