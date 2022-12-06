export const serverLogin = async (email, password) => {
  return fetch(
    'https://loft-taxi.glitch.me/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    }
  )
  .then(res => res.json())
  .then(answer => answer.success)
}

export const serverSaveCard = async (cardNumber, cardName, expiryDate, cvc, token) => {
  return fetch(
    'https://loft-taxi.glitch.me/card', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ cardNumber, cardName, expiryDate, cvc, token })
    }
  )
  .then(res => res.json())
  .then(answer => answer.success)
}