import logo from '../../assets/img/logo.svg'
import './Header.scss'
import PropTypes from 'prop-types'

function Header(events) {
  const {clickNavItem} = events

  Header.propTypes = {
    clickNavItem: PropTypes.func.isRequired
  }

  const navList = [
    {name: 'map', value: 'Карта'},
    {name: 'profile', value: 'Профиль'},
    {name: 'out', value: 'Выйти'}
  ]


  return (
    <div className="header">
      <div className="logo">
        <img alt="logo" src={logo} />
      </div>
      <div className="navigation">
        <ul className="nav-list">
          {navList.map((el, i) => (
            <li
            key={i}
            className="nav-item"
            onClick={() => clickNavItem(el)}
            >{el.value}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Header