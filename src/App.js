import React, { Component } from 'react'
import './App.scss'
import { Route, Link } from 'react-router-dom'
import ChatScreen from './components/ChatScreen.js'
import io from 'socket.io-client'
import Layout from './components/Layout.js'

const socket = io('http://localhost:4741')

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import Chatroom from './Chatroom'


class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      flashMessage: '',
      flashType: null,
      response: false,
      endpoint: 'http://localhost:7165'
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  flash = (message, type) => {
    this.setState({ flashMessage: message, flashType: type })

    clearTimeout(this.messageTimeout)

    this.messageTimeout = setTimeout(() => this.setState({flashMessage: null
    }), 2000)
  }

  componentDidMount() {
    const { endpoint } = this.state
    // const socket = io(endpoint)
    socket.on('FromAPI', data => this.setState({ response: data }))
    socket.emit('connection')
  }

  render () {
    const { flashMessage, flashType, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {flashMessage && <h3 className={flashType}>{flashMessage}</h3>}

        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp flash={this.flash} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn flash={this.flash} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/chatroom' render={() => (
            <Chatroom flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut flash={this.flash} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword flash={this.flash} user={user} />
          )} />
        </main>
        <div>
          <Layout title="Chat Up"/>
        </div>
      </React.Fragment>
    )
  }
}

export default App
