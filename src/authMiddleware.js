import { AUTHENTICATE, logIn } from "./action"
import { serverLogin } from "./api"

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const {email, password} = action.payload
    const success = await serverLogin(email, password)
    if(success) {
      store.dispatch(logIn())
    }
  } else {
    next(action)
  }
}