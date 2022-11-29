import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Map from "../../components/Map/Map";
import Profile from "../../components/Profile/Profile";
import {WithAuth} from '../../contexts'
import PropTypes from 'prop-types'
import './Authorized.scss'

function Authorized(events) {
  const {logOut} = events
  const [content, setContent] = useState('map')

  Authorized.propTypes = {
    logOut: PropTypes.func.isRequired
  }

  const pages = {
    map: <Map />,
    profile: <Profile />
  }

  function clickNavItemFunc(e) {
    if (e.name === 'out') logOut()
    setContent(e.name)
  }

  return (<>
    <div className="Authorized">
      <Header clickNavItem={clickNavItemFunc}/>
      <div className="authorized-content">
        {pages[content]}
      </div>
    </div>
  </>)
}

export default WithAuth(Authorized) 