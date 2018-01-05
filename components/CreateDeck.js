import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native'

import { saveDeckTitle } from '../utils/helpers'
import { lightGrey, white, blue } from '../utils/colors'

export default class CreateDeck extends Component {

  state = {
    title: '',
  }

  submitTitle = () => {
    saveDeckTitle(this.state.title)
    this.setState(() => ({
      title: ''
    }))
    this.props.navigation.navigate('Home')
  }

  render () {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.stretch}>
          <Text style={styles.header}>What is the title of your new deck?</Text>
          <TextInput
            style={styles.input}
            onChangeText={(title) => this.setState({title})}
            placeholder='Enter deck title here'
            value={this.state.title}/>
        </View>

        <TouchableOpacity
          style={styles.submitBtn}
          onPress={this.submitTitle}>
            <Text style={{color: white}}>SUBMIT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightGrey
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 36,
    textAlign: 'center'
  },
  stretch: {
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  input: {
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#676767',
    borderRadius: 4,
    margin: 16,
    marginTop: 36,
    marginBottom: 36,
  },
  submitBtn: {
    backgroundColor: blue,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 4
  }
})
