import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import artificium_icon from '../../../../public/Dashboard/UserBoard/artificium_icon.svg'
import chat from '../../../../public/Dashboard/UserBoard/chat.svg'
import library from '../../../../public/Dashboard/UserBoard/library.svg'
import group_icon from '../../../../public/controller/test_group_icon.png'
import user_avatar from '../../../../public/Dashboard/UserBoard/user_avatar.png'
import ControllerFooter from '../ControllerFooter/ControllerFooter'
import UserAvatarWithStatus from '@/app/AppComponents/UserAvatarWithStatus/UserAvatarWithStatus'
import { useAppSelector } from '@/redux/hooks/typedHooks'
import { getUserObject } from '@/redux/slices/userSession/userSessionSlice'
const GroupPanel = () => {
    const [isRevealed, setPanelReveal ] = useState<boolean>(false)
    useEffect(() => {
      setPanelReveal(true)
      return () => {
        setPanelReveal(false)
      }
    })

    const userObject = useAppSelector(getUserObject)
  return (
    <section className={`bg-[#131619] ${isRevealed === true ? "left-0":"left-[-280px]"} text-[#9B9C9E] font-plus_jakarta_sans transition-all duration-300 min-w-[280px] w-full md:w-[280px] relative  flex flex-col items-center gap-y-3  h-[100vh]`}>
      <div id='group_panel_chats' className=' flex flex-col gap-y-5 w-full h-fit pt-5 px-6 text-[22px] items-center'>
        <h3 className='pl-2 text-[16px]'>CHAT WINDOWS</h3>
        <div className='group_chat_choice cursor-pointer hover:text-white hover:bg-[#363A3D] transition-all p-2 rounded-sm flex items-center gap-x-3'>
          <Image className='w-[25px]' src={chat} alt='artificium'/>
          <span className='font-semibold w-fit hover:text-white transition-all '>Chat</span>         
        </div>
        <div className='group_chat_choice cursor-pointer hover:text-white hover:bg-[#363A3D] transition-all p-2 rounded-sm flex items-center gap-x-3'>
          <Image className='w-[25px]' src={artificium_icon} alt='artificium'/>
          <span className='font-semibold w-fit hover:text-white transition-all '>Artificium</span>         
        </div>
        <div className='group_chat_choice cursor-pointer hover:text-white hover:bg-[#363A3D] transition-all p-2 rounded-sm flex items-center gap-x-3'>
          <Image className='w-[25px]' src={library} alt='artificium'/>
          <span className='font-semibold w-fit hover:text-white transition-all '>Library</span>         
        </div>
      </div>
      
      <div id='group_panel_members_list' className=' h-full flex flex-col overflow-hidden pt-5 px-6'>
        <h3 className='pl-2 text-[16px]'>GROUP MEMBERS</h3>
        <div className='scrollable_members overflow-y-auto overflow-x-hidden scrollbar scrollbar-w-1 scrollbar-thumb-[#0D0F10] scrollbar-track-transparent'>
          <div className='prv_msg_avatar_field flex hover:bg-[#363A3D] rounded-sm px-2 py-2 cursor-pointer'>
            <UserAvatarWithStatus size='medium' user_avatar={user_avatar} user_data={userObject} show_nick={true} reveal_mail={false} modal_action={false} user_status={{with_dot:true, status:"ONLINE"}}/>   
          </div>
          <div className='prv_msg_avatar_field flex hover:bg-[#363A3D] rounded-sm px-2 py-2 cursor-pointer'>
            <UserAvatarWithStatus size='medium' user_avatar={user_avatar} user_data={userObject} show_nick={true} reveal_mail={false} modal_action={false} user_status={{with_dot:true, status:"ONLINE"}}/>   
          </div>
          <div className='prv_msg_avatar_field flex hover:bg-[#363A3D] rounded-sm px-2 py-2 cursor-pointer'>
            <UserAvatarWithStatus size='medium' user_avatar={user_avatar} user_data={userObject} show_nick={true} reveal_mail={false} modal_action={false} user_status={{with_dot:true, status:"ONLINE"}}/>   
          </div>
          <div className='prv_msg_avatar_field flex hover:bg-[#363A3D] rounded-sm px-2 py-2 cursor-pointer'>
            <UserAvatarWithStatus size='medium' user_avatar={user_avatar} user_data={userObject} show_nick={true} reveal_mail={false} modal_action={false} user_status={{with_dot:true, status:"ONLINE"}}/>   
          </div>
          <div className='prv_msg_avatar_field flex hover:bg-[#363A3D] rounded-sm px-2 py-2 cursor-pointer'>
            <UserAvatarWithStatus size='medium' user_avatar={user_avatar} user_data={userObject} show_nick={true} reveal_mail={false} modal_action={false} user_status={{with_dot:true, status:"ONLINE"}}/>   
          </div>


          <div className='prv_msg_avatar_field flex hover:bg-[#363A3D] rounded-sm px-2 py-2 cursor-pointer'>
            <UserAvatarWithStatus size='medium' user_avatar={user_avatar} user_data={userObject} show_nick={true} reveal_mail={false} modal_action={false} user_status={{with_dot:true, status:"ONLINE"}}/>   
          </div>
          <div className='prv_msg_avatar_field flex hover:bg-[#363A3D] rounded-sm px-2 py-2 cursor-pointer'>
            <UserAvatarWithStatus size='medium' user_avatar={user_avatar} user_data={userObject} show_nick={true} reveal_mail={false} modal_action={false} user_status={{with_dot:true, status:"ONLINE"}}/>   
          </div>
          <div className='prv_msg_avatar_field flex hover:bg-[#363A3D] rounded-sm px-2 py-2 cursor-pointer'>
            <UserAvatarWithStatus size='medium' user_avatar={user_avatar} user_data={userObject} show_nick={true} reveal_mail={false} modal_action={false} user_status={{with_dot:true, status:"ONLINE"}}/>   
          </div>

          <div className='prv_msg_avatar_field flex hover:bg-[#363A3D] rounded-sm px-2 py-2 cursor-pointer'>
            <UserAvatarWithStatus size='medium' user_avatar={user_avatar} user_data={userObject} show_nick={true} reveal_mail={false} modal_action={false} user_status={{with_dot:true, status:"ONLINE"}}/>   
          </div>
          <div className='prv_msg_avatar_field flex hover:bg-[#363A3D] rounded-sm px-2 py-2 cursor-pointer'>
            <UserAvatarWithStatus size='medium' user_avatar={user_avatar} user_data={userObject} show_nick={true} reveal_mail={false} modal_action={false} user_status={{with_dot:true, status:"ONLINE"}}/>   
          </div>
          <div className='prv_msg_avatar_field flex hover:bg-[#363A3D] rounded-sm px-2 py-2 cursor-pointer'>
            <UserAvatarWithStatus size='medium' user_avatar={user_avatar} user_data={userObject} show_nick={true} reveal_mail={false} modal_action={false} user_status={{with_dot:true, status:"ONLINE"}}/>   
          </div>

          <div className='prv_msg_avatar_field flex hover:bg-[#363A3D] rounded-sm px-2 py-2 cursor-pointer'>
            <UserAvatarWithStatus size='medium' user_avatar={user_avatar} user_data={userObject} show_nick={true} reveal_mail={false} modal_action={false} user_status={{with_dot:true, status:"ONLINE"}}/>   
          </div>
        </div>

      </div>

      <ControllerFooter/>
    </section>
  )
}

export default GroupPanel
