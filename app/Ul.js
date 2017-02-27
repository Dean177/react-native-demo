import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  ul: {
    flexDirection: 'column',
    paddingTop: 10,
  },
  li: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingBottom: 10,
  },
  liIcon: {
    color: 'white',
    fontSize: 13,
    paddingRight: 10,
  },
})

const Ul = ({ children }) =>
  <View style={styles.ul}>
    {React.Children.map(children, (child) =>
      <View style={styles.li}>
        <Text style={styles.liIcon}>◇</Text>
        {React.cloneElement(child)}
      </View>
    )}
  </View>

export default Ul
