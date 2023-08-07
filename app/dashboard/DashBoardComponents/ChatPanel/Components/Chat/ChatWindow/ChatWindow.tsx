import React from 'react'
import ChatMessage from '../ChatMessage/ChatMessage'
import user_avatar from '../../../../../../../public/Dashboard/UserBoard/user_avatar.png'
import { useAppSelector } from '@/redux/hooks/typedHooks'
import { getChat } from '@/redux/slices/chattingWindows/chattingWindowsSlice'
const ChatWindow = () => {
  const chatData = useAppSelector(getChat)
  return (
    <div id='chat_window' className='relative border-[1px] border-[#1A1D21] p-3 rounded-lg flex flex-col h-full gap-5 overflow-scroll overflow-x-hidden scrollbar scrollbar-w-[3px] scrollbar-thumb-[#0D0F10] scrollbar-track-[#131619]'>
      {
        chatData.selectedGroup ? 
        <>
          <ChatMessage message='fsfasfasfa' user_avatar={user_avatar} user_nickname='Mateusz Weycza'/>
          <ChatMessage message='fbhafkjafskafnjkfasfiukgsnjnskfsnlksmflkamsfl;amflakadasdasdasdasdsdmflamsflkkmaflkasmkflfbhafkjaafkjafskafnjkfasfiukgsnjnskfsnlksmflkamsfl;amflakadasdasdasdasdsdmflamsflkkmaflkasmkflfbhafkjafskafnjkfskafnjkfasfiukgsnjnskfsnlksmflkamsfl;amflakadasdasdasdasdsdmflamsflkkmaflkasmkflfbhafkjafskafnjkfasfiukgsnjnskfsnlksmflkamsfl;amflakadasdasdasdasdsdmflamsflkkmaflkasmkfl' user_avatar={user_avatar} user_nickname='Mateusz Weycza'/>
        </>
        :
          <span>Wybierz grupę</span>
      }
      </div>
  )
}

export default ChatWindow
