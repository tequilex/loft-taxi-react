import logo from '../../assets/img/logo.svg'
import {Link} from 'react-router-dom'
import './Header.scss'
import PropTypes from 'prop-types'
import { useState } from 'react'

function Header(events) {
  const {clickNavItem} = events
  const [isActive, setIsActive] = useState('')
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const updateMenu = () => {
    if(!isMenuClicked) {
      setIsActive('active-nav')
      setIsMenuClicked(!isMenuClicked)
    } else {
      setIsActive('')
      setIsMenuClicked(!isMenuClicked)
    }
  }

  const activeHandler = () => {
    setIsActive('')
    setIsMenuClicked(false)
  }

  console.log(isMenuClicked);

  Header.propTypes = {
    clickNavItem: PropTypes.func.isRequired
  }

  const navList = [
    {name: 'map', value: 'Карта', to: '/'},
    {name: 'profile', value: 'Профиль', to: '/profile'},
    {name: 'out', value: 'Выйти', to: '/'}
  ]


  return (<>
    <div className={`header ${isActive}`}>
      <div className="logo">
        <img alt="logo" src={logo} />
      </div>
      <div className="navigation">
        <ul className="nav-list">
          {navList.map((el, i) => (
            <Link to={el.to}
            key={i}
            className="nav-item"
            onClick={() => {clickNavItem(el); activeHandler()}}
            >{el.value}</Link>
          ))}
        </ul>
      </div>

      <div onClick={updateMenu} className="burger__button">&#10005;</div>
    </div>
    </>
    )
}

export default Header