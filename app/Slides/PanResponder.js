import { range } from 'lodash'
import React from 'react'
import { presets, spring, StaggeredMotion } from 'react-motion'
import { Image, PanResponder, StyleSheet, Text, View } from 'react-native'

const CIRCLE_SIZE = 80
const initialPosition = { x: 20, y: 84 }
const styles = StyleSheet.create({
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  container: {
    flex: 1,
    paddingTop: 64,
  },
})
const cats = [
  require('./PanResponder/cat1.jpg'),
  require('./PanResponder/cat2.png'),
  require('./PanResponder/cat3.png'),
  require('./PanResponder/cat4.jpg'),
  require('./PanResponder/cat5.jpg'),
]

const PanResponderExample = React.createClass({
  _panResponder: {},
  _previousLeft: initialPosition.x,
  _previousTop: initialPosition.y,
  _circleStyles: {},
  circle: (null : ?{ setNativeProps(props: Object): void }),

  getInitialState() { return initialPosition },

  componentWillMount: function() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: function() { return true },
      onMoveShouldSetPanResponder: function() { return true },
      onPanResponderGrant: this._highlight,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd,
    })
    this._previousLeft = initialPosition.x
    this._previousTop = initialPosition.y
    this._circleStyles = {
      style: {
        left: this._previousLeft,
        top: this._previousTop,
        backgroundColor: 'green',
      }
    }
  },

  componentDidMount() { this._updateNativeStyles() },

  getStyles(prevStyles) {
    return prevStyles.map((_, i) => (i === 0) ? this.state : {
      x: spring(prevStyles[i - 1].x, presets.gentle),
      y: spring(prevStyles[i - 1].y, presets.gentle),
    })
  },

  render: function() {
    return (
      <View style={styles.container}>
        <StaggeredMotion
          defaultStyles={range(5).map(() => initialPosition)}
          styles={this.getStyles}
        >
          {balls =>
            <View>
              {balls.map(({ x, y }, i) =>
                <Image
                  key={i}
                  source={cats[i]}
                  style={[styles.circle, {
                    position: 'absolute',
                    left: x,
                    top: y - 64,
                  }]}
                />
              )}
            </View>
          }
        </StaggeredMotion>
        <View
          ref={(circle) => { this.circle = circle }}
          style={styles.circle}
          {...this._panResponder.panHandlers}
        />
      </View>
    )
  },

  _highlight: function() {
    this._circleStyles.style.backgroundColor = 'blue'
    this._updateNativeStyles()
  },

  _unHighlight: function() {
    this._circleStyles.style.backgroundColor = 'green'
    this._updateNativeStyles()
  },

  _updateNativeStyles: function() {
    this.circle && this.circle.setNativeProps(this._circleStyles)
  },

  _handlePanResponderMove: function(e, gestureState) {
    const x = this._previousLeft + gestureState.dx
    const y = this._previousTop + gestureState.dy
    this._circleStyles.style.left = x
    this._circleStyles.style.top = y
    this._updateNativeStyles()
    this.setState({ x, y })
  },

  _handlePanResponderEnd: function(e, gestureState) {
    this._unHighlight()
    this._previousLeft += gestureState.dx
    this._previousTop += gestureState.dy
  },
})

export default PanResponderExample
