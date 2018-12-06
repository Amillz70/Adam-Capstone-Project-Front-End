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

  // async componentDidMount() {
  //   // console.log(params._id)
  //   // const { id } = this.props.match.params._id
  //
  //   const response = await axios.get(`${API_BASE_URL}/chatrooms/${id}`)
  //   this.setState({chatroom: response.data.chatroom})
  // }

   handleChange = (event) => {
     const editedChatroom = {...this.state.chatroom, [event.target.name]: event.target.value}
     this.setState({chatroom: editedChatroom})
   }

   handleSubmit = async (event, user) => {
     // const { id } = this.props.match.params._id
     event.preventDefault()

     const chatroomParams = JSON.stringify({chatroom: this.state.chatroom})
     await axios.put(`${API_BASE_URL}/chatrooms/${this.props.match.params._id}`, chatroomParams)

     this.props.history.push(`/chatrooms/${this.state.chatroom._id}/show`)
   }

   render() {
     const { chatroom } = this.state
     return (
       <React.Fragment>
         <h1>Edit Chatroom</h1>
         <p><input type="text" name="title" value={chatroom.title} onChange={this.handleChange} /></p>
         <p><input type="number" name="maxNumber" value={chatroom.director} onChange={this.handleChange} /></p>
         <p><input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event, user)} /></p>
       </React.Fragment>
     )
   }
}

export default ChatroomEdit
