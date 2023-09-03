'use client'
import React, { useEffect } from 'react'
import ChatWindow from './ChatWindow/ChatWindow'
import ChatSendForm from './ChatSendForm/ChatSendForm'
interface ChatWrapperProps {
  friendsVisibility:boolean
}
const ChatWrapper = ({friendsVisibility}:ChatWrapperProps) => {
  const chatSendMessage = (e:React.FormEvent<HTMLButtonElement>, message:string) => {
    e.preventDefault()
    console.log(message)
  }

  return (
    <div className={`${friendsVisibility === true ? "w-[0px] md:w-full": "w-full"} chat relative flex flex-col h-full gap-y-5 overflow-hidden`}>
        <ChatWindow/>
        <ChatSendForm chatSendMessage={chatSendMessage}/>
    </div>
  )
}

export default ChatWrapper
