import React, { useEffect } from 'react'
import GroupField from './GroupField/GroupField'
import { userAccessRequest } from '@/app/utils/UserAccessRequest'
import { getStoredGroups, injectInitialGroups } from '@/redux/slices/groups/groupsSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/typedHooks'
import { getUserObject } from '@/redux/slices/userSession/userSessionSlice'
import { getGroup, isGroupSelected, selectGroup } from '@/redux/slices/chattingWindows/chattingWindowsSlice'
import { _emit_LEAVE_GROUP_ROOM, _emit_JOIN_GROUP_ROOM, _on_CURRENT_ACTIVE_USERS, _on_GROUP_USER_JOIN, _on_GROUP_USER_LEAVE, unsubscribeGroupRoomListeners } from '@/app/utils/SocketGroupRoomHandlers.ts/SocketGroupRoomHandlers'
import { ioInstance } from '@/app/utils/SocketInstance/socketInstance'
import { UI_VIEW_CHANGE } from '@/redux/slices/dashboardUI_controller/dashboardUI_controller'


const ControllerGroups = () => {
    // Tu będziemy inicjalizować grupy
const dispatch = useAppDispatch()
const groups = useAppSelector(getStoredGroups)
const isGroupSelectedBool = useAppSelector(isGroupSelected)
const {_id:authUser} = useAppSelector(getUserObject)
const {_id:groupId, group_name} = useAppSelector(getGroup)
const socket = ioInstance.getActiveSocket();
const user = useAppSelector(getUserObject)

const groupSelect = (group_data:Group) => {
  // JEŻELI UŻYTKOWNIK JEST W JAKIEŚ GRUPIE TO:
  // SPRAWDZAMY CZY GRUPA KTÓRĄ WYBRAŁ UŻYTKOWNIK NIE JEST GRUPĄ W KTÓREJ OBECNIE PRZEBYWA
  dispatch(UI_VIEW_CHANGE({UI:"controller_panel", status:true, type:"group"}))
  if(isGroupSelectedBool === true) {
    if(group_data && group_data._id !== groupId) {
      console.log("ZMIANA GRUPY W TRAKCIE. EMITY URUCHAMIANE")
      // JEŻELI NIE JEST TO OPUSZCZAMY GRUPĘ W KTÓREJ PRZEBYWA ( BO KLIKNĄŁ INNĄ NIŻ TA  W KTÓREJ AKTUALNIE JEST) - jeżeli na odwrót to nic nie robimyu bo kliknął na grupę w której aktualnie jest
      _emit_LEAVE_GROUP_ROOM(socket, groupId!, user._id)

      // I DOŁACZAMY DO NOWEJ GRUPY NA KTÓRĄ KLIKNĄŁ UŻYTKOWNIK
      _emit_JOIN_GROUP_ROOM(socket, group_data._id, user)
      dispatch(selectGroup(group_data))        
    }
    // PONIŻEJ JEŻELI UŻYTKOWNIK NIE MA WYBRANE ŻADNEJ GRUPY
  } else {
    console.log("DOŁACZAM DO PIERWSZEJ GRUPY")
    _emit_JOIN_GROUP_ROOM(socket, group_data._id, user)
    dispatch(selectGroup(group_data)) 
  }
}

  useEffect(() => {
    const getGroups = async () => {
      const response = await userAccessRequest<Group[] | UserAccessErrorResponse, any>('getUserGroups', {user_id: authUser})
      console.log(response)
      if('status' in response && response.status) {
        console.log(response)
      } else {
        dispatch(injectInitialGroups(response as Group[]))
      }
      return response
    }
    getGroups()

        // Re-render komponentu jest zależy od grupy jaką wybrailiśmy,
      // Przy zmianie czatu emitujemy wiadomośc do socketa, że zmieniamy chat na chat._id( co jest id konkretnej grupy)
      // Wtedy na back-endzie jestśmy podłączeni do pokoju o nazwie konkretnego chatu.
      const handleBeforeUnload = () =>  socket.emit("USER_IS_UNACTIVE", user._id, user.user_friends_ids, groupId)
      window.addEventListener("beforeunload", handleBeforeUnload)
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
        // PONIŻSZE SŁUŻY DO ZMIANY AKTYWNOŚCI UŻYTKOWNIKA. JEST TO FUNKCJONALNOŚĆ< KTÓRA BĘDZIE WYKORZYSTANA GDY  
        // jeżeli komponent zostanie odmontowany przy zmianie chat to wyłączamy poniższe listenery socketu
        // bez tego liczba listenerów przy re-renderowaniach będzie się na siebie nakładać co wywoła niepotrzebne dwojenie, trojenie itd listenerów
        unsubscribeGroupRoomListeners(socket, groupId!)
        window.removeEventListener("beforeunload", handleBeforeUnload)

      }
  },[authUser, groupId, groups])
  return (
    <section id='controller_groups' className='max-h-[300px] overflow-y-auto overflow-x-hidden scrollbar scrollbar-w-1 scrollbar-thumb-[#1A1D21] scrollbar-track-transparent'>
        {
          groups.map(group => (
            <GroupField key={group._id} group_id={group._id}  group_title={group.group_name}  groupSelect={() => groupSelect(group)}/>
          ))
        }
    </section>
  )
}

export default ControllerGroups
