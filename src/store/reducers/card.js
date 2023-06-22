import {SHOW_CARD_DATA} from '../../store/actions/actionCard'

const initialState = {
  cardName: undefined,
  cardNumber: undefined,
  expiryDate: undefined,
  cvc: undefined
}

export default function CardData(state = initialState, action) {
  switch(action.type) {
    case SHOW_CARD_DATA: {
      return {
        cardName: action.payload.cardNumber,
        cardNumber: action.payload.cardName,
        expiryDate: action.payload.expiryDate,
        cvc: action.payload.cvc
      }
    }
    default: {
      return state
    }
  }
}