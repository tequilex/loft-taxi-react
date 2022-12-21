import React from "react";
import Button from '../UI/Button/Button'
import './Forms.scss'
// import PropTypes from "prop-types"
import {Link} from 'react-router-dom'
import { Field, ErrorMessage } from "formik"

function SignUp(events) {

  return (<>
    <div className="AuthForm__container">
      <div className="title__form">Регистрация</div>
      <label data-name="input">
        <div className="title">Email*</div>
        <Field 
        type="email"
        name="email"
        placeholder="mail@mail.ru" 
        />
        <ErrorMessage name="email"/>
      </label>
      <label data-name="input">
        <div className="title">Как вас зовут?*</div>
        <Field 
        type="text" 
        name="userName"
        placeholder="Петр Александрович"
        />
        <ErrorMessage name="userName"/>
      </label>
      <label data-name="input">
        <div className="title">Придумайте пароль*</div>
        <Field 
        type="password" 
        name="password"
        placeholder="*************"
        />
        <ErrorMessage name="password"/>
      </label>
      <Button type="submit">Зарегистрироваться</Button>
      <span className="changeForm">Уже зарегестрированы? <Link to='/'>Войти</Link></span>
    </div>
  </>)
}


export default SignUp