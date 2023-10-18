'use client'
import React, { useEffect } from 'react'
import ChatWindow from './ChatWindow/ChatWindow'
import ChatSendForm from './ChatSendForm/ChatSendForm'

const ChatWrapper = () => {
  const chatSendMessage = (e:React.FormEvent<HTMLButtonElement>, message:string) => {
    e.preventDefault()
    console.log(message)
  }

  return (
    <div className={`chat w-full relative flex flex-col h-full gap-y-5 overflow-hidden`}>
        <ChatWindow/>
        <ChatSendForm />
    </div>
  )
}

export default ChatWrapper
