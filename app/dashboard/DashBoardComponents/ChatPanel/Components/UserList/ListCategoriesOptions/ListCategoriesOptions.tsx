import React from 'react'
import Image from 'next/image'
import chat_category_friends from '../../../../../../../public/chatpanel/chat.svg'
import friends_category from '../../../../../../../public/chatpanel/friends.svg'
const ListCategoriesOptions = () => {
  return (
    <div id='user_list_categories' className='w-full flex justify-between items-center'>
        <div className='category flex gap-2 justify-center items-center'>
        <div className='category_image relative w-[20px] h-[20px]'>
            <Image fill={true} style={{objectFit:"contain"}} src={chat_category_friends} alt='chat'/>
        </div>
        <span className='w-fit'>Chats</span>
        </div>
        <div className='category flex gap-2 justify-center items-center'>
        <span className='w-fit'>Friends</span>
        <div className='category_image relative w-[25px] h-[25px]'>
            <Image fill={true} style={{objectFit:"contain"}} src={friends_category} alt='chat'/>
        </div>
        </div>
    </div>
  )
}

export default ListCategoriesOptions
