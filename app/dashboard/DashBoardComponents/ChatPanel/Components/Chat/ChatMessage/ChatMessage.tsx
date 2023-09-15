
import React from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import copy_message from '../../../../../../../public/chatpanel/copy.svg'
import UserAvatarWithStatus from '@/app/AppComponents/UserAvatarWithStatus/UserAvatarWithStatus';
interface MessageProps {
    user_avatar:StaticImageData;
    user_nickname: string;
    message:string;
}
const ChatMessage = ({user_avatar, user_nickname, message}:MessageProps) => {
  return (
    <div className='chat_message flex gap-5 border-[1px] border-[#1A1D21] p-3 rounded-lg'>
         <UserAvatarWithStatus size='normal' user_avatar={user_avatar} user_status={{with_dot:true, status:"ONLINE"}} modal_action={true}/>
        <div className='nick_and_message'>
            <h1 className='nick text-[16px]'>{user_nickname}</h1>
            <p className='message text-[#9B9C9E] text-[14px] font-medium break-all'>{message}</p>
        </div>
        <div className='chat_avatar relative w-[20px] flex justify-center items-start'>
            <Image src={copy_message} alt='message'/>
        </div>
    </div>
  )
}

export default ChatMessage
