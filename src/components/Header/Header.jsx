import logo from './logo.svg'
import './Header.css'

function Header({onNavigate}) {

  const navigateTo = (page) => () => onNavigate(page)

  return (
    <div className="header">
      <div className="logo">
        <img alt="logo" src={logo} />
      </div>
      <div className="navigation">
        <ul className="nav-list">
          <li className="nav-item">
            <button className="nav-button" onClick={navigateTo('main')}>
              <span className="nav-item-text">Карта</span>
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-button" onClick={navigateTo('profile')}>
              <span className="nav-item-text">Профиль</span>
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-button" onClick={navigateTo('login')}>
              <span className="nav-item-text">Выйти</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header