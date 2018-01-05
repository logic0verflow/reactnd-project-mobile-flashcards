import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native'

import { lightGrey, white, black, blue } from '../utils/colors'
import { addCardToDeck } from '../utils/helpers'

export default class AddCard extends Component {

  state = {
    question: '',
    answer: ''
  }

  submit = () => {
    const question = {
      question: this.state.question,
      answer: this.state.answer
    }

    const { title } = this.props.navigation.state.params
    addCardToDeck(title, question)

    this.setState(() => ({
      question: '',
      answer: ''
    }))

    this.props.navigation.goBack()
  }

  render () {

    const { title } = this.props.navigation.state.params

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>

        <Text style={{fontSize: 18, textAlign: 'center'}}>
          Adding card to...
        </Text>
        <Text style={{fontSize: 32, textAlign: 'center'}}>
          {title}
        </Text>

        <View style={styles.inputField}>
          <TextInput
            style={styles.input}
            value={this.state.question}
            onChangeText={(question) => this.setState(() => ({ question }))}
            placeholder='Enter Question Here'/>
          <TextInput
            style={styles.input}
            value={this.state.answer}
            onChangeText={(answer) => this.setState(() => ({ answer }))}
            placeholder='Enter Answer Here'/>
        </View>

        <View style={styles.submitField}>
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={this.submit}>
            <Text style={{color: white}}>Submit</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: lightGrey,
  },
  inputField: {
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 20,
    margin: 10,
    marginBottom: 36,
    backgroundColor: white,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 0.8,
    elevation: 5,
  },
  submitField: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#676767',
    borderRadius: 4,
    marginTop: 20,
    marginBottom: 20,
  },
  submitBtn: {
    backgroundColor: blue,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 4
  },
})
