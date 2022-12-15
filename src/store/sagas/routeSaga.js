import {takeEvery, call, put} from 'redux-saga/effects'
import {saveRoute, GET_ROUTE} from '../actions'
import {serverGetRote} from '../../api'

export function* getRouteSaga(action) {
  const {address1, address2} = action.payload
  const data = yield call(serverGetRote, address1, address2)
  if (data.length > 0) {
    yield put(saveRoute(data))
  }
} 

export function* getRoute() {
  yield takeEvery(GET_ROUTE, getRouteSaga)
}