import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import { lightGrey, white, black, green, red } from '../utils/colors'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

export default class Quiz extends Component {
  state = {
    index: 0,
    correct: 0,
    showAnswer: false,
  }

  submit = (answer) => {
    let correct = this.state.correct
    correct += answer === 'correct' ? 1 : 0
    this.setState(() => ({
      index: this.state.index + 1,
      correct,
      showAnswer: false,
    }))

  }

  restart () {
    this.setState(() => ({
      index: 0,
      correct: 0,
      showAnswer: false,
    }))
  }

  render () {

    const { title, questions } = this.props.navigation.state.params
    const { index, showAnswer, correct} = this.state

    if (index === questions.length) {

      clearLocalNotification()
        .then(setLocalNotification())

      return (
        <View style={[styles.container, {alignItems: 'center'}]}>
          <Text style={{textAlign: 'center'}}>Your Results</Text>
          <Text style={{textAlign: 'center'}}>
            {(correct/questions.length) * 100}% correct!
          </Text>
          <Text style={{textAlign: 'center'}}>{correct}/{questions.length}</Text>
          <TouchableOpacity
            style={[styles.btn, {backgroundColor: black}]}
            onPress={() => this.restart()}>
              <Text style={{color: white, fontSize: 18}}>Restart</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, {backgroundColor: black}]}
            onPress={() => {
              this.restart()
              this.props.navigation.goBack()
            }}>
              <Text style={{color: white, fontSize: 18}}>Back to Deck</Text>
          </TouchableOpacity>
        </View>
      )
    }

    const { question, answer } = questions[index]

    return (
      <View style={styles.container}>

        <Text style={styles.counter}>{index + 1} / {questions.length}</Text>

        <View style={styles.question}>

          <Text style={{fontSize: 36, textAlign: 'center'}}>
            {showAnswer ? answer : question}
          </Text>

          <TouchableOpacity
            onPress={() => this.setState(() => ({ showAnswer: !showAnswer }))}>
            <Text style={{color: red, fontSize: 18}}>Answer</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.responses}>
          <TouchableOpacity
            style={[styles.btn, {backgroundColor: green}]}
            onPress={() => this.submit('correct')}>
              <Text style={{color: white, fontSize: 18}}>Correct</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btn, {backgroundColor: red}]}
            onPress={() => this.submit('incorrect')}>
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
