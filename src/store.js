import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { authMiddleware } from './authMiddleware'
import {saveCardMiddleware} from './saveCardMiddleware'

function saveToLosalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state)
    console.log(serialisedState)
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


export const store = createStore(rootReducer, loadFromLocalStorage(), applyMiddleware(authMiddleware, saveCardMiddleware))

store.subscribe(() => saveToLosalStorage(store.getState()))