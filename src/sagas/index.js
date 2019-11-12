/* eslint-disable no-constant-condition */
import { take, put, call, fork, select, all } from 'redux-saga/effects'
import { history } from '../utils/services'
import * as actions from '../actions'
import { counterSaga } from './counter'

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

// trigger router navigation via history
// function* watchNavigate() {
//   while(true) {
    // const {pathname} = yield take(actions.NAVIGATE)
    // yield history.push(pathname)
//   }
// }

export default function* root() {
  yield all([
    // fork(watchNavigate),
    fork(counterSaga),
  ])
}
