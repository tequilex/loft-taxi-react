import React from "react";
import Button from '../UI/Button/Button'
import './Forms.scss'
import PropTypes from "prop-types"

function SignUp(events) {
  const {changeSign} = events

  SignUp.propTypes = {
    changeSign: PropTypes.func.isRequired
  }

  return (<>
    <div className="AuthForm__container">
      <div className="title__form">Регистрация</div>
      <label data-name="input">
        <div className="title">Email*</div>
        <input 
        type="email"
        name="email"
        placeholder="mail@mail.ru" 
        />
      </label>
      <label data-name="input">
        <div className="title">Как вас зовут?*</div>
        <input 
        type="text" 
        name="username"
        placeholder="Петр Александрович"
        />
      </label>
      <label data-name="input">
        <div className="title">Придумайте пароль*</div>
        <input 
        type="password" 
        name="password"
        placeholder="*************"
        />
      </label>
      <Button type="submit">Зарегистрироваться</Button>
      <span className="changeForm" onClick={changeSign}>Уже зарегестрированы? <span>Войти</span></span>
    </div>
  </>)
}


export default SignUp