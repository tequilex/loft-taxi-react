import {takeEvery, call, put} from 'redux-saga/effects'
import { serverSaveCard, serverGetCard } from '../../api'
import { SAVE_CARD, GET_CARD, showCardData } from '../actions'

export function* saveCardServerSaga(action) {
  const {
    cardNumber,
    cardName,
    expiryDate,
    cvc,
    token
  } = action.payload

  const success = yield call(serverSaveCard, {
    cardNumber,
    cardName,
    expiryDate,
    cvc,
    token
  })

  if(success) {
    yield put(showCardData({
      cardNumber,
      cardName,
      expiryDate,
      cvc
    }))
  }
}

export function* saveCardSaga() {
  yield takeEvery(SAVE_CARD, saveCardServerSaga)
}

export function* getCardServerSaga(action) {
  const {token} = action.payload
  const data = yield call(serverGetCard, token)
  if(data.cardNumber) {
    yield put(showCardData(data))
  }
}

export function* getCardSaga() {
  yield takeEvery(GET_CARD, getCardServerSaga)
}