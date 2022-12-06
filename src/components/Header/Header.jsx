import logo from '../../assets/img/logo.svg'
import {Link} from 'react-router-dom'
import './Header.scss'
import PropTypes from 'prop-types'

function Header(events) {
  const {clickNavItem} = events

  Header.propTypes = {
    clickNavItem: PropTypes.func.isRequired
  }

  const navList = [
    {name: 'map', value: 'Карта', to: '/map'},
    {name: 'profile', value: 'Профиль', to: '/profile'},
    {name: 'out', value: 'Выйти', to: '/'}
  ]


  return (<>
    <div className="header">
      <div className="logo">
        <img alt="logo" src={logo} />
      </div>
      <div className="navigation">
        <ul className="nav-list">
          {navList.map((el, i) => (
            <Link to={el.to}
            key={i}
            className="nav-item"
            onClick={() => clickNavItem(el)}
            >{el.value}</Link>
          ))}
        </ul>
      </div>
    </div>
    </>
    )
}

export default Header