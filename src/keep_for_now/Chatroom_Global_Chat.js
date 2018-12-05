// import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'
// import io from 'socket.io-client'
// import API_BASE_URL from './apiConfig.js'


class Chatroom extends Component {
  constructor (props) {
    super()

    this.state = {
      chatroom: {
        title: '',
        maxNumber:''
      }
  }

  // async componentDidMount() {
  //   const id = this.props.match.params.id
  //   const response = await axios.get(`${API_BASE_URL}/chatroom/${id}`)
  //   this.setState({chatroom: response.data.chatroom})
  // }


  //   this.sendMessage = ev => {
  //     ev.preventDefault()
  //     this.socket.emit('SEND_MESSAGE', {
  //       author: this.state.username,
  //       message: this.state.message
  //     })
  //     this.setState({message: ''})
  //   }
  //   this.socket = io('localhost:7165')
  //



  render(){

    const {chatroom} = this.state

    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <div className="card-title">Global Chat</div>
                <hr/>
                <div className="messages">
                  {this.state.messages.map(message => {
                    return (
                      <div key={message.author}>{message.author}: {message.message}</div>
                    )
                  })}
                </div>
                <div className="footer">
                  <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>
                  <br/>
                  <input type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
                  <br/>
                  <button className="btn btn-primary form-control">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
// }
//
// export default withRouter(Chatroom)
