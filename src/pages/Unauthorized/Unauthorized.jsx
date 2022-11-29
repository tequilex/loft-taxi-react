import React from "react";
import Sidebar from '../../components/Sidebar/Sidebar'
import AuthForm from "../../components/AuthForm/AuthForm";
import { WithAuth } from "../../contexts";
import PropTypes from 'prop-types'
import './Unauthorized.scss'

function Unauthorized(events) {
  const {logIn} = events

  Unauthorized.propTypes = {
    logIn: PropTypes.func.isRequired
  }

  function send(e) {
    logIn(e.email, e.password).catch(e => {alert('Проверь логин и пароль')})
  }

  return (<>
    <div className="Unauthorized">
      <Sidebar />
      <div className="Unauthorized__block">
        <AuthForm formSend={send} />
      </div>
    </div>
  </>)
}

export default WithAuth(Unauthorized)