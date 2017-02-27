
// @flow
import { clamp, find } from 'lodash'

type Route = { screen: any, routeName: string }
type RouterState = {
  currentIndex: number,
}

type ArrayNavigationAction =
  { type: 'forwards' } |
  { type: 'backwards' } |
  { type: 'navigate', to: number }

const initialState: RouterState = { currentIndex: 0 }

const ArrayRouter = (routes: Route[]) => {
  return {
    getActionForPathAndParams: (path, params) => null,
    getComponentForState: (state) => {
      if (!routes || routes.length == 0) {
        return false
      }

      return routes[state.currentIndex].screen
    },
    getComponentForRouteName: (routeName) =>
      find(routes, (route: Route) => route.routeName === routeName).screen,

    getStateForAction: (action: ArrayNavigationAction, state: ?RouterState): RouterState => {
      if(!state) {
        return initialState
      }

      switch (action.type) {
        case 'forwards': return { currentIndex: clamp(state.currentIndex + 1, 0, routes.length - 1) }
        case 'backwards': return { currentIndex: clamp(state.currentIndex - 1, 0, routes.length - 1) }
        case 'navigate': return { currentIndex: clamp(action.to, 0, routes.length - 1) }
        default: return state
      }
    },



    getPathAndParamsForState: (state) => ({ path: '' }),
  }
}
