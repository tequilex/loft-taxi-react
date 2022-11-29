import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

function Button(events) {
  const {type='button', children} = events

  Button.propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
  }

  return(
    <button type={type} className="button">{children}</button>
  )
}

export default Button