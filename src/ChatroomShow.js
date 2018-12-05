import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import io from 'socket.io-client'
import API_BASE_URL from './apiConfig.js'
import axios from 'axios'
import { Link } from 'react-router-dom'


class ChatroomShow extends Component {
  constructor (props) {
    super(props)

    this.state = {
      chatrooms: []
    }
  }


  async componentDidMount() {
    // const response = await axios.get(`${constants.API_BASE_URL}/chatroom/${this.props.match.params.id}`)
    const response = await axios.get('http://localhost:4741/chatroom')
    this.setState({chatrooms: response.data.chatrooms})
  }

  render() {

    const {chatroom} = this.state

    return (
      <React.Fragment>
        <h1>Select a Chatroom: {this.state.chatroom}</h1>

        <p>Max Number of users: {this.state.chatroom}</p>
      </React.Fragment>
    )
  }
}
//     const chatroomRows = this.state.chatrooms.map(chatroom => {
//       return (
//         <tr key={chatroom.id}>
//           <td>
//             <Link to={`/chatrooms/${chatroom.id}/show`}>{chatroom.title}</Link></td>
//         </tr>
//       )
//     })
//     return (
//       <React.Fragment>
//         <h1>Chatrooms</h1>
//
//         <table>
//           <tbody>
//             {chatroomRows}
//           </tbody>
//         </table>
//       </React.Fragment>
//     )
//   }
// }

export default withRouter(ChatroomShow)
