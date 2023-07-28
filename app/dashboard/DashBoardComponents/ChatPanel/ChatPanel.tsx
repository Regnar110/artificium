import React, { useState } from 'react'
import ChatWrapper from './Components/Chat/ChatWrapper'
import CurrentlyOnline from './Components/UserList/CurrentlyOnline/CurrentlyOnline'
import CurrentlyOffline from './Components/UserList/CurrentlyOffline/CurrentlyOffline'
import ListCategoriesOptions from './Components/UserList/ListCategoriesOptions/ListCategoriesOptions'
import Image from 'next/image'
import hide from '../../../../public/buttons/slider_buttons/slide_right.svg'
const ChatPanel = () => {
  const [friendsVisible, setFriendsVisible] = useState<boolean>(true)
  return (
    <section className='relative flex w-full h-full overflow-hidden rounded-lg mt-5'>
      <ChatWrapper friendsVisibility={friendsVisible}/>
      <div id='user_list_with_statuses' className={`w-[300px] p-5 ${friendsVisible === true ? "visible" : "hidden"} overflow-hidden flex flex-col justify-between gap-4`}>
        <div id='lists' className='flex flex-col overflow-scroll scrollbar scrollbar-w-[3px] scrollbar-thumb-[#0D0F10] scrollbar-track-[#131619] overflow-x-hidden gap-6 '>
          <CurrentlyOnline/>
          <CurrentlyOffline/>    
        </div>
        <ListCategoriesOptions/>
      </div>

      <div onClick={() => setFriendsVisible(!friendsVisible)} className='absolute_hide_button absolute cursor-pointer w-[30px] h-[80px] bg-[#000] px-1 right-0 top-[50%] flex justify-center items-center rounded-lg'>
        <Image className={`${friendsVisible === true ? "rotate-0": "rotate-180"} w-fit`} src={hide} alt={"hide friends"}/>
        <span className='friends_visibility font-plus_jakarta_sans text-[16px] text-[#fff] w-[80px] h-[10px] rotate-90'>Friends</span>
      </div>
    </section>
  )
}

export default ChatPanel
