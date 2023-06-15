import React from 'react'
import UserPanel from './DashBoardComponents/UserPanel/UserPanel'
import UserBoardWrapper from './DashBoardComponents/UserBoard/UserBoardWrapper'
import user_avatar from '../../public/Dashboard/UserBoard/user_avatar.png'
import share from '../../public/Dashboard/UserBoard/share.svg'
import edit from '../../public/Dashboard/UserBoard/edit.svg'
import artificium_icon from '../../public/Dashboard/UserBoard/artificium_icon.svg'
import chat from '../../public/Dashboard/UserBoard/chat.svg'
import library from '../../public/Dashboard/UserBoard/library.svg'
import Image from 'next/image'

const Dashboard = () => {
  return (
    <main className='dashboard box-border text-black bg-[#131619] w-full p-5 flex gap-3'>
      <section className='w-fit'>
        <UserPanel/>        
      </section>
      <UserBoardWrapper>
        <header className='user_board_head font-plus_jakarta_sans bg-[#0D0F10] rounded-lg px-6 flex flex-col gap-y-10 overflow-hidden'>
          <div className='board_head grid lg:grid-flow-col auto-cols-max justify-between items-center gap-y-6 lg:gap-0 pt-6'>
            <div className='header max-w-[300px]'>
              <h1 className='text-[25px]'>Orbital  Oddysey</h1>
              <span className='text-[16px] text-[#9B9C9E]'>Marketing Campaign for a new TV series Launch</span>
            </div>
            <div className='avatar_functionalities flex gap-6'>
              <div className='users_avatars_status_container flex flex-row min-w-fit'>
                <div className='avatar_with_status relative rounder-full overflow-hidden cursor-pointer min-w-fit'>
                  <Image className='w-auto' width={150} height={150} src={user_avatar} alt='avatar_icon'/>
                  <div className='status_circle h-[16px] w-[16px] rounded-full flex justify-center items-center bg-[#0D0F10] absolute top-0 right-0'>
                    <div className='inner_statuc_circle w-[8px] h-[8px] bg-green-500 rounded-full'></div>
                  </div>
                </div>
                <div className='avatar_with_status relative rounder-full overflow-hidden cursor-pointer min-w-fit'>
                  <Image className='w-auto' width={150} height={150} src={user_avatar} alt='avatar_icon'/>
                  <div className='status_circle h-[16px] w-[16px] rounded-full flex justify-center items-center bg-[#0D0F10] absolute top-0 right-0'>
                    <div className='inner_statuc_circle w-[8px] h-[8px] bg-green-500 rounded-full'></div>
                  </div>
                </div>
                <div className='avatar_with_status  relative rounder-full overflow-hidden cursor-pointer min-w-fit'>
                  <Image className='w-auto' width={150} height={150} src={user_avatar} alt='avatar_icon'/>
                  <div className='status_circle h-[16px] w-[16px] rounded-full flex justify-center items-center bg-[#0D0F10] absolute top-0 right-0'>
                    <div className='inner_statuc_circle w-[8px] h-[8px] bg-green-500 rounded-full'></div>
                  </div>
                </div>
                <div className='hidden_users_count cursor-pointer bg-[#1A1D21] text-[#686B6E] min-w-[36px] h-[36px] flex justify-center items-center rounded-full'>
                  +4
                </div>                
              </div>
              <div className='share_head_button relative font-plus_jakarta_sans flex items-center justify-center gap-x-3 cursor-pointer'>
                <Image className='w-auto' width={60} height={60} src={share} alt='share_icon'/>
                <span className='text-[#686B6E] text-[19px] font-semibold w-fit'>Share</span>
              </div>
              <div className='edit_head_button relative font-plus_jakarta_sans flex items-center justify-center gap-x-3 bg-[#1A1D21] rounded-lg cursor-pointer p-2'>
                <Image className='w-auto' width={150} height={150} src={edit} alt='edit_icon'/>
              </div>
            </div>
          </div>
          <div className='chatting_windows_icons font-plus_jakarta_sans flex gap-10'>
            <div className='artificium_chat w-fit flex flex-col justify-center items-end gap-x-5'>
              <div className='chat_icon flex gap-3 w-fit pt-6 pb-3'>
                <Image className='w-[25px]' src={artificium_icon} alt='artificium_icon'/>
                <span className='font-bold text-[#9B9C9E]'>Artificium</span>                
              </div>
              <div className='chat_color_underline h-[9px] relative -bottom-1 w-full bg-[#B6F09C] rounded-2xl'></div>
            </div>
            <div className='user_chat w-fit flex flex-col justify-center items-end gap-x-5'>
              <div className='chat_icon flex w-fit pt-6 pb-3'>
                <Image className='-[25px]' src={chat} alt='artificium_icon'/>
                <span className='font-bold text-[#9B9C9E]'>Chat</span>                
              </div>
              <div className='chat_color_underline h-[9px] relative -bottom-1 w-full bg-[#B6F09C] rounded-2xl'></div>
            </div>
            <div className='library w-fit flex flex-col justify-center items-end gap-x-5'>
              <div className='library_icon flex w-fit pt-6 pb-3'>
                <Image className='w-[25px]' src={library} alt='artificium_icon'/>
                <span className='font-bold text-[#9B9C9E]'>Library</span>                
              </div>
              <div className='chat_color_underline h-[9px] relative -bottom-1 w-full bg-[#B6F09C] rounded-2xl'></div>
            </div>

          </div>
        </header>
        <div></div>
      </UserBoardWrapper>
        
    </main>
  )
}

export default Dashboard
