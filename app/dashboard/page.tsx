import React from 'react'
import UserPanel from './DashBoardComponents/UserPanel/UserPanel'
import UserBoardWrapper from './DashBoardComponents/UserBoard/UserBoardWrapper'
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
