'use client'
import React, { useState } from 'react'
import ChatWrapper from './Components/Chat/ChatWrapper'
import FriendsListWrapper from './Components/UserList/FriendsListWrapper/FriendsListWrapper'
import { useAppSelector } from '@/redux/hooks/typedHooks'
import { currentUIState } from '@/redux/slices/dashboardUI_controller/dashboardUI_controller'
const ChatPanel = () => {
  const friendListPanelStatus:boolean = useAppSelector(currentUIState).friendList_panel
  return (
    <section className='relative flex w-full h-[100vh] overflow-hidden rounded-lg'>
      <div className={`chat_and_friends relative transition-all ${friendListPanelStatus === true ? "md:right-[200px]":"right-0"} h-full flex w-full`}>
        <ChatWrapper />
        <FriendsListWrapper/>        
      </div>
    </section>
  )
}

export default ChatPanel
