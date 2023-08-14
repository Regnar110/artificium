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
import { getUserId, getUserProvider, isUserAuthenticated } from '@/redux/slices/userSession/userSessionSlice'
import { getSocketInstance } from '../utils/SocketInstance/socketInstance'
import { authUserSignOut } from '../utils/AuthUserSignOut/authUserSignOut'
import { useSession } from 'next-auth/react'
import { Session } from 'next-auth'
import { useRouter } from 'next/navigation'
import { turnOnNotification } from '../AppComponents/ToastNotifications/TurnOnNotification'
const Dashboard = () => {
  const authUser = useAppSelector(getUserId)
  let socket = getSocketInstance({authUser})
  socket.connect()
  const userSession = useAppSelector(isUserAuthenticated)
  const providerSession = useSession()
  const router = useRouter()
  const dispatch = useAppDispatch()
  useEffect(() => {
    if(userSession) {
      console.log("DASH PAGE MOUNT")
      socket.on("connection_response", async (data) => {
        console.log(data)
        // jezeli z jakiegoś powodu nie udało się nawiązać połączenia z socketem rusza procedura wylogowania użytkownika razem z zamknięciem połączenia socket io.
        if(data === false) {
          await authUserSignOut({providerSession:providerSession.data as Session, userSession, authUser, dispatch, socket})
          turnOnNotification({response:{
            status:500,
            client_message:"Failed to establish a stable connection to the server IO instance"
          } as UserAccessErrorResponse})
        }
      })      
    } else {
      console.log("BRAK SESJI DASHBOARD PAGE")
    }

    return () => {
      socket.close()
    }
  },[userSession, providerSession])
  let settings = {
    speed: 500,
    Infinity:false,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  const chat = useAppSelector(getChat)
  return (
    <DashboardPageWrapper>
      <MediaQuery minWidth={768}>
          <UserPanel socket={socket}/>        
          <UserBoardWrapper>
            {
              chat.selectedGroup._id ?
              <>
                <BoardHeader>
                  <HeaderWithAvatars chat_title={chat.selectedGroup.group_name as string} chat_description={chat.selectedGroup.group_description as string}/>
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
                chat.selectedGroup._id ?
                <>
                  <BoardHeader>
                    <HeaderWithAvatars chat_title={chat.selectedGroup.group_name as string} chat_description={chat.selectedGroup.group_description as string}/>
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
