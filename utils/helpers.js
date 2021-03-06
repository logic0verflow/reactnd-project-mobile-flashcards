import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const FLASHCARD_STORAGE_KEY = 'UdaciFlash:decks'
const NOTIFICATION_KEY = 'UdaciFlash:notifications'

// Returns all the decks created and saved to local storage
export function getDecks () {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
    .then(JSON.parse)
}

// Returns a single deck with the specified id from local storage
export function getDeck (id) {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
    .then(JSON.parse)
    .then((data) => (data[id]))
}

// Creates a new deck entry in local storage with the specified title
export function saveDeckTitle (title) {
  return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: title,
      questions: []
    }
  }))
}

// Adds a question and answer pair to the specified deck in local storage
export function addCardToDeck (title, question) {
  AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
    .then(JSON.parse)
    .then((data) => (data[title])) // Get the deck from local storage
    .then(({ questions }) => {
      questions.push(question) // Add the new question answer pair to the list
      return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify({
        [title]: {
          title: title,
          questions: questions
        }
      }))
    })
}


export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
  return {
    title: 'Study Time!',
    body: "📖 Be sure to review a deck today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      // check if any data exist for notifications
      if (data === null) {
        // Check if we have permissions for notifications
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(12)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}
