import React from "react";
import './App.scss';
import Authorized from './pages/Authorized/Authorized';
import Unauthorized from './pages/Unauthorized/Unauthorized';
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { Route, Switch } from 'react-router-dom'
// import {WithAuth} from './contexts'



function App(props) {
  const {isLoggedIn} = props

  App.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
  }
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
  (state) => ({isLoggedIn: state.AuthReducer.isLoggedIn})
)(App) 
