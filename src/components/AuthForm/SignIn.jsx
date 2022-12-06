import React from "react";
import Button from '../UI/Button/Button'
import './Forms.scss'
// import PropTypes from "prop-types"
import {Link} from 'react-router-dom'

function SignIn(events) {

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
      <span className="changeForm">Новый пользователь? <Link to='/signup'>Регистрация</Link></span>
    </div>
  </>)
}

export default SignIn