import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TextSlide from '../TextSlide'
import { japaneseGreendigo } from '../styling'

export default class WhatAboutTheRest extends Component {
  render () {
    return (
      <TextSlide
        color={japaneseGreendigo}
        text="What about the rest?"
      />
    )
  }
}
