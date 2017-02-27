import { map } from 'lodash'
import React, { Component } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'

const companies = {
  AirBnb: require('./UsedBy/Airbnb.png'),
  Bloomberg: require('./UsedBy/Bloomberg.jpg'),
  CBS: require('./UsedBy/CBS.png'),
  Discord: require('./UsedBy/Discord.jpg'),
  Facebook: require('./UsedBy/facebook.png'),
  Instagram: require('./UsedBy/instagram.jpg'),
  Soundcloud: require('./UsedBy/Soundcloud.jpg'),
  Walmart: require('./UsedBy/Walmart.jpg'),
}

const styles = StyleSheet.create({
  company: {
    alignItems: 'center',
  },
  content: {
    backgroundColor: '#3b5998',
    flex: 1,
  },
  image: {},
  wrapper: {
    alignItems: 'flex-start',
    backgroundColor: '#3b5998',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})

export default class UsedBy extends Component {
  render() {
    const { height, width } = Dimensions.get('window')
    const imageDimension = width / 2
    return (
      <ScrollView contentContainerStyle={styles.wrapper} style={[styles.content, { height }]}>
        {map(companies, (image, company) =>
          <View style={styles.company} key={company}>
            <Image source={image} style={[styles.image, { height: imageDimension, width: imageDimension }]}/>
          </View>
        )}
      </ScrollView>
    )
  }
}
