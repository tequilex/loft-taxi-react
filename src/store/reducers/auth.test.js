import auth from './auth'
import { logIn, logOut } from '../actions/actionAuth'

describe("auth", () => {
  describe("#LOG_IN", () => {
    it('return isLoggedIn true', () => {
      expect(auth({}, logIn())).toEqual({isLoggedIn: true})
    })
  })

  describe("#LOG_OUT", () => {
    it('return isLoggedIn false', () => {
      expect(auth({}, logOut())).toEqual({isLoggedIn: false})
    })
  })
})