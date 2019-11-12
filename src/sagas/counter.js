import { put, all, takeEvery, delay } from 'redux-saga/effects'
import { INCREMENT_ASYNC, DECREASE_ASYNC } from '../actions'


function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREASE' })
}

function* decreaseAsync() {
  yield delay(1000)
  yield put({ type: 'DECREASE' })
}


export function* counterSaga() {
  yield all([
    takeEvery(INCREMENT_ASYNC, incrementAsync),
    takeEvery(DECREASE_ASYNC, decreaseAsync),
  ])
}
