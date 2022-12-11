import {takeEvery, call, put} from 'redux-saga/effects'
import {serverRegistration} from '../../api'
import { REGISTRATION ,logIn } from '../actions'

export function* registrationSaga(action) {
  const { email, password, name, surname } = action.payload
  const success = yield call(serverRegistration, email, password, name, surname)

  if (success) {
    yield put(logIn())
  }
}

export function* regSaga() {
  yield takeEvery(REGISTRATION, registrationSaga)
}