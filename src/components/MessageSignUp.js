import React, {Component} from 'react'
// import { withRouter } from 'react-router-dom'

class MessageSignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
    }
    //   this.onSubmit = this.onSubmit.bind(this)
    //   this.onChange = this.onChange.bind(this)
    // }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({username: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault()
    console.log(this.props.onSubmit)
    this.props.onSubmit(this.state.username)
    this.setState({ username: '' })
  }

  // onSubmit(event) {
  //   event.preventDefault()
  //   this.props.onSubmit(this.state.username)
  //   this.setState({ username: '' })
  // }
  //
  // onChange(event) {
  //   this.setState({ username: event.target.value })
  //   if (this.props.onChange) {
  //     this.props.onChange()
  //   }
  // }

  render() {
    return(
      <div className="form-container">
        <h1>Lets Chat</h1>
        <form onSubmit={this.handleSubmit} className="form">
          <label htmlFor="text">What is your name?</label>
          <input type="text" name="username" onChange={this.handleChange} className="input" />
          <button className="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default MessageSignUp
