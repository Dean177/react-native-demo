import React, { Component } from 'react'
import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
    flex: 1,
  },
  titleText: {
    color: '#5290f4',
    fontSize: 35,
    marginBottom: 50,
    marginTop: -80,
    textAlign: 'center',
  },
  titleWrapper: {
    padding: 5,
  },
})

class Intro extends Component {
  static navigationOptions = {
    header: { visible: false },
    title: 'React Native',
  }

  constructor() {
    super()
    this.state = { spinValue: new Animated.Value(0) }
  }

  componentDidMount () {
    this.spin()
  }

  spin () {
    this.state.spinValue.setValue(0)
    Animated.timing(
      this.state.spinValue,
      {
        toValue: 1,
        duration: 10000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }

  render() {
    const { navigate } = this.props.navigation
    const getStartValue = () => '0deg'
    const getEndValue = () => '360deg'

    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: [getStartValue(), getEndValue()]
    })

    return (
      <View style={styles.container}>
        <Text style={styles.titleText} onPress={() => navigate('Index')}>React Native</Text>
        <TouchableOpacity onPress={() => navigate('SlideShow')}>
          <Animated.Image
            source={require('./logo.png')}
            style={[styles.logo, { transform: [{rotate: spin}] }]}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

export default Intro
