import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { lightGrey } from '../utils/colors'

export default class CreateDeck extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>New deck</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightGrey
  }
})
