import React, {useState} from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import PropTypes from "prop-types"

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
    {
    isSignIn
    ? <SignIn changeSign={() => setSignIn(prev => !prev)} /> 
    : <SignUp changeSign={() => setSignIn(prev => !prev)} />}
  </form>
  </>)
}

export default AuthForm