import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Slide from '../Slide'
import { T } from '../T'
import { appleGreen } from '../styling'
import CodeExample from '../CodeExample'

const styles = StyleSheet.create({
  spacer: {
    marginBottom: 20,
  },
})

const osExample = `import { Platform, StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  height: (Platform.OS === 'ios')
    ? 200
    : 100,
})`

const switchExample = `import { Platform, StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  height: Platform.select({
    ios: 200,
    uwp: 1000,
 }),
})`

const PlatformSpecific = () =>
  <Slide color={appleGreen}>
    <T>Platform specific code?</T>
    <CodeExample>{osExample}</CodeExample>
    <View style={styles.spacer} />
    <CodeExample>{switchExample}</CodeExample>
    <View style={styles.spacer} />
    <T>Platform specific extensions</T>
    <CodeExample>{`Thing.ios.js Thing.android.js`}</CodeExample>
    <T>You can then require the component as follows:</T>
    <CodeExample>{`import Thing from './Thing'`}</CodeExample>
  </Slide>

export default PlatformSpecific