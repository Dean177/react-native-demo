import { map } from 'lodash'
import React, { Component } from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { otherBlue } from './styling'
import { screens } from '../App'

const styles = StyleSheet.create({
  content: {
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    marginTop: 20,
  },
  slideTitle: {
    color: 'white',
    fontSize: 18,
  },
  slideWrapper: {
    backgroundColor: otherBlue,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
  }
})

export default class SlideIndex extends Component {
  render() {
    const { navigate } = this.props.navigation
    const { height, width } = Dimensions.get('window')
    return (
      <ScrollView contentContainerStyle={styles.content} style={[styles.container, { height }]}>
        {map(screens, (slide, slideName) =>
          <TouchableOpacity key={slideName} onPress={() => navigate(slideName)}>
            <View style={[styles.slideWrapper, { width }]}>
              <Text style={styles.slideTitle}>{slideName}</Text>
              <Text style={styles.slideTitle}>→</Text>
            </View>
          </TouchableOpacity>
        )}
      </ScrollView>
    )
  }
}