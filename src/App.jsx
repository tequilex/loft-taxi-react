import React from "react";
import './App.scss';
import Authorized from './pages/Authorized/Authorized';
import Unauthorized from './pages/Unauthorized/Unauthorized';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
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
        ? <Authorized />
        : <Unauthorized />
      }
    </div>
  )
}

export default connect(
  (state) => ({isLoggedIn: state.AuthReducer.isLoggedIn})
)(App) 
