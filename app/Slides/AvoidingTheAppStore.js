import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Slide from '../Slide'
import { red } from '../styling'
import { T } from '../T'

const styles = StyleSheet.create({
  bold: { fontWeight: "900" }
})

const B = ({ style, ...rest }) =>
  <Text style={[styles.bold, style]} {...rest} />

const AvoidingTheAppStore = () =>
  <Slide color={red}>
    <T>
      <B>3.3.2</B> An Application may not download or install executable code.
      Interpreted code may only be used in an Application if all scripts, code and interpreters are packaged in the
      Application and not downloaded. <B>The only exception</B> to the foregoing is scripts and code downloaded and
      run by Apple's built-in WebKit framework or <B>JavascriptCore, provided that such scripts and code do not change the primary purpose of the Application</B>
      by providing features or functionality that are inconsistent
      with the intended and advertised purpose of the Application as submitted to the App Store.
    </T>
    <T><B>{'https://github.com/Microsoft/react-native-code-push'}</B></T>
  </Slide>

export default AvoidingTheAppStore