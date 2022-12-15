import React, {useEffect} from "react";
import './App.scss';
import Authorized from './pages/Authorized/Authorized';
import Unauthorized from './pages/Unauthorized/Unauthorized';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { Route } from 'react-router-dom'
import { authenticate } from "./store/actions";
// import {WithAuth} from './contexts'



function App(props) {
  const {isLoggedIn, authenticate} = props

  App.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
  }

  useEffect(() => {
    const password = localStorage.getItem('pass')
    const email = localStorage.getItem('login')

    if(password && email) {
      authenticate(email, password)
      console.log(email, password);
    }
  }, [authenticate])

  return (
    <div className="wrapper">
      {
        isLoggedIn 
        ? <Route path='/' component={Authorized} />
        : <Route path='/' component={Unauthorized} />
      }
    </div>
  )
}

export default connect(
  (state) => ({isLoggedIn: state.AuthReducer.isLoggedIn}),
  {authenticate}
)(App) 
