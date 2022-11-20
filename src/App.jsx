import React from 'react';
import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Main from './pages/Main/Main';
import Profile from './pages/Profile/Profile';


function App() {
  const [currentPage, SetCurrentPage] = React.useState('login')

  const navigateTo = (page) => {
    SetCurrentPage(page)
  }

  const pages = {
    login: <Login onNavigate={navigateTo} />,
    register: <Register onNavigate={navigateTo} />,
    main: <Main onNavigate={navigateTo} />,
    profile: <Profile onNavigate={navigateTo} />
  }

  return pages[currentPage]
}

export default App;
