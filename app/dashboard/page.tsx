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
        <header className='user_board_head font-plus_jakarta_sans bg-[#0D0F10] rounded-lg p-6 flex flex-col gap-y-10'>
          <div className='board_head flex justify-between items-center'>
            <div className='header flex flex-col'>
              <h1 className='text-[25px]'>Orbital  Oddysey</h1>
              <span className='text-[16px] text-[#9B9C9E]'>Marketing Campaign for a new TV series Launch</span>
            </div>
            <div className='board_head_functionalities w-full flex  gap-x-5'>
              <div className='avatars_status flex relative  justify-center items-center'>
                <div className='avatar_with_status w-[45px] rounded-full'>
                  <Image fill className='object-contain' src={user_avatar} alt='user_avatar'/>
                </div>
                <div className='avatar_with_status w-[45px]  '>
                <Image  fill className='object-contain' src={user_avatar} alt='user_avatar'/>
                </div>                
                <div className='avatar_with_status w-[45px] '>
                  <Image fill className='object-contain' src={user_avatar} alt='user_avatar'/>
                </div>
                <div className='avatar_with_status w-[45px] '>
                  <Image fill className='object-contain' src={user_avatar} alt='user_avatar'/>
                </div>
                <div className='hidden_avatars_count text-center text-[12px] text-[#686B6E] bg-[#1A1D21] p-2 rounded-full'>
                  +4
                </div>
              </div>
              <div className='share_button flex justify-center items-center gap-x-3'>
                <Image className='w-[25px]' src={share} alt='share'/>
                <span className='text-[#686B6E] text-[16px] font-semibold w-fit'>Share</span>
              </div>
              <div className='edit_button relative p-4 bg-[#1A1D21] w-fit rounded-lg'>
                <Image className='w-[39px]' src={edit} alt='edit_button'/>
              </div>
            </div>
          </div>
          <div className='chatting_windows_icons font-plus_jakarta_sans'>
            <div className='artificium_chat flex justify-center items-end gap-x-5'>
              <Image className='w-[25px]' src={artificium_icon} alt='artificium_icon'/>
              <span className='font-bold text-[#9B9C9E]'>Artificium</span>
            </div>

          </div>
        </header>
        <div></div>
      </UserBoardWrapper>
        
    </main>
  )
}

export default Dashboard
