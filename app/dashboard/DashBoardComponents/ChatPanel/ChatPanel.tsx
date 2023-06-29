import React from 'react'
import Image from 'next/image'
import user_avatar from '../../../../public/Dashboard/UserBoard/user_avatar.png'
import chat_category_friends from '../../../../public/chatpanel/chat.svg'
import friends_category from '../../../../public/chatpanel/friends.svg'
import ChatWrapper from './Components/Chat/ChatWrapper'
import CurrentlyOnline from './Components/UserList/CurrentlyOnline/CurrentlyOnline'
import CurrentlyOffline from './Components/UserList/CurrentlyOffline/CurrentlyOffline'
import ListCategoriesOptions from './Components/UserList/ListCategoriesOptions/ListCategoriesOptions'
const ChatPanel = () => {

  return (
    <section className='relative h-full flex w-full place-self-end overflow-hidden rounded-lg mt-5'>
      <ChatWrapper/>


      <div id='user_list_with_statuses' className='w-[300px] p-5 overflow-hidden flex flex-col gap-4'>
        <div id='lists' className='flex flex-col overflow-scroll scrollbar scrollbar-w-[3px] scrollbar-thumb-[#0D0F10] scrollbar-track-[#131619] overflow-x-hidden gap-6'>
          <CurrentlyOnline/>
          <CurrentlyOffline/>    
        </div>
        <ListCategoriesOptions/>
      </div>
      
    </section>
  )
}

export default ChatPanel
