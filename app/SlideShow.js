import { clamp } from 'lodash'
import React, { Component } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import WhatIsIt from './Slides/WhatIsIt'
import Overview from './Slides/Overview'
import WhatDoesItLookLike from './Slides/WhatDoesItLookLike'
import WhyUseIt from './Slides/WhyUseIt'
import PanResponder from './Slides/PanResponder'
import AvoidingTheAppStore from './Slides/AvoidingTheAppStore'
import UsedBy from './Slides/UsedBy'
import Animations from './Slides/Animations'
import LiveExample from './Slides/LiveExample'
import PullToRefresh from './Slides/PullToRefresh'
import KeyboardAvoiding from './Slides/KebyoardAvoiding'
import InterestingAndDrawbacks from './Slides/InterestingAndDrawbacks'
import Debugging from './Slides/Debugging'
import Testing from './Slides/Testing'
import PlatformSpecific from './Slides/PlatformSpecific'
import WhatAboutTheRest from './Slides/WhatAboutTheRest'
import StateManagement from './Slides/StateManagement'
import Questions from './Slides/Questions'

import { reactBlue } from './styling'

const Slides = [
  WhatIsIt,
  Overview,
  WhatDoesItLookLike,
  WhyUseIt,
  KeyboardAvoiding,
  PullToRefresh,
  PanResponder,
  Animations,
  AvoidingTheAppStore,
  LiveExample,
  Debugging,
  Testing,
  PlatformSpecific,
  WhatAboutTheRest,
  StateManagement,
  InterestingAndDrawbacks,
  UsedBy,
  Questions,
]

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: reactBlue,
    flex: 1,
    padding: 15,
  },
  buttons: {
    flex: 0,
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
  },
  slide: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    marginTop: 25,
  },
})

export default class SlideShow extends Component {
  static navigationOptions = {
    header: { visible: false },
  }
  state = { currentSlide: 0 }
  onPrevious = () => this.setState({ currentSlide: clamp(this.state.currentSlide - 1, 0, Slides.length - 1) })
  onNext = () => this.setState({ currentSlide: clamp(this.state.currentSlide + 1, 0, Slides.length - 1) })

  render() {
    const Slide = Slides[this.state.currentSlide]
    return (
      <View style={styles.wrapper}>
        <View style={styles.slide}>
          <Slide />
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={this.onPrevious}>
            <Text style={styles.buttonText}>←</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onNext}>
            <Text style={styles.buttonText}>→</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
