import {takeEvery, call, put} from 'redux-saga/effects'
import { GET_ADDRESSES, getAddressesState } from '../actions'
import { serverGetAddressList } from '../../api'

export function* getAddressesSaga(action) {
  const data = yield call(serverGetAddressList)
  if (data.addresses) {
    yield put(getAddressesState(data.addresses))
  }
}

export function* getAddresses() {
  yield takeEvery(GET_ADDRESSES, getAddressesSaga)
}

