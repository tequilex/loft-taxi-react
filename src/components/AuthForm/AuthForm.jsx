import React, {useState} from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import PropTypes from "prop-types"
import {Route, Switch} from 'react-router-dom'

function AuthForm(events) {
  const {formSend} = events
  const [isSignIn, setSignIn] = useState(true)

  AuthForm.propTypes = {
    formSend: PropTypes.func.isRequired
  }

  function send(e){
    e.preventDefault();
    let send_obj = { sendType: isSignIn ? 'SignIn' : 'SignUp', };
    e.target.querySelectorAll('input').forEach(el => send_obj[el.name] = el.value);

    (typeof formSend === 'function') && formSend(send_obj);
  }

  return (<>
  <form className="AuthForm" onSubmit={send}>
    <Switch>
      <Route path='/signup' component={SignUp} />
      <Route path='*' component={SignIn} />
    </Switch>
  </form>
  </>)
}

export default AuthForm