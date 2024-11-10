import React from 'react'
import './Chat.css'
import { ChatEngine } from 'react-chat-engine'

export default function ChatsPage(props) {
  return (
    <ChatEngine
      publicKey={'f627c37b-9de0-468e-a95b-719c3e2cfb91'}
      userName={props.user.username}
      userSecret={props.user.secret}
    />
  )
}