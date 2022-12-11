export const REGISTRATION = 'REGISTRATION'

export const reg = (email, password, name, surname) => ({
  type: REGISTRATION,
  payload: {
    email,
    password,
    name,
    surname
  }
})