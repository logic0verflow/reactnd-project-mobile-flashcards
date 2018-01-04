import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { lightGrey, white, black, blue } from '../utils/colors'

export default class Deck extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.deckInfo}>
          <Text style={{fontSize: 36}}>Deck name goes Here!</Text>
          <Text style={{fontSize: 16}}>0 cards</Text>
        </View>

        <View style={styles.deckOptions}>
          <TouchableOpacity
            style={[styles.btn, {backgroundColor: white}]}
            onPress={() => console.log('adding card')}>
              <Text style={{color: black}}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, {backgroundColor: black}]}
            onPress={() => console.log('Start quiz')}>
              <Text style={{color: white}}>Start Quiz</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  deckInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    paddingTop: 60,
    paddingBottom: 60,
  },
  deckOptions: {
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 60,
  },
  btn: {
    height: 48,
    borderRadius: 4,
    borderColor: black,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  }
})
