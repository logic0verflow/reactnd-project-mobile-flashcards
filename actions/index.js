export const ADD_CARD = 'ADD_CARD'
export const REFRESH_DECKS = 'REFRESH_DECKS'

export function addCard (title, question) {
  return {
    type: ADD_CARD,
    title,
    question
  }
}

export function refreshDecks (decks) {
  return {
    type: REFRESH_DECKS,
    decks
  }
}
