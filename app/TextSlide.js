import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { reactBlue, slidePadding } from './styling'

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: slidePadding,
  },
  text: {
    color: 'white',
    fontSize: 34,
  }
})

export default class TextSlide extends Component {
  render () {
    return (
      <View style={[styles.screen, { backgroundColor: this.props.color || reactBlue }]}>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    )
  }
}
