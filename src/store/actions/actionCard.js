export const SAVE_CARD = 'SAVE_CARD'
export const SHOW_CARD_DATA = 'SHOW_CARD_DATA'

export const showCardData = (data) => ({
  type: SHOW_CARD_DATA,
  payload: {
    cardNumber: data.cardNumber,
    cardName: data.cardName,
    cvc: data.cvc,
    expiryDate: data.expiryDate
  }
})

export const saveCard = (cardNumber, cardName, expiryDate, cvc) => ({
  type: SAVE_CARD,
  payload: {
    cardNumber,
    cardName,
    expiryDate,
    cvc,
    token: "AUTH_TOKEN"
  }
})