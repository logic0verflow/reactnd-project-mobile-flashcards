import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import { lightGrey, white, black, green, red } from '../utils/colors'

export default class Quiz extends Component {
  state = {
    index: 0
  }
  render () {

    const { title, questions } = this.props.navigation.state.params
    const { index } = this.state
    const { question, answer } = questions[index]

    return (
      <View style={styles.container}>

        <Text style={styles.counter}>{index + 1} / {questions.length}</Text>

        <View style={styles.question}>
          <Text style={{fontSize: 36, textAlign: 'center'}}>{question}</Text>
          <TouchableOpacity>
            <Text style={{color: red, fontSize: 18}}>Answer</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.responses}>
          <TouchableOpacity style={[styles.btn, {backgroundColor: green}]}>
            <Text style={{color: white, fontSize: 18}}>Correct</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn, {backgroundColor: red}]}>
            <Text style={{color: white, fontSize: 18}}>Incorrect</Text>
          </TouchableOpacity>
        </View>

      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  counter: {
    alignSelf: 'flex-start',
    margin: 10,
    fontSize: 18
  },
  question: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  responses: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 128,
    height: 48,
    borderRadius: 6,
    borderWidth: 0,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
