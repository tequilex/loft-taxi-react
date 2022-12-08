import CardData from './card'
import { SAVE_CARD } from '../actions/actionCard'

describe('CardData', () => {
  let action
  const initialState = {
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvc: ''
    
  }

  test('Should return default state if no action type', () => {
    expect(CardData({}, {type: null})).toEqual({})
  });

  test('Should successfully saved card data', () => {
    action = {
      type: SAVE_CARD,
      payload: {
        cardName: 'Name', 
        cardNumber: '1234 1234 1234 1234', 
        expiryDate: '01/28', 
        cvc: '123'
      }
    }
    
    expect(CardData(initialState, action)).toEqual({
        cardName: '', 
        cardNumber: '', 
        expiryDate: '', 
        cvc: ''
      }
    )
  })
})