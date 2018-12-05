import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import io from 'socket.io-client'
import API_BASE_URL from './apiConfig.js'
import axios from 'axios'


class Chatroom extends Component {
  constructor (props) {
    super(props)

    this.state = {
      chatroom: []
    }
  }


  async componentDidMount() {
    //const response = await axios.get(`${constants.API_BASE_URL}/chatroom/${this.props.match.params.id}`)
    const response = await axios.get('http://localhost:4741/chatroom')
    this.setState({movie: response.data.chatroom})
  }

  render() {

    const {chatroom} = this.state

    return (
      <React.Fragment>
        <h1>Chatroom name: {chatroom.title}</h1>

        <p>Max Number of users: {chatroom.maxNumber}</p>
      </React.Fragment>
    )
  }
}

export default withRouter(Chatroom)
