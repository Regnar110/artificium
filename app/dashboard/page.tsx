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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Dashboard = () => {
  let settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  const chat = useAppSelector(getChat)
  return (
    <DashboardPageWrapper>
      <Slider className=''  {...settings}>
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
          </Slider>
          <div></div>
          <div></div>
              
    </DashboardPageWrapper>
  )
}

export default Dashboard
