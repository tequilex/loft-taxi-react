import React from "react";
import './App.scss';
import Authorized from './pages/Authorized/Authorized';
import Unauthorized from './pages/Unauthorized/Unauthorized';
import PropTypes from 'prop-types'
import {WithAuth} from './contexts'
// import Login from './pages/Login/Login';
// import Register from './pages/Register/Register';
// import Main from './pages/Main/Main';
// import Profile from './pages/Profile/Profile';


function App(props) {
  const {isLoggedIn} = props

  App.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
  }

  // {const pages = {
  //   login: <Login onNavigate={navigateTo} />,
  //   register: <Register onNavigate={navigateTo} />,
  //   main: <Main onNavigate={navigateTo} />,
  //   profile: <Profile onNavigate={navigateTo} />
  // }}

  return (
    <div className="wrapper">
      {
        isLoggedIn 
        ? <Authorized />
        : <Unauthorized />
      }
    </div>
  )
}

export default WithAuth(App) 
