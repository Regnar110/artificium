import React, { useEffect } from 'react'
import artificium_icon from '../../../../../public/Dashboard/UserBoard/artificium_icon.svg'
import chat from '../../../../../public/Dashboard/UserBoard/chat.svg'
import library from '../../../../../public/Dashboard/UserBoard/library.svg'
import admin_panel from '../../../../../public/controller/admin_panel.svg'
import ControllerFooter from '../../ControllerFooter/ControllerFooter'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/typedHooks'
import { getUserObject } from '@/redux/slices/userSession/userSessionSlice'
import { UI_VIEW_CHANGE, currentUIState } from '@/redux/slices/dashboardUI_controller/dashboardUI_controller'
import { getChat, selectWindow } from '@/redux/slices/chattingWindows/chattingWindowsSlice'
import PanelOptions from '../../PanelOptions/PanelOptions'
import SingleOption from '../../PanelOptions/SingleOption'
import GroupMembersPanelList from '../../ScrollPanelList/GroupMembersPanelList'
import PanelSection from '../PanelSection'
import { _on_GROUP_USER_LEAVE, _on_GROUP_USER_JOIN, _on_CURRENT_ACTIVE_USERS, unsubscribeGroupRoomListeners } from '@/app/utils/SocketGroupRoomHandlers.ts/SocketGroupRoomHandlers'
import { ioInstance } from '@/app/utils/SocketInstance/socketInstance'
import { getStoredGroups } from '@/redux/slices/groups/groupsSlice'
const GroupPanel = () => {
  const {type, status} = useAppSelector(currentUIState).controller_panel
  const userObject = useAppSelector(getUserObject)
  const socket = ioInstance.getActiveSocket()
  const {_id:groupId, group_name, group_admin}= useAppSelector(getChat)
  const userGroups = useAppSelector(getStoredGroups)
  const dispatch = useAppDispatch()
  const handleChatWindowSelection = (windowType:"artificium" | "chat" | "library",) => {    
      dispatch(selectWindow(windowType))
      dispatch(UI_VIEW_CHANGE({UI:"controller_panel", status:false}))
  }

  useEffect(() => {
    if(groupId) {
      // GRUPA JEST WYBRANA
      // PO ZMIANIE GRUPY EMITUJEMY WIADOMOŚĆ DO SERVERA ŻE DOŁĄCZYLIŚMY JAKO USER DO GRUPY O ID groupID
      //GROU_USER_LEAVE to event który zostaje aktywowany gdy jakiś z uczestników grupy w której jest użytkownik opuści ją! W ODPOWIEDZI DOSTAJEMY ID UŻYTKOWNIKA KTÓRY OPUŚCIŁ GRUPĘ
      _on_GROUP_USER_LEAVE(socket, dispatch, group_name!)

      //EVENT GDY KTOŚ DOŁĄCZA DO GRUPY. W ODPOWIEDZI DOSTAJEMY OBIEKT UŻYTKOWNIKA KTÓRY DOŁĄCZYŁ DO GRUPY
      //W ODPOWIEDZI NA EMIT JOINING_GROUP_ROOM OTRZYMAMY ODPOWIEDŹ Z POKOJU GRUPY GDZIE ...args[0] BĘDZIE OBIEKTEM UŻYTKOWNIKA, KTÓRY DOŁĄCZY DIO GRUPY.
      _on_GROUP_USER_JOIN(socket, dispatch, group_name!)

      // GDY ZMIENIMY GRUPĘ NA INNĄ DOSTAJEMY Z SERWERA AKTUALNĄ LISTĘ AKTYWNYCH UŻYTKOWNIKÓW W TEJ GRUPUIE!
      _on_CURRENT_ACTIVE_USERS(socket, dispatch)
    }
    return () => {
      unsubscribeGroupRoomListeners(socket, groupId!)
    }
  },[groupId, userGroups, userObject])

  return (
    <PanelSection status={type ==="group" && status ? true : false}>
      <PanelOptions header='CHAT WINDOWS'>
        <SingleOption text='Chat' icon={chat} onClickCallback={() => handleChatWindowSelection("chat")}/>
        <SingleOption text='Artificium' icon={artificium_icon}/>
        <SingleOption text='Library' icon={library}/>
      </PanelOptions>
      {
        group_admin === userObject._id ?
        <PanelOptions header='Mange Group'>
          <SingleOption text='Manage' icon={admin_panel} modal={true} modalType='groupManage'/>
          <div/>
        </PanelOptions>
        :
        <div className='hidden'/>
      }
      <GroupMembersPanelList header='GROUP MEMBERS'/>
      <ControllerFooter/>
    </PanelSection>

  )
}

export default GroupPanel
