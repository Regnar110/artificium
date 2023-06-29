import React from 'react'
import UserPanel from './DashBoardComponents/UserPanel/UserPanel'
import UserBoardWrapper from './DashBoardComponents/UserBoard/UserBoardWrapper'
import ChatingWindowsWrapper from './DashBoardComponents/UserBoard/Components/ChattingWindows/ChatingWindowsWrapper'
import BoardHeader from './DashBoardComponents/UserBoard/Components/BoardHeader/BoardHeader'
import HeaderWithAvatars from './DashBoardComponents/UserBoard/Components/BoardHeader/HeaderWithAvatars/HeaderWithAvatars'
import ChatPanel from './DashBoardComponents/ChatPanel/ChatPanel'
import artificium_icon from '../../public/Dashboard/UserBoard/artificium_icon.svg'
import ChattingWindow from './DashBoardComponents/UserBoard/Components/ChattingWindows/ChattingWindow'

const Dashboard = () => {
  return (
    <main className='dashboard box-border text-black bg-[#131619] w-full p-5 flex gap-3 min-h-screen'>
      <UserPanel/>        
      <UserBoardWrapper>
        <BoardHeader>
          <HeaderWithAvatars/>
          <ChatingWindowsWrapper/>
          {/* <ChatingWindowsWrapper renderItemsProps={[
            {
              window_slug:"artificium",
              window_icon: artificium_icon,
              window_name:"Artificium"
            },
            {
              window_slug:"artificium",
              window_icon: artificium_icon,
              window_name:"Artificium"
            },
            {
              window_slug:"artificium",
              window_icon: artificium_icon,
              window_name:"Artificium"
            }
          ]}
          renderFn={
            async (item, isClicked) => {
              'use server'
              return <ChattingWindow window_slug={item.window_slug} window_icon={item.window_icon} window_name={item.window_name} isClicked={isClicked}/>
            } 
          }
          /> */}
        </BoardHeader>
        <ChatPanel/>
      </UserBoardWrapper>
        
    </main>
  )
}

export default Dashboard
