import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { lightGrey, white } from '../utils/colors'
import { getDecks } from '../utils/helpers'

export default class DeckList extends Component {

  state = {
    decks: null
  }

  componentDidMount () {
    getDecks().then((decks) => {
      this.setState(() => ({
        decks
      }))
    })
  }

  render () {
    const { decks } = this.state

    if (decks === null) {
      return (
        <View style={styles.container}>
          <Text>Create a deck and start flashing!</Text>
        </View>
      )
    }

    const deckTitles = Object.keys(decks)
    return (
      <View style={styles.container}>
      {
        deckTitles.map((title) => (
          <TouchableOpacity
            style={styles.deck}
            key={title}
            onPress={() => this.props.navigation.navigate('Deck', { title })}>
              <Text style={{fontSize: 20}}>{decks[title].title}</Text>
              <Text style={{fontSize: 16}}>{decks[title].questions.length} cards</Text>
          </TouchableOpacity>
        ))
      }
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
