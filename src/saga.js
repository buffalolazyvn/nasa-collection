/**
 * rootSaga
 */
import { all } from 'redux-saga/effects'

import searchSaga from './app/routes/search/saga'

export default function* rootSaga() {
  yield all([
    ...searchSaga,
  ])
}
