import { map } from 'lodash'
import React, { PropTypes } from 'react'
import { Picker, Platform } from 'react-native'

const propTypes = {
  example: PropTypes.any,
  examples: PropTypes.any,
  onChange: PropTypes.func,
}

export default class ExamplePicker extends React.Component {
  render() {
    return (
      <Picker
        selectedValue={this.props.example}
        onValueChange={this.props.onChange}
        style={{
          marginBottom: Platform.select({
            ios: -30,
            android: 0,
          }),
        }}
      >
        {map(this.props.examples, (getJson, name) =>
          <Picker.Item
            key={name}
            label={name}
            value={name}
          />
        )}
      </Picker>
    )
  }
}

ExamplePicker.propTypes = propTypes
