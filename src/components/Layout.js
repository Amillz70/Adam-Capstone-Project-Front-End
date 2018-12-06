import React, { Component } from 'react'
// import io from 'socket.io-client'
import { USER_CONNECTED } from '../Events.js'

// const socketUrl = 'http://localhost:7165/'

export default class Layout extends Component{

  constructor(props) {
    super(props)

    this.state = {
      socket:null
    }
  }

  componentWillMount() {
    // this.initSocket()
  }

  // 20 min mark
  setUser = (user)=>{
    const { socket } = this.state
    socket.emit(USER_CONNECTED)
    this.setState({socket})
  }

  initSocket = ()=> {
    // const socket = io(socketUrl)
    //
    // socket.on('connect', ()=> {
    //   console.log('Connected')
    // })
    // this.setState({socket})
  }

  render() {
    const { title } = this.props
    return (
      <div className="container">
        {title}
      </div>
    )
  }
}
