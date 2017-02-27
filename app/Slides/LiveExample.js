import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import Camera from 'react-native-camera'
const ears = require('./HowDoesItWork/ears-and-whiskers.png')

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  image: {
    marginTop: 50,
  },
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(180,50,200,0.3)',
    flex: 1,
    height,
    width,
    position: 'absolute',
  },
  preview: {
    alignItems: 'center',
    flex: 1,
    height,
    justifyContent: 'flex-end',
    width,
  },
  title: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: 'white',
    flex: 0,
    fontSize: 28,
    margin: 40,
    padding: 20,
  }
})

export default class LiveExample extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Camera style={styles.preview} type="front">
          <Text style={styles.title}>Incoming Live Code</Text>
        </Camera>
        <View style={styles.overlay}>
          <Image source={ears} style={styles.image}/>
        </View>
      </View>
    )
  }
}
