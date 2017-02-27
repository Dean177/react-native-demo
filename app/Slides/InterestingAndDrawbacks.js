import React from 'react'
import { Text, View } from 'react-native'
import Slide from '../Slide'
import { T } from '../T'
import Ul from '../Ul'
import { darkPurple } from '../styling'

const InterestingAndDrawbacks = () =>
  <Slide color={darkPurple}>
    <T>Interesting</T>
    <Ul>
      <T>Fast update cycle</T>
      <T>UWP apps / OSX desktop apps</T>
    </Ul>

    <T>Gotchas</T>
    <Ul>
      <T>Its single threaded</T>
      <T>Background tasks</T>
      <T>React Native → React</T>
      <T>Native modules</T>
    </Ul>

    <T>Not suited for</T>
    <Ul>
      <T>Games</T>
      <T>Video / Audio / Image manipulation</T>
      <T>Intensive calculation</T>
    </Ul>
  </Slide>

export default InterestingAndDrawbacks
