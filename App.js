import React from 'react'
import { StyleSheet, View, Platform, StatusBar } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'

import { blue, white } from './utils/colors'
import CreateDeck from './components/CreateDeck'
import DeckList from './components/DeckList'



function FlashCardStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'DECKS',
        tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor}/>
      }
    },
    CreateDeck: {
      screen: CreateDeck,
      navigationOptions: {
        tabBarLabel: 'NEW DECK'
      }
    }
  },{
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? blue : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : blue,
        shadowColor: 'rgba(0,0,0,0.9)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
)


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlashCardStatusBar backgroundColor={blue} barStyle='light-content' />
        <Tabs />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
