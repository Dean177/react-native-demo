import React from 'react'
import {
  createNavigationContainer,
  StackRouter,
  createNavigator,
  CardStack,
} from 'react-navigation'
import type { NavigationRouteConfigMap } from 'react-navigation'

export default (routeConfigMap: NavigationRouteConfigMap) => {
  const stackRouterConfig = { navigationOptions: {
    header: {
      visible: false,
    },
  }}

  const router = StackRouter(routeConfigMap, stackRouterConfig)
  return createNavigationContainer(createNavigator(router)(props => (
    <CardStack
      {...props}
      headerMode="screen"
    />
  )))
}