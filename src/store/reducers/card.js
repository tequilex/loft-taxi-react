import {SHOW_CARD_DATA} from '../../store/actions/actionCard'

const initialState = {
  cardNumber: undefined,
  cardName: undefined,
  expiryDate: undefined,
  cvc: undefined
}

export default function CardData(state = initialState, action) {
  switch(action.type) {
    case SHOW_CARD_DATA: {
      return {
        cardNumber: action.payload.cardNumber,
        cardName: action.payload.cardName,
        expiryDate: action.payload.expiryDate,
        cvc: action.payload.cvc
      }
    }
    default: {
      return state
    }
  }
}