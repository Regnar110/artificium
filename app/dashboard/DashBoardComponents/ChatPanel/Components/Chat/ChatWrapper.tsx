'use client'
import React, { useEffect } from 'react'
import ChatWindow from './ChatWindow/ChatWindow'
import ChatSendForm from './ChatSendForm/ChatSendForm'
import { useAppSelector } from '@/redux/hooks/typedHooks'
import { currentUIState } from '@/redux/slices/dashboardUI_controller/dashboardUI_controller'
const ChatWrapper = () => {
  const friendListPanelStatus:boolean = useAppSelector(currentUIState).friendList_panel
  const chatSendMessage = (e:React.FormEvent<HTMLButtonElement>, message:string) => {
    e.preventDefault()
    console.log(message)
  }

  return (
    <div className={`chat transition-all duration-300 ${friendListPanelStatus===true ?"opacity-30 pointer-events-none":" opacity-100"} min-w-[100%] flex flex-col h-full gap-y-5 overflow-hidden`}>
        <ChatWindow/>
        <ChatSendForm />
    </div>
  )
}

export default ChatWrapper
