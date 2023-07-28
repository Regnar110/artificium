'use client'
import React, { useEffect } from 'react'
import ChatWindow from './ChatWindow/ChatWindow'
import ChatSendForm from './ChatSendForm/ChatSendForm'
import { Socket, io } from 'socket.io-client'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'
interface ChatWrapperProps {
  friendsVisibility:boolean
}
const ChatWrapper = ({friendsVisibility}:ChatWrapperProps) => {
  let ioInstance:Socket<DefaultEventsMap, DefaultEventsMap> = io("http://localhost:3001/")
  ioInstance.on("chat_response", (...args) => console.log(args))
  useEffect(() => {
    // ioInstance = io('http://localhost:3001/')
    // ioInstance.on('messageReceived', (message) => {
    //   console.log("wiadomosc to", message)
    //   ioInstance.emit("SIemanooooo","siemka")
    // })
    return () => {
      ioInstance.disconnect() // after dismount disconnect
    }
  },[])

  const chatSendMessage = (e:React.FormEvent<HTMLButtonElement>, message:string) => {
    e.preventDefault()
    console.log(message)
    ioInstance.emit("chat", message)
  }

  return (
    <div className={`${friendsVisibility === true ? "w-[0px] md:w-full": "w-full"} chat relative flex flex-col h-full gap-y-5 overflow-hidden`}>
        <ChatWindow/>
        <ChatSendForm chatSendMessage={chatSendMessage}/>
    </div>
  )
}

export default ChatWrapper
