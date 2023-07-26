import React from 'react'
import UserPanel from './DashBoardComponents/UserPanel/UserPanel'
import UserBoardWrapper from './DashBoardComponents/UserBoard/UserBoardWrapper'
import ChatingWindowsWrapper from './DashBoardComponents/UserBoard/Components/ChattingWindows/ChatingWindowsWrapper'
import BoardHeader from './DashBoardComponents/UserBoard/Components/BoardHeader/BoardHeader'
import HeaderWithAvatars from './DashBoardComponents/UserBoard/Components/BoardHeader/HeaderWithAvatars/HeaderWithAvatars'
import ChatPanel from './DashBoardComponents/ChatPanel/ChatPanel'
import DashboardPageWrapper from './DashBoardComponents/DashboardPageWrapper/DashboardPageWrapper'

const Dashboard = () => {
  return (
    <DashboardPageWrapper>
        <UserPanel/>        
        <UserBoardWrapper>
          <BoardHeader>
            <HeaderWithAvatars/>
            <ChatingWindowsWrapper/>
          </BoardHeader>
          <ChatPanel/>
        </UserBoardWrapper>      
    </DashboardPageWrapper>
  )
}

export default Dashboard
