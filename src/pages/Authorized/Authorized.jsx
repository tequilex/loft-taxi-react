import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Map from "../../components/Map/Map";
import Profile from "../../components/Profile/Profile";
// import {WithAuth} from '../../contexts'
import { PrivateRoute } from '../../PrivateRoute'
import { Switch, Route} from 'react-router-dom'
import { connect } from "react-redux"
import { logOut } from "../../action"
import PropTypes from 'prop-types'
import './Authorized.scss'

function Authorized(events) {
  const {logOut} = events
  const [content, setContent] = useState('map')

  Authorized.propTypes = {
    logOut: PropTypes.func.isRequired
  }

  // const pages = {
  //   profile: <Profile />
  // }

  function clickNavItemFunc(e) {
    if (e.name === 'out') logOut()
    setContent(e.name)
  }

  return (<>
    <div className="Authorized">
      <Header clickNavItem={clickNavItemFunc}/>
      <div className="authorized-content">
        <Map/>
          <Switch>
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="/" />
          </Switch>
        {/* {pages[content]}
        <div className="window-modal">
          <div className="window-modal__content">
            {pages[content]}
          </div>
        </div> */}
      </div>
    </div>
  </>)
}

export default connect(
  null,
  {logOut}
)(Authorized)