import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import API_BASE_URL from './apiConfig.js'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Layout from './Layout'


class Chatroom extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      user: props.user,
      chatrooms: []
    }
    // this.chatroom = this.state.chatroom
  }

  // onGetChatroom() {
  //
  // }

  async componentDidMount() {

  //   const response = await axios({method: 'get',
  //     url: `${API_BASE_URL}/chatrooms`,
  //     //  data: chatroomParams,
  //     headers: {
  //       // 'Content-Type': 'application/json',
  //       'Authorization':`Token token=${this.state.user.token}`
  //     }
  //   }
  //   )
  // }

    const response = await axios.get(`${API_BASE_URL}/chatrooms`,
      { headers: {
        'Content-Type': 'application/json',
        'Authorization':`Token token=${this.state.user.token}`}
      }
    )
    // console.log()
    this.setState({chatrooms: response.data.chatrooms})
  }

  async deleteChatroom(event, chatroomId) {
    event.preventDefault()

    await axios.delete(`${API_BASE_URL}/chatrooms/${chatroomId}`,
      { headers: {
        'Content-Type': 'application/json',
        'Authorization':`Token token=${this.state.user.token}`}
      }
    )
    this.setState({chatrooms: this.state.chatrooms.filter(chatroom => chatroom._id !== chatroomId)})
  }

  render() {

    const chatroomRows = this.state.chatrooms.map(chatroom => {
      return (
        <tr key={chatroom._id}>
          <td>
            <p>Chatroom Name:</p>
            <Link to={`/chatrooms/${chatroom._id}`}>{chatroom.title}</Link>
            <p>Max users:</p>
            <h6>{chatroom.maxNumber}</h6>
            <br />
          </td>

          <td>
            <Link to={`/chatrooms/${chatroom._id}/edit`}>update</Link> | <a href="" onClick={(event) => this.deleteChatroom(event, chatroom._id)}>delete</a>
          </td>
        </tr>
      )
    })
    return (
      <React.Fragment>
        <Layout>
          <h1>Chatrooms</h1>

          <table>
            <tbody>

              {chatroomRows}

            </tbody>
          </table>
        </Layout>
      </React.Fragment>
    )
  }
}

export default withRouter(Chatroom)
