import React from 'react'
import Image from 'next/image'
import chat_category_friends from '../../../../../../../public/chatpanel/chat.svg'
import friends_category from '../../../../../../../public/chatpanel/friends.svg'
const ListCategoriesOptions = () => {
  return (
    <div id='user_list_categories' className='w-full h-[95px] bg-[#0D0F10] flex justify-between items-center'>
        <div className='category flex gap-2 justify-center items-center'>
        <div className='category_image relative w-[20px] h-[20px]'>
            <Image fill={true} style={{objectFit:"contain"}} src={chat_category_friends} alt='chat'/>
        </div>
        <span className='w-fit text-[12px] xl:text-[14px]'>Chats</span>
        </div>
        <div className='category flex gap-2 justify-center items-center'>
        <span className='w-fit text-[12px] xl:text-[14px]'>Friends</span>
        <div className='category_image relative w-[20px] h-[20px]'>
            <Image fill={true} style={{objectFit:"contain"}} src={friends_category} alt='chat'/>
        </div>
        </div>
    </div>
  )
}

export default ListCategoriesOptions
