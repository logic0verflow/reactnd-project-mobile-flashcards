import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { connect } from 'react-redux'

import { lightGrey, white } from '../utils/colors'
import { getDecks } from '../utils/helpers'
import { refreshDecks } from '../actions'
import { AppLoading } from 'expo'

class DeckList extends Component {
  state = {
    ready: false
  }

  componentDidMount () {
    getDecks().then((decks) => {
      this.props.dispatch(refreshDecks(decks))
      this.setState(() => ({
        ready: true
      }))
    })
  }

  render () {

    if (!this.state.ready) {
      return (
        <AppLoading/>
      )
    }

    const { decks } = this.props
    let deckTitles = Object.keys(decks)
    if (deckTitles.length === 0) {
      return (
        <View style={styles.container}>
          <Text>Create a deck and start flashing!</Text>
        </View>
      )
    }

    const titles = deckTitles.map(title => ({ key: title }))

    return (
      <View style={styles.container}>
        <FlatList
          data={titles}
          renderItem={({ item }) =>
            <TouchableOpacity
              style={styles.deck}
              key={item.key}
              onPress={() => this.props.navigation.navigate('Deck', { title: item.key })}>
                <Text style={{fontSize: 20}}>{decks[item.key].title}</Text>
                <Text style={{fontSize: 16}}>{decks[item.key].questions.length} cards</Text>
            </TouchableOpacity>
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: lightGrey,
    paddingTop: 5,
    paddingBottom: 5,
  },
  deck: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    padding: 10,
    margin: 10,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: white,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    shadowOpacity: 0.8,
    elevation: 3,
  }
})

function mapStateToProps(state) {
  return {
    decks: state
  }
}

export default connect(mapStateToProps)(DeckList)
