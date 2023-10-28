'use client'
import React, { useEffect } from 'react'
import UserBoardWrapper from './DashBoardComponents/UserBoard/UserBoardWrapper'
import ChatPanel from './DashBoardComponents/ChatPanel/ChatPanel'
import DashboardPageWrapper from './DashBoardComponents/DashboardPageWrapper/DashboardPageWrapper'
import EmptyBoardWaterMark from './DashBoardComponents/EmptyBoardWaterMark/EmptyBoardWaterMark'
import { useAppSelector } from '@/redux/hooks/typedHooks'
import { getChat } from '@/redux/slices/chattingWindows/chattingWindowsSlice'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {getUserObject } from '@/redux/slices/userSession/userSessionSlice'
import { ioInstance } from '../utils/SocketInstance/socketInstance'
import { _on_AUTHUSER_ID_USER_IS_OFFLINE, _on_AUTHUSER_ID_USER_IS_ONLINE } from '../utils/SocketFriendListHandlers/SocketFriendListHandlers'
import ControllerMenu from './Test_Dashboard/ControllerMenu/ControllerMenu'
import NewUserPanel from './Test_Dashboard/SidePanels/NewUserPanel/NewUserPanel'
import GroupPanel from './Test_Dashboard/SidePanels/GroupPanel/GroupPanel'
import ChatHeader from './Test_Dashboard/Chat/ChatHeader/ChatHeader'
const Dashboard = () => {
  const {_id:groupId, group_name, group_description} = useAppSelector(getChat)
  const user = useAppSelector(getUserObject)
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
          <ControllerMenu/>
          <NewUserPanel/>
          <GroupPanel/>
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
            <div/>
          </UserBoardWrapper>
    </DashboardPageWrapper>
  )
}

export default Dashboard