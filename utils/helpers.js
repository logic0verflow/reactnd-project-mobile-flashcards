import { AsyncStorage } from 'react-native'

const FLASHCARD_STORAGE_KEY = 'MobileFlashCards'

export function getDecks () {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
    .then(JSON.parse)
}

export function getDeck (id) {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
    .then(JSON.parse)
    .then((data) => (data[id]))
}

export function saveDeckTitle (title) {
  return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: title,
      questions: []
    }
  }))
}

export function addCardToDeck (title, question) {
  AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
    .then(JSON.parse)
    .then((data) => (data[title]))
    .then(({ questions }) => {
      questions.push(question)
      return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify({
        [title]: {
          title: title,
          questions: questions
        }
      }))
    })
}
