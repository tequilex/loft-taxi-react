import {takeEvery, call, put} from 'redux-saga/effects'
import {serverRegistration} from '../../api'
import { REGISTRATION ,logIn } from '../actions'

export function* registrationSaga(action) {
  const { email, password, name, surname } = action.payload
  const success = yield call(serverRegistration, email, password, name, surname)

  if (success.success) {
    localStorage.setItem('token', success.token)
    localStorage.setItem('pass', password)
    localStorage.setItem('login', email)
    yield put(logIn())
  }
}

export function* regSaga() {
  yield takeEvery(REGISTRATION, registrationSaga)
}