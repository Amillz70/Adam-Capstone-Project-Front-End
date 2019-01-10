import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import API_BASE_URL from './apiConfig.js'
import axios from 'axios'


class ChatroomNew extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: props.user,
      chatroom: {
        title: '',
        maxNumber:''
      },
      flashMessage: ''
    }
    this.chatroom = this.state.chatroom
  }

  handleChange = (event) => {
    const newRoom = {...this.state.chatroom, [event.target.name]: event.target.value}
    this.setState({chatroom: newRoom})
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    // const roomParams = JSON.stringify({chatroom: this.state.chatroom})
    const response = await axios.post(`${API_BASE_URL}/chatrooms`, { chatroom: this.state.chatroom },
      { headers: {
        'Content-Type': 'application/json',
        'Authorization':`Token token=${this.state.user.token}`}
      }
    )

    this.props.history.push('/chatrooms')


  }



  render(){

    const {chatroom} = this.state

    return (

      <React.Fragment>
        <h1>Add Chatroom</h1>
        <p><input type="text" name="title" value={chatroom.title} onChange={this.handleChange} placeholder="Room Title" /></p>
        <p><input type="number" name="maxNumber" value={chatroom.maxNumber} onChange={this.handleChange} placeholder="Number of Users" /></p>
        <p><input type="submit" value="Submit" onClick={this.handleSubmit} /></p>
      </React.Fragment>
    )
  }
}



export default withRouter(ChatroomNew)
