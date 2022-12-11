import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import createSagaMiddleware from 'redux-saga'
// import { authMiddleware } from '../middlewares/authMiddleware'
import {saveCardMiddleware} from '../middlewares/saveCardMiddleware'
import {
  authSaga, 
  regSaga
} from './sagas'

const sagaAuthMiddleware = createSagaMiddleware()
const sagaRegMiddleware = createSagaMiddleware()

function saveToLoсalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state)
    console.log(state)
    localStorage.setItem('loftTaxiUserData', serialisedState)
  } catch (e) {}
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem('loftTaxiUserData')
    if (serialisedState === null) return undefined
    return JSON.parse(serialisedState)
  } catch (e) {
    return undefined
  }
}


export const store = createStore(rootReducer, 
  loadFromLocalStorage(), 
  applyMiddleware(sagaAuthMiddleware, sagaRegMiddleware, saveCardMiddleware))


sagaAuthMiddleware.run(authSaga)
sagaAuthMiddleware.run(regSaga)


store.subscribe(() => saveToLoсalStorage(store.getState()))