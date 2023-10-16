import React from 'react'
import Image from 'next/image'
import add_prv_msg from '../../../../../public/controller/add_prv_msg.svg'
import CustomHoverTooltip from '@/app/AppComponents/CustomHoverTolltip/CustomHoverTooltip'
import UserAvatarWithStatus from '@/app/AppComponents/UserAvatarWithStatus/UserAvatarWithStatus'
import { useAppSelector } from '@/redux/hooks/typedHooks'
import { getUserObject } from '@/redux/slices/userSession/userSessionSlice'
import user_avatar from '../../../../../public/Dashboard/UserBoard/user_avatar.png'
import del_prv_msg_chat from '../../../../../public/controller/del_prv_msg_chat.svg'
const PrivateMessages = () => {
    const userObject = useAppSelector(getUserObject)
  return (
    <section id='user_panel_priv_msgs' className='text-[#9B9C9E] overflow-hidden'>
      <div className='header_with_add_icon flex justify-between items-center pl-2'>
        <h3 className='text-[16px]'>PRIVATE MESSAGES</h3>
        <CustomHoverTooltip title={"Create private message"} placement='right'>
            <div className='add_prv_msg_wrapper relative w-fit p-2 rounded-full hover:bg-[#363A3D] transition-all'>
                <Image className='w-[15px] cursor-pointer' src={add_prv_msg} alt='add private chat'/>            
            </div>            
        </CustomHoverTooltip>
      </div>
      <div className='scrollable_prv_msgs_user_chats flex flex-col h-full justify-start pb-8 gap-y-3 overflow-x-hidden overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-[#0D0F10] scrollbar-track-transparent'>
        <div className='prv_msg_avatar_field flex hover:bg-[#363A3D] rounded-sm px-2 py-2 cursor-pointer'>
           <UserAvatarWithStatus size='medium' user_avatar={user_avatar} user_data={userObject} show_nick={true} reveal_mail={false} modal_action={false} user_status={{with_dot:true, status:"ONLINE"}}/>   
           <Image className='w-[15px]' src={del_prv_msg_chat} alt='delete private message chat'/>
        </div>
        <div className='prv_msg_avatar_field flex hover:bg-[#363A3D] rounded-sm px-2 py-2 cursor-pointer'>
           <UserAvatarWithStatus size='medium' user_avatar={user_avatar} user_data={userObject} show_nick={true} reveal_mail={false} modal_action={false} user_status={{with_dot:true, status:"ONLINE"}}/>   
           <Image className='w-[15px]' src={del_prv_msg_chat} alt='delete private message chat'/>
        </div>
        <div className='prv_msg_avatar_field flex hover:bg-[#363A3D] rounded-sm px-2 py-2 cursor-pointer'>
           <UserAvatarWithStatus size='medium' user_avatar={user_avatar} user_data={userObject} show_nick={true} reveal_mail={false} modal_action={false} user_status={{with_dot:true, status:"ONLINE"}}/>   
           <Image className='w-[15px]' src={del_prv_msg_chat} alt='delete private message chat'/>
        </div>
        <div className='prv_msg_avatar_field flex hover:bg-[#363A3D] rounded-sm px-2 py-2 cursor-pointer'>
           <UserAvatarWithStatus size='medium' user_avatar={user_avatar} user_data={userObject} show_nick={true} reveal_mail={false} modal_action={false} user_status={{with_dot:true, status:"ONLINE"}}/>   
           <Image className='w-[15px]' src={del_prv_msg_chat} alt='delete private message chat'/>
        </div>       
     
      </div>
      
    </section>
  )
}

export default PrivateMessages
