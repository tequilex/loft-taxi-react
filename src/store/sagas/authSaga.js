import {takeEvery, call, put} from 'redux-saga/effects'
import { serverLogin } from '../../api'
import { AUTHENTICATE ,logIn } from '../actions/actionAuth'

export function* authenticateSaga(action) {
  const {email, password} = action.payload
  const success = yield call(serverLogin, email, password)
  if(success) {
    yield put(logIn())
  }
}

export function* authSaga() {
  yield takeEvery(AUTHENTICATE, authenticateSaga)
}