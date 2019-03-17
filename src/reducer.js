/**
 * rootReducers
 */
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import search from './app/routes/search/reducers'


export default combineReducers({
  search,
  form: formReducer,
})
