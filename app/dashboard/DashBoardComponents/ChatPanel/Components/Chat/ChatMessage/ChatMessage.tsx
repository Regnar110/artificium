
import React from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import copy_message from '../../../../../../../public/chatpanel/copy.svg'
interface MessageProps {
    user_avatar:StaticImageData;
    user_nickname: string;
    message:string;
}
const ChatMessage = ({user_avatar, user_nickname, message}:MessageProps) => {
  return (
    <div className='chat_message flex gap-5 border-[1px] border-[#1A1D21] p-3 rounded-lg'>
        <div className='chat_avatar relative w-[50px] flex items-start'>
            <Image src={user_avatar} alt='message'/>
        </div>
        <div className='nick_and_message'>
            <h1 className='nick text-[16px]'>{user_nickname}</h1>
            <p className='message text-[#9B9C9E] text-[14px] font-medium'>{message}</p>
        </div>
        <div className='chat_avatar relative w-[20px] flex justify-center items-start'>
            <Image src={copy_message} alt='message'/>
        </div>
    </div>
  )
}

export default ChatMessage
