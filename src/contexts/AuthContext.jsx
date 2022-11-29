import React, {createContext, useState} from "react"

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const [isLoggedIn, setLoggedIn] = useState(false)

  const logIn = (email, password) => new Promise((resolve, reject) => {
    if(email !== 'valid@mail.ru' || password !== '12345') return reject('fail')

    resolve('succes')
    setLoggedIn(true)
  })

  const logOut = () => setLoggedIn(false)

  const providerValues = {
    isLoggedIn, logOut, logIn
  }

  return (
  <>
    <AuthContext.Provider value={providerValues}>
      {children}
    </AuthContext.Provider>
  </>)
}

export const WithAuth = (WrapComponent) => {
  return class extends React.Component {
    render() {
      return (
        <AuthContext.Consumer>
          {(value) => <WrapComponent {...value} {...this.props}/>}
        </AuthContext.Consumer>
      )
    }
  }
}