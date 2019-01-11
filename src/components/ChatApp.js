import React, {Component} from 'react'

import { ChatManager, TokenProvider } from '@pusher/chatkit-client'
import Input from './Input'
import MessageList from './MessageList'
import WhosOnlineList from './WhosOnlineList'

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
          messageLimit: 10,
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
    // const styles = {
    //   whosOnlineListContainer: {
    //     width: '100px',
    //     flex: '1',
    //     padding: 200,
    //     backgroundColor: '#2c303b',
    //     color: 'white',
    //     flexDirection: 'column',
    //
    //   }
    // }

    // <aside style={styles.whosOnlineListContainer}>

    return (
      // <React.Fragment>
      <div className="chatapp">
        <aside>
          <WhosOnlineList className="online-list"
            currentUser={this.state.currentUser}
            users={this.state.currentRoom.users}
          />
        </aside>
        <section>
          <h2 className="header">Lets Chat</h2>
          <MessageList messages={this.state.messages} />
        </section>
        <section>
          <Input className="input-field" onSubmit={this.addMessage} />
        </section>
      </div>
      // </React.Fragment>
    )
  }
}

export default ChatApp
