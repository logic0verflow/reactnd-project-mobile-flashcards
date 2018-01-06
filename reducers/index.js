import { ADD_CARD, REFRESH_DECKS } from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case REFRESH_DECKS:
      const { decks } = action
      return {
        ...decks
      }
    case ADD_CARD:
      const { title, question } = action
      return {
        ...state,
        [title]: {
          ...state[title],
          questions: state[title].questions.concat([question])
        }
      }
    default:
      return state
  }
}

export default decks
