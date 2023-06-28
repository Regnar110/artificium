import React from 'react'
import UserPanel from './DashBoardComponents/UserPanel/UserPanel'
import UserBoardWrapper from './DashBoardComponents/UserBoard/UserBoardWrapper'
import user_avatar from '../../public/Dashboard/UserBoard/user_avatar.png'
import share from '../../public/Dashboard/UserBoard/share.svg'
import edit from '../../public/Dashboard/UserBoard/edit.svg'
import artificium_icon from '../../public/Dashboard/UserBoard/artificium_icon.svg'
import chat from '../../public/Dashboard/UserBoard/chat.svg'
import library from '../../public/Dashboard/UserBoard/library.svg'
import ChattingWindow from './DashBoardComponents/UserBoard/Components/ChattingWindows/ChattingWindow'
import ChatingWindowsWrapper from './DashBoardComponents/UserBoard/Components/ChattingWindows/ChatingWindowsWrapper'
import BoardHeader from './DashBoardComponents/UserBoard/Components/BoardHeader/BoardHeader'
import HeaderWithAvatars from './DashBoardComponents/UserBoard/Components/BoardHeader/HeaderWithAvatars/HeaderWithAvatars'
import ChatPanel from './DashBoardComponents/ChatPanel/ChatPanel'

const Dashboard = () => {
  return (
    <main className='dashboard box-border text-black bg-[#131619] w-full p-5 flex gap-3 min-h-screen'>
      <UserPanel/>        
      <UserBoardWrapper>
        <BoardHeader>
          <HeaderWithAvatars/>
          <ChatingWindowsWrapper/>
        </BoardHeader>
        <ChatPanel/>
      </UserBoardWrapper>
        
    </main>
  )
}

export default Dashboard
