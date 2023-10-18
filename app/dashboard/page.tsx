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
import ControllerMenu from './Test_Dashboard/ControllerMenu/ControllerMenu'
import { currentUIState } from '@/redux/slices/dashboardUI_controller/dashboardUI_controller'
import NewUserPanel from './Test_Dashboard/NewUserPanel/NewUserPanel'
import FriendsListWrapper from './DashBoardComponents/ChatPanel/Components/UserList/FriendsListWrapper/FriendsListWrapper'
import GroupPanel from './Test_Dashboard/GroupPanel/GroupPanel'
import ChatHeader from './Test_Dashboard/Chat/ChatHeader/ChatHeader'
const Dashboard = () => {
  const {_id:groupId, group_name, group_description} = useAppSelector(getChat)
  const user = useAppSelector(getUserObject)
  const UI_TYPE = useAppSelector(currentUIState)
  let settings = {
    speed: 500,
    Infinity:false,
    slidesToShow:1,
    slidesToScroll: 1
  }
  useEffect(() => {
    const socket = ioInstance.getActiveSocket()
    console.log("PAGE MOUNT")
    if(socket && user._id) {
      //LISTENERY NASŁUCHUJĄCE ZA EVENTAMI OD INNYCH UŻYTKOWNIKÓW DOTYCZĄCYMI ZMIANY ICH STANU W APLIKACJI(ONLINE/OFFLINE)
      _on_AUTHUSER_ID_USER_IS_ONLINE(socket, user._id)
      _on_AUTHUSER_ID_USER_IS_OFFLINE(socket, user._id)

      // PONIŻSZE EMITUJE ZAPYTANIE DO SERWERA CZY UŻYTKOWNIK JEST AKTYWNY CZY NIE. JEŻELI NIE TO PRZY PONOWNYM ZAMONTOWANIU TEGO KOMPONENTU EMITUJEMY WIADOMOŚĆ DO ZNAJOMYCH ŻE JUŻ JEST AKTYWNY(ONLINE)
      socket.emit("USER_IS_ACTIVE", user._id, user.user_friends_ids)
    }
  },[])
  return (
    <DashboardPageWrapper>
      {/* <MediaQuery minWidth={768}> */}
          <ControllerMenu/>
          {UI_TYPE.controller_panel.type === "user" ? <NewUserPanel/>:<div className='hidden'/>}
          {UI_TYPE.controller_panel.type === "group" ? <GroupPanel/>:<div className='hidden'/>}
          <UserBoardWrapper>
            {
              groupId ?
              <>
                <ChatHeader group_name={group_name as string} group_description={group_description as string}/>
                <ChatPanel/>
              </>
                :
                <EmptyBoardWaterMark/>
            } 
            <div></div>
          </UserBoardWrapper>
          <FriendsListWrapper/>


          <div className='hidden'></div>
          <div className='hidden'></div>
    </DashboardPageWrapper>
  )
}

export default Dashboard




      {/* </MediaQuery>

      {/*Wersja ze sliderem dla wersji mobilnych poniżej 768px*/}
      {/* PROBLEM TEJ WERSJI POLEGA NA TYM ŻE KOMPONENT SLIDER POWODUJE DODATKOWE RE-RENDERY NASZYCH KOMPONENTÓW. DO ZASTĄPIENIA */}

      {/* <MediaQuery maxWidth={767}>
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
      </MediaQuery> */}