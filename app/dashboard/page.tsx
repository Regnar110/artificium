'use client' // FOR SOCKET CLIENT TEST
import { io } from "socket.io-client";
import React, { useEffect } from 'react'
import UserPanel from './DashBoardComponents/UserPanel/UserPanel'
import UserBoardWrapper from './DashBoardComponents/UserBoard/UserBoardWrapper'
import ChatingWindowsWrapper from './DashBoardComponents/UserBoard/Components/ChattingWindows/ChatingWindowsWrapper'
import BoardHeader from './DashBoardComponents/UserBoard/Components/BoardHeader/BoardHeader'
import HeaderWithAvatars from './DashBoardComponents/UserBoard/Components/BoardHeader/HeaderWithAvatars/HeaderWithAvatars'
import ChatPanel from './DashBoardComponents/ChatPanel/ChatPanel'
import DashboardPageWrapper from './DashBoardComponents/DashboardPageWrapper/DashboardPageWrapper'

const Dashboard = () => {
  useEffect(() => {
    const socket = io('http://localhost:3001/')
    socket.on('messageReceived', (message) => {
      console.log("wiadomosc to", message)
      socket.emit("SIemanooooo","siemka")
    })
    return () => {
      socket.disconnect()
    }
  },[])
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
