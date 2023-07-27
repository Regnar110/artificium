'use client'
import React from 'react'
import UserPanel from './DashBoardComponents/UserPanel/UserPanel'
import UserBoardWrapper from './DashBoardComponents/UserBoard/UserBoardWrapper'
import ChatingWindowsWrapper from './DashBoardComponents/UserBoard/Components/ChattingWindows/ChatingWindowsWrapper'
import BoardHeader from './DashBoardComponents/UserBoard/Components/BoardHeader/BoardHeader'
import HeaderWithAvatars from './DashBoardComponents/UserBoard/Components/BoardHeader/HeaderWithAvatars/HeaderWithAvatars'
import ChatPanel from './DashBoardComponents/ChatPanel/ChatPanel'
import DashboardPageWrapper from './DashBoardComponents/DashboardPageWrapper/DashboardPageWrapper'
import EmptyBoardWaterMark from './DashBoardComponents/EmptyBoardWaterMark/EmptyBoardWaterMark'
import { useAppSelector } from '@/redux/hooks/typedHooks'
import { getChat } from '@/redux/slices/chattingWindows/chattingWindowsSlice'

const Dashboard = () => {
  const chat = useAppSelector(getChat)
  return (
    <DashboardPageWrapper>
        <UserPanel/>        
        <UserBoardWrapper>
          {
            chat.selectedGroup.length > 0 ?
            <>
              <BoardHeader>
                <HeaderWithAvatars/>
                <ChatingWindowsWrapper/>
              </BoardHeader>
              <ChatPanel/>
            </>
              :
              <EmptyBoardWaterMark/>
          }
          <div></div>
        </UserBoardWrapper>      
    </DashboardPageWrapper>
  )
}

export default Dashboard
