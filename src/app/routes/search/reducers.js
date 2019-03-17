import { fromJS } from 'immutable'

import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
} from './constants'

const initialState = fromJS({
  items: [],
  searchText: ""
})

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return state
      
    case SEARCH_SUCCESS:
      return state
        .set('items', action.payload)

    case SEARCH_ERROR:
      return state
        .set('message', action.payload)
        .set('items', [])

    default:
      return state
  }
}

export default authReducer
