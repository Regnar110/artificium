import React from 'react'
import ChatWindow from './ChatWindow/ChatWindow'
import ChatSendForm from './ChatSendForm/ChatSendForm'

const ChatWrapper = () => {
  return (
    <div className='chat relative flex flex-col h-full gap-y-5'>
        <ChatWindow/>
        <ChatSendForm/>
    </div>
  )
}

export default ChatWrapper
