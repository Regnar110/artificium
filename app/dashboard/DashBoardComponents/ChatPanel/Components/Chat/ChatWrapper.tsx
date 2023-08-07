'use client'
import React, { useEffect } from 'react'
import ChatWindow from './ChatWindow/ChatWindow'
import ChatSendForm from './ChatSendForm/ChatSendForm'
import { getSocketInstance } from '@/app/utils/SocketInstance/socketInstance'
import { useAppSelector } from '@/redux/hooks/typedHooks'
import { getUserId } from '@/redux/slices/userSession/userSessionSlice'
import { io } from 'socket.io-client'
interface ChatWrapperProps {
  friendsVisibility:boolean
}
const ChatWrapper = ({friendsVisibility}:ChatWrapperProps) => {
  const authUser = useAppSelector(getUserId)
  const ioInstance = getSocketInstance({authUser})
  useEffect(() => {
    // ioInstance.on("chat", (...args) => {
    //   console.log("dostałem emitowaną wiadomość")
    // })

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
