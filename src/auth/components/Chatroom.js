import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import Message from './components/Message'

// import { signIn } from '../api'
import messages from '../messages'
// import apiUrl from '../../apiConfig'

class Chatroom extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      message: '',
      currentRoom: ''
    }
  }



    // handleChange = event => this.setState({
    //   [event.target.name]: event.target.value
    // })

    Chatroom = event => {
      event.preventDefault()

      const { name, message } = this.state
      const { flash, history, setUser } = this.props

      Chatroom(this.state)
        .then(res => res.ok ? res : new Error())
        .then(res => res.json())
        .then(res => setUser(res.user))
        .then(() => flash(messages.signInSuccess, 'flash-success'))
        .then(() => history.push('/'))
        .catch(() => flash(messages.signInFailure, 'flash-error'))
    }

    // componentDidMount () {
    //   const chatManager = new Chatkit.ChatManager({
    //     instanceLocator: 'YOUR INSTANCE LOCATOR',
    //     userId: this.props.currentUsername,
    //     tokenProvider: new Chatkit.TokenProvider({
    //       url: 'http://localhost:7165/chatroom',
    //     }),
    //   })

  //   chatManager
  //     .connect()
  //     .then(currentUser => {
  //       this.setState({ currentUser })
  //       return currentUser.subscribeToRoom({
  //         roomId: 'YOUR ROOM ID',
  //         messageLimit: 100,
  //         hooks: {
  //           onMessage: message => {
  //             this.setState({
  //               messages: [...this.state.messages, message],
  //             })
  //           },
  //         },
  //       })
  //     })
  //     .then(currentRoom => {
  //       this.setState({ currentRoom })
  //     })
  //     .catch(error => console.error('error', error))
  // }

    render () {
    // const { name, message } = this.state
      const styles = {
        container: {
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        },
        chatContainer: {
          display: 'flex',
          flex: 1,
        },
        whosOnlineListContainer: {
          width: '300px',
          flex: 'none',
          padding: 20,
          backgroundColor: '#2c303b',
          color: 'white',
        },
        chatListContainer: {
          padding: 20,
          width: '85%',
          display: 'flex',
          flexDirection: 'column',
        },
      }

      return (
        <div style={styles.container}>
          <div style={styles.chatContainer}>
            <aside style={styles.whosOnlineListContainer}>
              <h2>PLACEHOLDER</h2>
            </aside>
            <section style={styles.chatListContainer}>
              <h2>Chat PLACEHOLDER</h2>
            </section>
          </div>
        </div>
      )
    }
}


export default withRouter(Chatroom)
