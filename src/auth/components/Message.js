import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// import { signIn } from '../api'
import messages from '../messages'
// import apiUrl from '../../apiConfig'

class Message extends Component {
  // constructor () {
  //   super()
  //
  //   this.state = {
  //     name: '',
  //     message: '',
  //   }
  // }

  // handleChange = event => this.setState({
  //   [event.target.name]: event.target.value
  // })
  //
  // Message = event => {
  //   event.preventDefault()
  //
  //   const { name, message } = this.state
  //   const { flash, history, setUser } = this.props
  //
  //   Message(this.state)
  //     .then(res => res.ok ? res : new Error())
  //     .then(res => res.json())
  //     .then(res => setUser(res.user))
  //     .then(() => flash(messages.signInSuccess, 'flash-success'))
  //     .then(() => history.push('/'))
  //     .catch(() => flash(messages.signInFailure, 'flash-error'))
  // }

  render () {
    // const { name, message } = this.state
    const styles = {
      container: {
        overflowY: 'scroll',
        flex: 1,
      },
      ul: {
        listStyle: 'none',
      },
      li: {
        marginTop: 13,
        marginBottom: 13,
      },
      senderUsername: {
        fontWeight: 'bold',
      },
      message: { fontSize: 15 },
    }

    return (
      <div
        style={{
          ...this.props.style,
          ...styles.container,
        }}
      >
        <ul style={styles.ul}>
          {this.props.messages.map((message, index) => (
            <li key={index} style={styles.li}>
              <div>
                <span style={styles.senderUsername}>{message.senderId}</span>{' '}
              </div>
              <p style={styles.message}>{message.text}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default withRouter(Message)
