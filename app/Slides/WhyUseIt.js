import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Slide from '../Slide'
import { T } from '../T'
import Ul from '../Ul'
import { blueMagentaViolet } from '../styling'

export default class WhyUseIt extends Component {
  render () {
    return (
      <Slide color={blueMagentaViolet}>
        <T>Learning Curve</T>
        <Ul>
          <T>CSS</T>
          <T>HTML</T>
          <T>Javascript</T>
        </Ul>
        <T>Developer Experience</T>
        <Ul>
          <T>First class IDE support great</T>
          <T>Develop on real devices</T>
          <T>Live code reloading</T>
          <T>You can develop on windows machines*</T>
          <T>{`The React ecosystem: https://react.rocks/tag/ReactNative`}</T>
          <T>Great debugging tools</T>
          <T>Code sharing</T>
        </Ul>
      </Slide>
    )
  }
}
