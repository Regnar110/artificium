import React from 'react'
import Image from 'next/image'
import artificium_icon from '../../../../public/Dashboard/UserBoard/artificium_icon.svg'
import chat from '../../../../public/Dashboard/UserBoard/chat.svg'
import library from '../../../../public/Dashboard/UserBoard/library.svg'
import user_avatar from '../../../../public/Dashboard/UserBoard/user_avatar.png'
import ControllerFooter from '../ControllerFooter/ControllerFooter'
import UserAvatarWithStatus from '@/app/AppComponents/UserAvatarWithStatus/UserAvatarWithStatus'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/typedHooks'
import { getUserObject } from '@/redux/slices/userSession/userSessionSlice'
import { UI_VIEW_CHANGE, currentUIState } from '@/redux/slices/dashboardUI_controller/dashboardUI_controller'
import { selectWindow } from '@/redux/slices/chattingWindows/chattingWindowsSlice'
const GroupPanel = () => {
  const {type, status} = useAppSelector(currentUIState).controller_panel
  const userObject = useAppSelector(getUserObject)
  const dispatch = useAppDispatch()
  const handleChatWindowSelection = (windowType:"artificium" | "chat" | "library",) => {    
      dispatch(selectWindow(windowType))
      dispatch(UI_VIEW_CHANGE({UI:"controller_panel", status:false}))
  }
  return (
    <section className={`bg-[#131619] ${status === true && type === "group" ? "right-0 min-w-[200px]  md:w-[100%]":"right-full w-[0px]"} max-w-[70%] md:max-w-[200px] lg:max-w-[250px] text-[#9B9C9E] font-plus_jakarta_sans transition-all duration-300  relative  flex flex-col items-center gap-y-3  h-[100vh]`}>
      <div id='group_panel_chats' className=' flex flex-col gap-y-5 w-full h-fit pt-5 px-6 text-[18px] items-center'>
        <h3 className='pl-2 text-[14px]'>CHAT WINDOWS</h3>
        <div className='group_chat_choice cursor-pointer hover:text-white hover:bg-[#363A3D] transition-all p-2 rounded-sm flex items-center gap-x-3' onClick={()=> handleChatWindowSelection("chat")}>
          <Image className='w-[17px]' src={chat} alt='artificium'/>
          <span className='font-semibold w-fit hover:text-white transition-all '>Chat</span>         
        </div>
        <div className='group_chat_choice cursor-pointer hover:text-white hover:bg-[#363A3D] transition-all p-2 rounded-sm flex items-center gap-x-3'>
          <Image className='w-[17px]' src={artificium_icon} alt='artificium'/>
          <span className='font-semibold w-fit hover:text-white transition-all '>Artificium</span>         
        </div>
        <div className='group_chat_choice cursor-pointer hover:text-white hover:bg-[#363A3D] transition-all p-2 rounded-sm flex items-center gap-x-3'>
          <Image className='w-[17px]' src={library} alt='artificium'/>
          <span className='font-semibold w-fit hover:text-white transition-all '>Library</span>         
        </div>
      </div>
      <div id='group_panel_members_list' className=' h-full flex flex-col overflow-hidden pt-5 px-6'>
        <h3 className='pl-2 text-[14px]'>GROUP MEMBERS</h3>
        <div className='scrollable_members overflow-y-auto overflow-x-hidden scrollbar scrollbar-w-1 scrollbar-thumb-[#0D0F10] scrollbar-track-transparent'>
          <div className='prv_msg_avatar_field flex hover:bg-[#363A3D] rounded-sm px-2 py-2 cursor-pointer'>
            <UserAvatarWithStatus size='normal' user_avatar={user_avatar} user_data={userObject} show_nick={true} reveal_mail={false} modal_action={false} user_status={{with_dot:true, status:"ONLINE"}}/>   
          </div>
          <div className='prv_msg_avatar_field flex hover:bg-[#363A3D] rounded-sm px-2 py-2 cursor-pointer'>
            <UserAvatarWithStatus size='normal' user_avatar={user_avatar} user_data={userObject} show_nick={true} reveal_mail={false} modal_action={false} user_status={{with_dot:true, status:"ONLINE"}}/>   
          </div>
          <div className='prv_msg_avatar_field flex hover:bg-[#363A3D] rounded-sm px-2 py-2 cursor-pointer'>
            <UserAvatarWithStatus size='normal' user_avatar={user_avatar} user_data={userObject} show_nick={true} reveal_mail={false} modal_action={false} user_status={{with_dot:true, status:"ONLINE"}}/>   
          </div>
          <div className='prv_msg_avatar_field flex hover:bg-[#363A3D] rounded-sm px-2 py-2 cursor-pointer'>
            <UserAvatarWithStatus size='normal' user_avatar={user_avatar} user_data={userObject} show_nick={true} reveal_mail={false} modal_action={false} user_status={{with_dot:true, status:"ONLINE"}}/>   
          </div>
          <div className='prv_msg_avatar_field flex hover:bg-[#363A3D] rounded-sm px-2 py-2 cursor-pointer'>
            <UserAvatarWithStatus size='normal' user_avatar={user_avatar} user_data={userObject} show_nick={true} reveal_mail={false} modal_action={false} user_status={{with_dot:true, status:"ONLINE"}}/>   
          </div>
          <div className='prv_msg_avatar_field flex hover:bg-[#363A3D] rounded-sm px-2 py-2 cursor-pointer'>
            <UserAvatarWithStatus size='normal' user_avatar={user_avatar} user_data={userObject} show_nick={true} reveal_mail={false} modal_action={false} user_status={{with_dot:true, status:"ONLINE"}}/>   
          </div>
          <div className='prv_msg_avatar_field flex hover:bg-[#363A3D] rounded-sm px-2 py-2 cursor-pointer'>
            <UserAvatarWithStatus size='normal' user_avatar={user_avatar} user_data={userObject} show_nick={true} reveal_mail={false} modal_action={false} user_status={{with_dot:true, status:"ONLINE"}}/>   
          </div>
          <div className='prv_msg_avatar_field flex hover:bg-[#363A3D] rounded-sm px-2 py-2 cursor-pointer'>
            <UserAvatarWithStatus size='normal' user_avatar={user_avatar} user_data={userObject} show_nick={true} reveal_mail={false} modal_action={false} user_status={{with_dot:true, status:"ONLINE"}}/>   
          </div>
          <div className='prv_msg_avatar_field flex hover:bg-[#363A3D] rounded-sm px-2 py-2 cursor-pointer'>
            <UserAvatarWithStatus size='normal' user_avatar={user_avatar} user_data={userObject} show_nick={true} reveal_mail={false} modal_action={false} user_status={{with_dot:true, status:"ONLINE"}}/>   
          </div>
        </div>

      </div>

      <ControllerFooter/>
    </section>
  )
}

export default GroupPanel
