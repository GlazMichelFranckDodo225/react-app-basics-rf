/* function Welcome() {
  return <h1>Welcome, Glaz</h1>
}

export default Welcome */

import React from 'react'

const Welcome = (props) => {
    return <h1>Welcome, {props.firstName} {props.lastName} !</h1>
}

export default Welcome
