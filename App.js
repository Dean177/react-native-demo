import React, { Component } from 'react'
import { Text } from 'react-native'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import Intro from './app/Intro/Intro'
import SlideShow from './app/SlideShow'
import SlideIndex from './app/SlideIndex'

export const screens = {
  Intro: { screen: Intro },
  Index: { screen: SlideIndex, },
  SlideShow: { screen: SlideShow },
}

const navigationConfig = {
  headerMode: 'screen',
  navigationOptions: {
    header: {
      visible: false,
    },
  },
}

const AppNavigator = StackNavigator(screens, navigationConfig)


const navReducer = (action, state) => {
  switch (action.type) {
    case 'forwards': return state
    default:
      return AppNavigator.router.getStateForAction(action, state) || state
  }
}

export default class extends Component {
  state = undefined

  dispatch = (action) =>
    this.setState(navReducer(action, this.state))

  render() {
    const navigation = addNavigationHelpers({
      dispatch: this.dispatch,
      state: this.state,
    })

    return (
      <AppNavigator />
    )
  }
}