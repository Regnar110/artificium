import React, { useEffect } from 'react'
import green_group from '../../../../../public/Dashboard/UserPanel/Groups/green.svg'
import SingleGroup from './GroupsComponents/SingleGroup'
import AddNewGroup from './GroupsComponents/AddNewGroup'
import PanelHeader from './GenericComponents/PanelHeader'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/typedHooks'
import { addActiveUserToGroup, getChat, getGroup, injectNewActiveUsers, isGroupSelected, removeUserFromgroup, selectGroup } from '@/redux/slices/chattingWindows/chattingWindowsSlice'
import { getStoredGroups } from '@/redux/slices/groups/groupsSlice'
import { ioInstance } from '@/app/utils/SocketInstance/socketInstance'
import { getUserObject } from '@/redux/slices/userSession/userSessionSlice'


// KOMPONENT RENDERUJĄCY ZNAJOMYCH DOSTĘPNYCH W WYBRANEJ PRZEZ UZYTKOWNIKA GRUPIE.
// PRZY ZAMONTOWANIU TEGO KOMPONENTU( CO DZIEJE SIĘ PO UPRZEDNIM WYBRANIU GRUPY) UŻYTKOWNIK ZOSTAJE DOŁĄCZONY PO STRONIE SERWERA
// DO POKOJU SOCKET.IO KTÓRY UMOŻLIWI MU EKSKLUZYWNE POŁĄCZENIE TYLKO Z UŻYTKOWNIKAMI Z TEJ SAMEJ GRUPY.
// PRZY ODMONTOWANIU WSZYSTKIE LISTENERY Z INSTANCJI SOCKET ZOSTANĄ USUNIĘTE A SAM UŻYTKOWNIK ZOSTANIE USUNIĘTY Z POKOJU SOCKET.IO
const Groups = () => {
  const dispatch = useAppDispatch()
  const userGroups = useAppSelector(getStoredGroups)
  const socket = ioInstance.getActiveSocket();
  const isGroupSelectedBool = useAppSelector(isGroupSelected)
  const user = useAppSelector(getUserObject)
  const selectedGroup = useAppSelector(getGroup)
  
  const groupSelect = (group_data:Group) => {
    
    // JEŻELI UŻYTKOWNIK JEST W JAKIEŚ GRUPIE TO:
    
    // SPRAWDZAMY CZY GRUPA KTÓRĄ WYBRAŁ UŻYTKOWNIK NIE JEST GRUPĄ W KTÓREJ OBECNIE PRZEBYWA
    if(isGroupSelectedBool === true) {
      if(group_data._id !== selectedGroup._id) { 
        // JEŻELI NIE JEST TO OPUSZCZAMY GRUPĘ W KTÓREJ PRZEBYWA ( BO KLIKNĄŁ INNĄ NIŻ TA  W KTÓREJ AKTUALNIE JEST) - jeżeli na odwrót to nic nie robimyu bo kliknął na grupę w której aktualnie jest
        socket.emit("LEAVE_GROUP_ROOM", selectedGroup._id , user._id)
        dispatch(selectGroup(group_data))        
      }
    } else {
      dispatch(selectGroup(group_data)) 
    }
  }

  // Hook useEffect tutaj służy do tego, żeby aktualizować ten komponent w przypadku gdy zostanie dodana lub usunięta grupa.
  // Inicjalny stan grup pobietrany jest TYLKO RAZ w komponencie nadrzędnym USERPANEL.
  // Komponent wykonuje akcje na bazie połączenia z pokojem po stronie servera (socket room) co umożliwia połączenie "na żywo" z innymi użytkownikami grupy.

  // TUTAJ TRZEBA ZROBIĆ JAKĄŚ MODULARYZACJĘ KODU. 
  useEffect(() => { 
    // Re-render komponentu jest zależy od grupy jaką wybrailiśmy,
      // Przy zmianie czatu emitujemy wiadomośc do socketa, że zmieniamy chat na chat._id( co jest id konkretnej grupy)
      // Wtedy na back-endzie jestśmy podłączeni do pokoju o nazwie konkretnego chatu.

      if(selectedGroup._id) {
        // PO ZMIANIE GRUPY EMITUJEMY WIADOMOŚĆ DO SERVERA ŻE DOŁĄCZYLIŚMY JAKO USER DO GRUPY O ID groupID
        user._id && socket.emit("JOIN_GROUP_ROOM", selectedGroup._id, user)
        
        //GROU_USER_LEAVE to event który zostaje aktywowany gdy jakiś z uczestników grupy w której jest użytkownik opuści ją! W ODPOWIEDZI DOSTAJEMY ID UŻYTKOWNIKA KTÓRY OPUŚCIŁ GRUPĘ
        socket.on("GROUP_USER_LEAVE", (...args) => {
          console.log("GROUP_USER_LEAVE")
          console.log(args[0])
          dispatch(removeUserFromgroup(args[0]))
        })

        //EVENT GDY KTOŚ DOŁĄCZA DO GRUPY. W ODPOWIEDZI DOSTAJEMY OBIEKT UŻYTKOWNIKA KTÓRY DOŁĄCZYŁ DO GRUPY
        //W ODPOWIEDZI NA EMIT JOINING_GROUP_ROOM OTRZYMAMY ODPOWIEDŹ Z POKOJU GRUPY GDZIE ...args[0] BĘDZIE OBIEKTEM UŻYTKOWNIKA, KTÓRY DOŁĄCZY DIO GRUPY.
        socket.on("GROUP_USER_JOIN", (...args) => {
          console.log("GROUP_USER_JOIN")
          console.log(args[0])
          dispatch(addActiveUserToGroup(args[0]))
        })

        // GDY ZMIENIMY GRUPĘ NA INNĄ DOSTAJEMY Z SERWERA AKTUALNĄ LISTĘ AKTYWNYCH UŻYTKOWNIKÓW W TEJ GRUPUIE!
        socket.on("CURRENT_ACTIVE_USERS", (...args) => {
          const current_active_users = args[0] as AuthenticatedUser[]
          console.log("CURRENT_ACTIVE_USERS")
          console.log(current_active_users)
          dispatch(injectNewActiveUsers(current_active_users))
        })
      }
      return () => {
        // Emitujemy do servera prośbę o odłączenie użytkownika z grupy po stronie serwera.
        // Ma to na celu, zapobiegnięcie dostarczania wiadomości wyłącznych dla użytkowników którzy są aktualnie w grupie użytkownikom, którzy ją opuścili.
        // user._id !== null && socket.emit("LEAVE_GROUP_ROOM", groupId, user._id)
      
        // jeżeli komponent zostanie odmontowany przy zmianie chat to wyłączamy poniższe listenery socketu
        // bez tego liczba listenerów przy re-renderowaniach będzie się na siebie nakładać co wywoła niepotrzebne dwojenie, trojenie itd listenerów
        socket.off(selectedGroup._id)
        socket.off("CURRENT_ACTIVE_USERS")
        socket.off("GROUP_USER_LEAVE")
        socket.off("GROUP_USER_JOIN")
        socket.off("GROUP_USER_LEAVE")
      }
    },[selectedGroup._id, user, userGroups])


  return (
    <div className='groups_container flex flex-col gap-y-4'>
      <PanelHeader title='Groups'/>
      <div className='groups flex flex-col gap-y-6 max-h-[300px] max-w-[250px] overflow-y-auto overflow-x-hidden scrollbar scrollbar-w-1 scrollbar-thumb-green-500 scrollbar-track-gray-100'>
        {
          userGroups.map(el => {
            return <SingleGroup key={el._id} group_id={el._id} groupSelect={() => groupSelect(el)} group_icon={green_group} group_title={el.group_name}/>
          })
        }
      </div>
      <AddNewGroup/>
    </div>
  )
}

export default Groups
