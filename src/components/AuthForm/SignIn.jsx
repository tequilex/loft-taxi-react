import React from "react";
import Button from '../UI/Button/Button'
import './Forms.scss'
import PropTypes from "prop-types"

function SignIn(events) {
  const {changeSign} = events

  SignIn.propTypes = {
    changeSign: PropTypes.func.isRequired
  }

  return (<>
    <div className="AuthForm__container">
      <div className="title__form">Войти</div>
      <label data-name="input">
        <div className="title">Email</div>
        <input 
        type="email"
        name="email"
        placeholder="mail@mail.ru" 
        />
      </label>
      <label data-name="input">
        <div className="title">Пароль</div>
        <input 
        type="password" 
        name="password"
        placeholder="*************"
        />
      </label>
      <span className="forgot-pass">Забыли пароль?</span>
      <Button type="submit">Войти</Button>
      <span className="changeForm" onClick={changeSign}>Новый пользователь? <span>Регистрация</span></span>
    </div>
  </>)
}

export default SignIn