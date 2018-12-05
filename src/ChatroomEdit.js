import React from 'react'
import axios from 'axios'
import io from 'socket.io-client'
import API_BASE_URL from './apiConfig.js'




class ChatroomEdit extends React.Component {
  constructor(props) {
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

  async componentDidMount() {
    const response = await axios.get(`${API_BASE_URL}/chatrooms/${this.props.match.params.id}`)
    this.setState({chatroom: response.data.chatroom})
  }

   handleChange = (event) => {
     const editedChatroom = {...this.state.chatroom, [event.target.name]: event.target.value}
     this.setState({chatroom: editedChatroom})
   }

   handleSubmit = async (event) => {
     event.preventDefault()

     const chatroomParams = JSON.stringify({chatroom: this.state.chatroom})
     await axios.put(`${constants.API_BASE_URL}/chatrooms/${this.props.match.params.id}`, chatroomParams)

     this.props.history.push(`/chatrooms/${this.state.chatroom.id}/show`)
   }

   render() {
     const { chatroom } = this.state
     return (
       <React.Fragment>
         <h1>Edit Chatroom</h1>
         <p><input type="text" name="title" value={chatroom.title} onChange={this.handleChange} /></p>
         <p><input type="number" name="maxNumber" value={chatroom.director} onChange={this.handleChange} /></p>
         <p><input type="submit" value="Submit" onClick={this.handleSubmit} /></p>
       </React.Fragment>
     )
   }
}

export default ChatroomEdit
