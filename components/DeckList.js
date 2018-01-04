import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { lightGrey, white } from '../utils/colors'

export default class DeckList extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.deck}>
          <Text style={{fontSize: 20}}>Deck name goes Here!</Text>
          <Text style={{fontSize: 16}}>0 cards</Text>
        </View>
        <View style={styles.deck}>
          <Text style={{fontSize: 20}}>Kaiba Deck</Text>
          <Text style={{fontSize: 16}}>0 cards</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: lightGrey,
  },
  deck: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    backgroundColor: white,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 0.8,
    elevation: 5,
  }
})
