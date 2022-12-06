import React from "react";
import Button from '../UI/Button/Button'
import './Forms.scss'
// import PropTypes from "prop-types"
import {Link} from 'react-router-dom'

function SignUp(events) {

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
      <span className="changeForm">Уже зарегестрированы? <Link to='/'>Войти</Link></span>
    </div>
  </>)
}


export default SignUp