import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import io from 'socket.io-client'
import API_BASE_URL from './apiConfig.js'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Layout from './Layout'


class ChatroomShow extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: props.user,
      chatroom: {
        title: '',
        maxNumber:''
      },
    // this.chatroom = this.state.chatroom
    }
  }


  async componentDidMount() {
    const response = await axios.get(`${API_BASE_URL}/chatrooms/${this.props.match.params._id}`,
      { headers: {
        'Content-Type': 'application/json',
        'Authorization':`Token token=${this.state.user.token}`}
      }
    )
    this.setState({chatrooms: response.data.chatrooms})
  }

  render() {

    const {chatroom} = this.state

    return (
      <React.Fragment>
        <Layout>
          <h1>Select a Chatroom: {chatroom.title}</h1>

          <p>Max Number of users: {chatroom.maxNumber}</p>
        </Layout>
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
