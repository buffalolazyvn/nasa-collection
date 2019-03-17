import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
} from './constants'

export const searchRequest = data => ({
  type: SEARCH_REQUEST,
  payload: data,
})

export const searchSuccess = data => ({
  type: SEARCH_SUCCESS,
  payload: data,
})

export const searchError = error => ({
  type: SEARCH_ERROR,
  payload: error,
})
