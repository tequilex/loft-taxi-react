import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Button from '../../components/UI/Button/Button'
import './Login.css'



function Login({ onNavigate }) {

  const navigateTo = (page) => () => onNavigate(page)

  const routeBtn = (e) => {
    e.preventDefault()
    onNavigate('main')
  }

  return (
    <div className="wrapper">
      <Sidebar />
        <div className="login">
          <form className='login__form' onSubmit={routeBtn}>
            <div className='login__form-title'>Войти</div>
            <label className='email'>
              <span>Email*</span>
              <input></input>
            </label>
            <label className='pass'>
              <span>Пароль</span>
              <input></input>
            </label>
            <span className='form__help'>Забыли пароль?</span>
            <Button type="submit" />
            <div className='form__to-reg'>
              Новый пользователь? <span className='link' onClick={navigateTo('register')}>Регистрация</span>
              </div>
          </form>
        </div>
      </div>
  )
}

export default Login