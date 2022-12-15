export const GET_ADDRESSES = 'GET_ADDRESSES'
export const GET_ADDRESSES_STATE = 'GET_ADDRESSES_STATE'

export const getAddresses = () => ({type: 'GET_ADDRESSES'})
export const getAddressesState = (addresses) => ({
  type: GET_ADDRESSES_STATE,
  payload: addresses
})
