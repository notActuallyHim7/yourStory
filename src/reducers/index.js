import Categories from './Categories'
import Tags from './Tags'
import {combineReducers} from 'redux'

const reducers = combineReducers({
  categories:Categories,
  tags:Tags
})

export default reducers;
