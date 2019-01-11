import React, { Component } from 'react'

class MessageList extends Component {
  render() {
    return(
      <React.Fragment>
        <ul className="message-list">
          {this.props.messages.map((message, index) => (
            <li key={index}>
              <h4 className="message-sender">{message.senderId}</h4>
              <p className="message-text">{message.text}</p>
            </li>
          ))}
        </ul>
        <li></li>
      </React.Fragment>
    )
  }
}

export default MessageList