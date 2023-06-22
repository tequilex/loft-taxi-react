import {takeEvery, call, put} from 'redux-saga/effects'
import { serverLogin } from '../../api'
import { AUTHENTICATE ,logIn } from '../actions/actionAuth'

export function* authenticateSaga(action) {
  const {email, password} = action.payload
  const success = yield call(serverLogin, email, password)
  console.log(success, success.token);

  if(success.success) {
    localStorage.setItem('token', success.token)
    localStorage.setItem('pass', password)
    localStorage.setItem('login', email)
    yield put(logIn())
  } 
}

export function* authSaga() {
  yield takeEvery(AUTHENTICATE, authenticateSaga)
}