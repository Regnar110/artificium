'use client'
import React, { useState } from 'react'
import ChatWrapper from './Components/Chat/ChatWrapper'
import FriendsListWrapper from './Components/UserList/FriendsListWrapper/FriendsListWrapper'
const ChatPanel = () => {

  return (
    <section className='relative flex w-full h-[100vh] overflow-hidden rounded-lg '>
      <div className='chat_and_friends h-full flex w-full'>
        <ChatWrapper />
        <FriendsListWrapper/>        
      </div>

      {/* <FriendsListWrapper friendsVisible setFriendsVisible={setFriendsVisible}/> */}
    </section>
  )
}

export default ChatPanel
