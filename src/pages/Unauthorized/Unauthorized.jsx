import React from "react";
import Sidebar from '../../components/Sidebar/Sidebar'
import AuthForm from "../../components/AuthForm/AuthForm";
// import { WithAuth } from "../../contexts";
import { authenticate } from "../../action";
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





{/* <div className="profile">
          <div className="profile__title">Профиль</div>
          <div className="subtitle">Введите платежные данные</div>
          <div className="profile__content">
            <div className="left-side">
              <label data-name="input">
                <div className="title">Имя владельца</div>
                <input 
                type="text"
                name="username"
                placeholder="Андрей Иванов"
                />
              </label>
              <label data-name="input">
                <div className="title">Номер карты</div>
                <input 
                type="text"
                name="number"
                placeholder="6896999"
                />
              </label>
              <label data-name="input">
                <div className="title">MM/YY</div>
                <input 
                type="text"
                name="number"
                placeholder="05/07"
                />
              </label>
              <label data-name="input">
                <div className="title">CVC</div>
                <input 
                type="text"
                name="number"
                placeholder="667"
                />
              </label>
            </div>
            <div className="right-side">
              <div className="text">{}</div>
            </div>
          </div>
          <Button type="submit">Сохранить</Button>
      </div> */}