import React, { PropTypes } from 'react'
import {
  View,
  Text,
  Slider,
  Switch,
  Button,
} from 'react-native'

const propTypes = {
  progress: PropTypes.any, // animated
  config: PropTypes.shape({
    duration: PropTypes.number,
    imperative: PropTypes.bool,

  }),
  onProgressChange: PropTypes.func,
  onConfigChange: PropTypes.func,
  onPlayPress: PropTypes.func,
  onResetPress: PropTypes.func,
}


export default class PlayerControls extends React.Component {
  onConfigChange(merge) {
    const newConfig = {
      ...this.props.config,
      ...merge,
    }
    this.props.onConfigChange(newConfig)
  }

  render() {
    const { config } = this.props
    return (
      <View style={{ paddingBottom: 20, paddingHorizontal: 10 }}>
        <View style={{ paddingBottom: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Button title="Play" onPress={this.props.onPlayPress} />
            <Button title="Reset" onPress={this.props.onResetPress} />
          </View>
        </View>
      </View>
    )
  }
}

PlayerControls.propTypes = propTypes
