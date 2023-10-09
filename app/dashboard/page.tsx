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
import { useAppSelector } from '@/redux/hooks/typedHooks'
import { getChat } from '@/redux/slices/chattingWindows/chattingWindowsSlice'
import MediaQuery from 'react-responsive'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {getUserObject } from '@/redux/slices/userSession/userSessionSlice'
import { ioInstance } from '../utils/SocketInstance/socketInstance'
import { _on_AUTHUSER_ID_USER_IS_OFFLINE, _on_AUTHUSER_ID_USER_IS_ONLINE } from '../utils/SocketFriendListHandlers/SocketFriendListHandlers'

const Dashboard = () => {
  const {_id:groupId, group_name, group_description} = useAppSelector(getChat)
  const {_id:authUser, user_friends_ids} = useAppSelector(getUserObject)
  let settings = {
    speed: 500,
    Infinity:false,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  useEffect(() => {
    const socket = ioInstance.getActiveSocket()
    
    if(socket && authUser) {
      //LISTENERY NASŁUCHUJĄCE ZA EVENTAMI OD INNYCH UŻYTKOWNIKÓW DOTYCZĄCYMI ZMIANY ICH STANU W APLIKACJI(ONLINE/OFFLINE)
      _on_AUTHUSER_ID_USER_IS_ONLINE(socket, authUser)
      _on_AUTHUSER_ID_USER_IS_OFFLINE(socket, authUser)
      socket.emit("USER_IS_ACTIVE", authUser, user_friends_ids)
    }
  },[])
  return (
    <DashboardPageWrapper>
      {/* <button onClick={() => socket.emit("USER_IS_UNACTIVE", authUser, user_friends_ids, groupId)}>TEST UNLOAD</button> */}
      <MediaQuery minWidth={768}>
          <UserPanel/>        
          <UserBoardWrapper>
            {
              groupId ?
              <>
                <BoardHeader>
                  <HeaderWithAvatars chat_title={group_name as string} chat_description={group_description as string}/>
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
                groupId ?
                <>
                  <BoardHeader>
                    <HeaderWithAvatars chat_title={group_name as string} chat_description={group_description as string}/>
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
