import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import API_BASE_URL from './apiConfig.js'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Layout from './Layout'

import ChatMessage from './components/ChatMessage'

class ChatroomShow extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: props.user,
      // chatroom: {
      //   title: '',
      //   maxNumber:''
      currentView: 'ChatMessage'
    }
    this.changeView = this.changeView.bind(this)
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
      view = <ChatMessage  changeView={this.changeView}/>
    }
    return (
      <div className="App">
        {view}
      </div>
    )
  }
}


export default withRouter(ChatroomShow)
