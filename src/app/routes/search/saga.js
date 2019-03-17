import { call, put, takeLatest } from 'redux-saga/effects'
import {
  SEARCH_REQUEST,
} from './constants'
import {
  searchSuccess,
  searchError,
} from './actions'

// Helpers
import { getRequest } from '../../helpers/request'
import api from '../../helpers/api'

export function* searchRequest(action) {
  const searchText = action.payload.searchText
  const requestURL = api.search + searchText

  try {
    const data = yield call(getRequest, requestURL)
    yield put(searchSuccess(data))
  } catch (err) {
    yield put(searchError(err))
  }
}

const authSaga = [
  takeLatest(SEARCH_REQUEST, searchRequest),
]

export default authSaga
