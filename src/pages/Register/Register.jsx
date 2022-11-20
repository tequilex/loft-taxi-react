import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Button from '../../components/UI/Button/Button'
import './Register.css'

function Register({ onNavigate }) {

  const navigateTo = (page) => () => onNavigate(page)

  const routeBtn = (e) => {
    e.preventDefault()
    onNavigate('main')
  }

  return (
    <div className="wrapper">
      <Sidebar />
        <div className="register">
          <form className='register__form' onSubmit={routeBtn} >
            <div className='register__form-title'>Регистрация</div>
            <label className='email'>
              <span>Email*</span>
              <input></input>
            </label>
            <label className='name'>
              <span>Как вас зовут?</span>
              <input></input>
            </label>
            <label className='pass'>
              <span>Придумайте пароль*</span>
              <input></input>
            </label>
            <Button type="submit" />
            <div className='form__to-login'>
              Уже зарегестрированы? <span className='link' onClick={navigateTo('login')}>Войти</span>
              </div>
          </form>
        </div>
      </div>
  )
}

export default Register