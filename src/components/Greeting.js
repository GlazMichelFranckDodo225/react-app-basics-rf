import { Component } from 'react'

class Greeting extends Component {
  render() {
    return <h1>Welcome {this.props.firstName} {this.props.lastName}</h1>
  }
}

export default Greeting