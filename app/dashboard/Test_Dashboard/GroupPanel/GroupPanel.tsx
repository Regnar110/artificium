import React, { useEffect, useState } from 'react'
import artificium_icon from '../../../../public/Dashboard/UserBoard/artificium_icon.svg'
import chat from '../../../../public/Dashboard/UserBoard/chat.svg'
import library from '../../../../public/Dashboard/UserBoard/library.svg'
import admin_panel from '../../../../public/controller/admin_panel.svg'
import ControllerFooter from '../ControllerFooter/ControllerFooter'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/typedHooks'
import { getUserObject } from '@/redux/slices/userSession/userSessionSlice'
import { UI_VIEW_CHANGE, currentUIState } from '@/redux/slices/dashboardUI_controller/dashboardUI_controller'
import { getChat, selectWindow } from '@/redux/slices/chattingWindows/chattingWindowsSlice'
import PanelOptions from '../PanelOptions/PanelOptions'
import SingleOption from '../PanelOptions/SingleOption'
import GroupMembersPanelList from '../ScrollPanelList/ScrollPanelList'
const GroupPanel = () => {
  const {type, status} = useAppSelector(currentUIState).controller_panel
  const userObject = useAppSelector(getUserObject)
  const {group_admin} = useAppSelector(getChat)
  const dispatch = useAppDispatch()
  const handleChatWindowSelection = (windowType:"artificium" | "chat" | "library",) => {    
      dispatch(selectWindow(windowType))
      dispatch(UI_VIEW_CHANGE({UI:"controller_panel", status:false}))
  }

  return (
    <section className={`bg-[#131619] ${status === true && type === "group" ? "right-0 min-w-[200px]  md:w-[100%]":"right-full w-[0px]"} max-w-[70%] md:max-w-[200px] lg:max-w-[250px] text-[#9B9C9E] font-plus_jakarta_sans transition-all duration-300  relative  flex flex-col items-center gap-y-3  h-[100vh]`}>
      <PanelOptions header='CHAT WINDOWS'>
        <SingleOption text='Chat' icon={chat} onClickCallback={() => handleChatWindowSelection("chat")}/>
        <SingleOption text='Artificium' icon={artificium_icon}/>
        <SingleOption text='Library' icon={library}/>
      </PanelOptions>
      {
        group_admin === userObject._id &&
        <PanelOptions header='Mange Group'>
          <SingleOption text='Manage' icon={admin_panel} modal={true} modalType='groupManage'/>
          <div/>
        </PanelOptions>
      }
      <GroupMembersPanelList header='GROUP MEMBERS'/>
      <ControllerFooter/>
    </section>
  )
}

export default GroupPanel
