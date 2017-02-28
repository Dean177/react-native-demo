import React from 'react'
import {
  KeyboardAvoidingView,
  SegmentedControlIOS,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native'

const styles = StyleSheet.create({
  closeButton: {
    left: 10,
    position: 'absolute',
    top: 33,
  },
  openButton: {
    left: 10,
    position: 'absolute',
    top: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  outerContainer: {
    flex: 1,
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    height: 44,
    paddingHorizontal: 10,
  },
  segment: {
    marginBottom: 10,
  },
})

class KeyboardAvoidingViewExample extends React.Component {
  state = { behavior: 'padding' }

  onSegmentChange = (segment: String) => {
    this.setState({behavior: segment.toLowerCase()})
  }

  render() {
    return (
      <View style={styles.outerContainer}>
        <KeyboardAvoidingView behavior={this.state.behavior} style={styles.container}>
          <SegmentedControlIOS
            onValueChange={this.onSegmentChange}
            selectedIndex={this.state.behavior === 'padding' ? 0 : 1}
            style={styles.segment}
            values={['Padding', 'Position']} />
          <TextInput
            placeholder="<TextInput />"
            style={styles.textInput} />
        </KeyboardAvoidingView>
      </View>
    )
  }
}


export default KeyboardAvoidingViewExample
