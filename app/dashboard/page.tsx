'use client'
import React, { useEffect } from 'react'
import UserPanel from './DashBoardComponents/UserPanel/UserPanel'
import UserBoardWrapper from './DashBoardComponents/UserBoard/UserBoardWrapper'
import ChatingWindowsWrapper from './DashBoardComponents/UserBoard/Components/ChattingWindows/ChatingWindowsWrapper'
import BoardHeader from './DashBoardComponents/UserBoard/Components/BoardHeader/BoardHeader'
import HeaderWithAvatars from './DashBoardComponents/UserBoard/Components/BoardHeader/HeaderWithAvatars/HeaderWithAvatars'
import ChatPanel from './DashBoardComponents/ChatPanel/ChatPanel'
import DashboardPageWrapper from './DashBoardComponents/DashboardPageWrapper/DashboardPageWrapper'
import EmptyBoardWaterMark from './DashBoardComponents/EmptyBoardWaterMark/EmptyBoardWaterMark'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/typedHooks'
import { getChat } from '@/redux/slices/chattingWindows/chattingWindowsSlice'
import MediaQuery from 'react-responsive'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { authUserSignOut } from '../utils/AuthUserSignOut/authUserSignOut'
import { getUserId, getUserProvider } from '@/redux/slices/userSession/userSessionSlice'

const Dashboard = () => {
  const chat = useAppSelector(getChat)  
  const {_id:groupId} =  useAppSelector(getChat)
  const dispatch = useAppDispatch()
  const authUser = useAppSelector(getUserId)
  const userProvider = useAppSelector(getUserProvider)
  let settings = {
    speed: 500,
    Infinity:false,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  // useEffect(() => {
  //   window.addEventListener("beforeunload", async () => {
  //     await authUserSignOut({userProvider, authUser, dispatch, groupId})
  //   })

  //   return () => {
  //     window.removeEventListener("beforeunload", async () => {
  //       await authUserSignOut({userProvider, authUser, dispatch, groupId})
  //     })
  //   }
  // })
  return (
    <DashboardPageWrapper>
      <MediaQuery minWidth={768}>
          <UserPanel/>        
          <UserBoardWrapper>
            {
              chat._id ?
              <>
                <BoardHeader>
                  <HeaderWithAvatars chat_title={chat.group_name as string} chat_description={chat.group_description as string}/>
                  <ChatingWindowsWrapper/>
                </BoardHeader>
                <ChatPanel/>
              </>
                :
                <EmptyBoardWaterMark/>
            } 
            <div></div>
          </UserBoardWrapper>   
      </MediaQuery>

      {/*Wersja ze sliderem dla wersji mobilnych poniżej 768px*/}
      <MediaQuery maxWidth={767}>
        <Slider className=''  {...settings}>
            <UserPanel/>        
            <UserBoardWrapper>
              {
                chat._id ?
                <>
                  <BoardHeader>
                    <HeaderWithAvatars chat_title={chat.group_name as string} chat_description={chat.group_description as string}/>
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
      </MediaQuery>
          <div className='hidden'></div>
          <div className='hidden'></div>
    </DashboardPageWrapper>
  )
}

export default Dashboard
