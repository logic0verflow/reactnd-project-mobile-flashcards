import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AppLoading } from 'expo'

import { white, black, blue } from '../utils/colors'
import { getDeck } from '../utils/helpers'

class Deck extends Component {

  // Sets the view header text
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params
    return { title }
  }

  render () {
    if (this.props.deck === null) {
      return (
        <AppLoading />
      )
    }

    const { title, questions } = this.props.deck

    return (
      <View style={styles.container}>
        <View style={styles.deckInfo}>
          <Text style={{fontSize: 36, textAlign: 'center'}}>{title}</Text>
          <Text style={{fontSize: 16, textAlign: 'center'}}>{questions.length} cards</Text>
        </View>

        <View style={styles.deckOptions}>
          <TouchableOpacity
            style={[styles.btn, {backgroundColor: white}]}
            onPress={() => this.props.navigation.navigate('AddCard', { title })}>
              <Text style={{color: black}}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, {backgroundColor: blue}]}
            onPress={() => {
              if (questions.length === 0) {
                alert('Deck is empty! Add some cards first 😕')
              } else {
                this.props.navigation.navigate('Quiz', { title, questions })}
              }
            }>
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

function mapStateToProps (state, { navigation }) {
  const { title } = navigation.state.params
  return {
    deck: state[title]
  }
}

export default connect(mapStateToProps)(Deck)
