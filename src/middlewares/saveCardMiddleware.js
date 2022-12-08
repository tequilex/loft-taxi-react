import { showCardData } from "../store/actions/actionCard";
import { serverSaveCard } from "../api";
import { SAVE_CARD } from "../store/actions/actionCard";

export const saveCardMiddleware = (store) => (next) => async (action) => {
  if (action.type === SAVE_CARD) {
    const {
      cardNumber,
      cardName,
      expiryDate,
      cvc,
      token
    } = action.payload

    const succes = await serverSaveCard({
      cardNumber,
      cardName,
      expiryDate,
      cvc,
      token
    });

    if (succes) {
      store.dispatch(showCardData({
        cardNumber,
        cardName,
        expiryDate,
        cvc
      }))
    }
  } else {
    next(action)
  }
}