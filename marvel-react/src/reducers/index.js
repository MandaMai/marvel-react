import { combineReducers } from 'redux'
import characters from './characters'
import Jeopardy from './Jeopardy'


const marvelApp = combineReducers({
  characters,
  Jeopardy
})

export default marvelApp;