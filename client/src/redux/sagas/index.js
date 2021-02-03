import { all } from 'redux-saga/effects'

import watchActionProducts from './product.sagas'
export default function * rootSaga () {
  yield all([
    watchActionProducts()
  ])
}
