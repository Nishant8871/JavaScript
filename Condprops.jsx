import React from 'react'
import propTypes from 'prop-types'

function Condprops(props) {
  if(props.isLoggedIn)
  {
      return <h1 style={{backgroundColor: 'green'}}>Welcome, {props.username}</h1>
  }
  else
  {
      return <h1 style={{backgroundColor:'red'}}>Please LogIn to Continue</h1>
  }
  
}

Condprops.propTypes={
  name:propTypes.string,
  isLoggedIn:propTypes.bool

}

Condprops.defaultProps={
  name:"guest",
  isLoggedIn:true
}

export default Condprops