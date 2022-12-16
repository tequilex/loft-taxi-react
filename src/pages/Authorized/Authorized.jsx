import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Map from "../../components/Map/Map";
import OrderForm from "../../components/UI/OrderForm/OrderForm";
import Profile from "../../components/Profile/Profile";
import ModalOrderCreated from "../../components/UI/ModalOrderCreated/ModalOrderCreated";
import ModalNoCard from "../../components/UI/ModalNoCard/ModalNoCard";
// import {WithAuth} from '../../contexts'
import { PrivateRoute } from '../../components/PrivateRoute/PrivateRoute'
import { Switch, Route} from 'react-router-dom'
import { connect } from "react-redux"
import { logOut } from "../../store/actions/actionAuth"
import { clearRoute } from "../../store/actions";
import PropTypes from 'prop-types'
import './Authorized.scss'

function Authorized({route, logOut, clearRoute}) {
  const [content, setContent] = useState('map')
  const cardData = localStorage.getItem('cardData')

  Authorized.propTypes = {
    logOut: PropTypes.func.isRequired
  }

  function clear() {
    clearRoute()
  }

  function clickNavItemFunc(e) {
    if (e.name === 'out') {
      logOut()
      localStorage.clear()
    }
    setContent(e.name)
  }

  return (<>
    <div className="Authorized">
      <Header clickNavItem={clickNavItemFunc}/>
      <div className="authorized-content">
        <Map/>
        {route?.length ? <ModalOrderCreated clear={clear} /> : cardData ? <OrderForm /> : <ModalNoCard /> }
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
  (state) => ({route: state.addressReducer.route}),
  {logOut,
    clearRoute
  }
)(Authorized)