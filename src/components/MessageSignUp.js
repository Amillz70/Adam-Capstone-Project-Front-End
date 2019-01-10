import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'

class MessageSignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({username: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.onSubmit(this.state.username)
  }

  render() {
    return(
      <div className="form-container">
        <h1>Lets Chat</h1>
        <form onSubmit={this.handleSubmit} className="form">
          <label htmlFor="email">What is your name?</label>
          <input type="email" name="username" onChange={this.handleChange} className="input" />
          <button className="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default withRouter(MessageSignUp)
