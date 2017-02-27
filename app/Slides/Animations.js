import React, { Component } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import Animation from 'lottie-react-native'
import ExamplePicker from './Animation/ExamplePicker'
import PlayerControls from './Animation/PlayerControls'

const Examples = {
  'Squares': () => require('./Animation/animations/9squares-AlBoardman.json'),
  'Hamburger Arrow': () => require('./Animation/animations/HamburgerArrow.json'),
  'Line Animation': () => require('./Animation/animations/LineAnimation.json'),
  'Pin Jump': () => require('./Animation/animations/PinJump.json'),
  'Twitter Heart': () => require('./Animation/animations/TwitterHeart.json'),
  'Watermelon': () => require('./Animation/animations/Watermelon.json'),
  'Motion Corpse': () => require('./Animation/animations/MotionCorpse-Jrcanest.json'),
}

export default class Animations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      example: Object.keys(Examples)[0],
      progress: new Animated.Value(0),
      config: {
        duration: 3000,
        imperative: true,
      },
    }
    this.onResetPress = this.onResetPress.bind(this)
    this.setAnim = this.setAnim.bind(this)
  }

  onValueChange = (value) =>
    this.state.progress.setValue(value)

  onPlayPress = () => {
    if (this.state.config.imperative) {
      this.anim.play()
    } else {
      this.state.progress.setValue(0)
      Animated.timing(this.state.progress, {
        toValue: 1,
        duration: this.state.config.duration,
      }).start(({ finished }) => {
        if (finished) this.forceUpdate()
      })
    }
  }

  onResetPress() {
    if (this.state.config.imperative) {
      this.anim.reset()
    } else {
      this.state.progress.setValue(1)
      Animated.timing(this.state.progress, {
        toValue: 0,
        duration: this.state.config.duration,
      }).start(({ finished }) => {
        if (finished) this.forceUpdate()
      })
    }
  }

  setAnim(anim) {
    this.anim = anim
  }

  render() {
    return (
      <View style={StyleSheet.absoluteFill}>
        <ExamplePicker
          example={this.state.example}
          examples={Examples}
          onChange={(example) => this.setState({ example })}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#000',
            borderWidth: 1,
            backgroundColor: '#ffffff',
            marginVertical: 10,
          }}
        >
          <View>
            <Animation
              ref={this.setAnim}
              style={{
                width: 375,
                height: 320,
              }}
              source={Examples[this.state.example]()}
              progress={this.state.progress}
            />
          </View>
        </View>
        <PlayerControls
          progress={this.state.progress}
          config={this.state.config}
          onProgressChange={this.onValueChange}
          onConfigChange={config => this.setState({ config })}
          onPlayPress={this.onPlayPress}
          onResetPress={this.onResetPress}
        />
      </View>
    )
  }
}
