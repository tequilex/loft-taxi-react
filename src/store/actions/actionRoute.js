export const GET_ROUTE = 'GET_ROUTE'
export const SAVE_ROUTE = 'SAVE_ROUTE'
export const CLEAR_ROUTE = 'CLEAR_ROUTE'

export const getRoute = (address1, address2) => ({
  type: GET_ROUTE,
  payload: {address1, address2}
})

export const saveRoute = (addresses) => ({
  type: SAVE_ROUTE,
  payload: addresses
})

export const clearRoute = () => ({type: 'CLEAR_ROUTE'})
