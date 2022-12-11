import React, {useState} from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import PropTypes from "prop-types"
import { reg } from "../../store/actions";
import { connect } from "react-redux";
import {Route, Switch} from 'react-router-dom'

function AuthForm(events) {
  const {authSend, reg} = events
  const [isSignIn, setSignIn] = useState(true)

  AuthForm.propTypes = {
    authSend: PropTypes.func.isRequired
  }

  function handleSubmit(e) {
    e.preventDefault()

    const fullUserName = e.target.userName ? e.target.userName.value : null
    const userPassword = e.target.password ? e.target.password.value : null
    const userEmail = e.target.email ? e.target.email.value : null
    let name, surname

    if(fullUserName) {
      [name, surname] = fullUserName.split(' ', 2)
    }
    
    if(window.location.pathname === '/') {
      sendAuth(e)
    } else {
      reg(userEmail, userPassword, name, surname)
    }
  }
  

  function sendAuth(e) {
    e.preventDefault()
    let send_obj = { sendType: isSignIn ? 'SignIn' : 'SignUp', };
    e.target.querySelectorAll('input').forEach(el => send_obj[el.name] = el.value);

    (typeof authSend === 'function') && authSend(send_obj);
  }

  return (<>
  <form className="AuthForm" onSubmit={handleSubmit}>
    <Switch>
      <Route path='/signup' component={SignUp} />
      <Route path='*' component={SignIn} />
    </Switch>
  </form>
  </>)
}

export default connect(null, {reg})(AuthForm)