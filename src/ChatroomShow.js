import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import API_BASE_URL from './apiConfig.js'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Layout from './Layout'

import ChatMessage from './components/ChatMessage'
import MessageSignUp from './components/MessageSignUp'

import { default as Chatkit } from '@pusher/chatkit-server'

const chatkit = new Chatkit({
  instanceLocator: 'v1:us1:f0038197-834d-4251-b82b-09a876dd2bd8',
  key: 'a7c6d4ea-fb04-4804-ae82-c8c406ba5068:JbuFK0SJEZe5P1k0GPKPqkpHArqyux2w8dsLRWQN5nc='
})

class ChatroomShow extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: props.user,
      // currentView: 'ChatMessage',
      currentUsername: '',
      currentId: '',
      currentView: 'signup'
    }
    this.changeView = this.changeView.bind(this)
    this.createUser = this.createUser.bind(this)
  }

  createUser(username) {
    chatkit.createUser({
      id: username,
      name: username
    })
      .then((currentUser) => {
        this.setState({
          currentUsername: username,
          currentId: username,
          currentView: 'chatApp'
        })
      }).catch((err) => {
        if(err.status === 400) {
          this.setState({
            currentUser: username,
            currentId: username,
            currentView: 'chatApp'
          })
        } else {
          console.log(err.status)
        }
      })
  }

  changeView(view) {
    this.setState({
      currentView: view
    })
  }

  async componentDidMount() {
    const response = await axios.get(`${API_BASE_URL}/chatrooms/${this.props.match.params.id}`,
      { headers: {
        'Content-Type': 'application/json',
        'Authorization':`Token token=${this.state.user.token}`}
      }
    )
    // this.setState({chatrooms: response.data.chatrooms})
  }

  render() {
    let view =''
    if (this.state.currentView === 'ChatMessage') {
      // console.log('first part of if')
      view = <ChatMessage  changeView={this.changeView}/>
    } else if (this.state.currentView === 'signup') {
      // console.log('second part of if')
      view = <MessageSignUp />
    } else if (this.state.currentView === 'chatApp') {
      view = <h1>ChatApp goes here</h1>
    }

    return (
      <div className="ChatroomShow">
        {view}
      </div>
    )
  }
}


export default withRouter(ChatroomShow)
