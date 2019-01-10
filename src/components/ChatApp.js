import React, {Component} from 'react'

import { ChatManager, TokenProvider } from '@pusher/chatkit-client'
import Input from './Input'

class ChatApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      currentRoom: {users:[]},
      messages: [],
      users: []
    }
    this.addMessage = this.addMessage.bind(this)
  }

  componentDidMount() {
    const chatManager = new ChatManager({
      instanceLocator: 'v1:us1:f0038197-834d-4251-b82b-09a876dd2bd8',
      userId: this.props.currentId,
      tokenProvider: new TokenProvider({
        url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/f0038197-834d-4251-b82b-09a876dd2bd8/token'
      })
    })

    chatManager
      .connect()
      .then(currentUser => {
        this.setState({ currentUser: currentUser })
        return currentUser.subscribeToRoom({
          roomId: '19377336',
          messageLimit: 100,
          hooks: {
            onMessage: message => {
              this.setState({
                messages: [...this.state.messages, message],
              })
            },
          }
        })
      })
      .then(currentRoom => {
        this.setState({
          currentRoom,
          users: currentRoom.userIds
        })
      })
      .catch(error => console.log(error))
  }

  addMessage(text) {
    this.state.currentUser.sendMessage({
      text,
      roomId: this.state.currentRoom.id
    })
      .catch(error => console.error('error', error))
  }

  render() {
    return (
      <div className="chatapp">
        <h2 className="header">Lets Chat</h2>
        <Input className="input-field" onSubmit={this.addMessage} />
      </div>
    )
  }
}

export default ChatApp
