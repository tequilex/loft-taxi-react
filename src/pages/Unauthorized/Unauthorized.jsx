import React from "react";
import Sidebar from '../../components/Sidebar/Sidebar'
import AuthForm from "../../components/AuthForm/AuthForm";
// import { WithAuth } from "../../contexts";
import { authenticate } from "../../store/action";
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import './Unauthorized.scss'

function Unauthorized(events) {
  const {authenticate} = events

  Unauthorized.propTypes = {
    authenticate: PropTypes.func.isRequired
  }

  function send(e) {
    authenticate(e.email, e.password).catch(e => {alert('Проверь логин и пароль')})
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

export default connect(
  (state) => ({isLoggedIn: state.AuthReducer.isLoggedIn}),
  {authenticate}
)(Unauthorized)