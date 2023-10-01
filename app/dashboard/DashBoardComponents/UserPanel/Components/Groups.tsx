import React, { useEffect } from 'react'
import green_group from '../../../../../public/Dashboard/UserPanel/Groups/green.svg'
import SingleGroup from './GroupsComponents/SingleGroup'
import AddNewGroup from './GroupsComponents/AddNewGroup'
import PanelHeader from './GenericComponents/PanelHeader'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/typedHooks'
import { getGroup, isGroupSelected, selectGroup } from '@/redux/slices/chattingWindows/chattingWindowsSlice'
import { getStoredGroups } from '@/redux/slices/groups/groupsSlice'
import { ioInstance } from '@/app/utils/SocketInstance/socketInstance'
import { getUserObject } from '@/redux/slices/userSession/userSessionSlice'
import { 
  _emit_JOIN_GROUP_ROOM, 
  _emit_LEAVE_GROUP_ROOM, 
  _on_CURRENT_ACTIVE_USERS, 
  _on_GROUP_USER_JOIN,
  _on_GROUP_USER_LEAVE, 
  unsubscribeGroupRoomListeners 
} from '@/app/utils/SocketGroupRoomHandlers.ts/SocketGroupRoomHandlers'


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
      if(group_data && group_data._id !== selectedGroup._id) { 
        // JEŻELI NIE JEST TO OPUSZCZAMY GRUPĘ W KTÓREJ PRZEBYWA ( BO KLIKNĄŁ INNĄ NIŻ TA  W KTÓREJ AKTUALNIE JEST) - jeżeli na odwrót to nic nie robimyu bo kliknął na grupę w której aktualnie jest
        _emit_LEAVE_GROUP_ROOM(socket, selectedGroup._id!, user._id)

        // I DOŁACZAMY DO NOWEJ GRUPY NA KTÓRĄ KLIKNĄŁ UŻYTKOWNIK
        _emit_JOIN_GROUP_ROOM(socket, group_data._id, user)
        dispatch(selectGroup(group_data))        
      }
      // PONIŻEJ JEŻELI UŻYTKOWNIK NIE MA WYBRANE ŻADNEJ GRUPY
    } else {
      _emit_JOIN_GROUP_ROOM(socket, group_data._id, user)
      dispatch(selectGroup(group_data)) 
    }
  }

  // Hook useEffect tutaj służy do tego, żeby aktualizować ten komponent w przypadku gdy zostanie dodana lub usunięta grupa.
  // Inicjalny stan grup pobietrany jest TYLKO RAZ w komponencie nadrzędnym USERPANEL.
  // Komponent wykonuje akcje na bazie połączenia z pokojem po stronie servera (socket room) co umożliwia połączenie "na żywo" z innymi użytkownikami grupy.

  useEffect(() => { 
    console.log("GROUPS WYWOŁANY EFFECT")
    // Re-render komponentu jest zależy od grupy jaką wybrailiśmy,
      // Przy zmianie czatu emitujemy wiadomośc do socketa, że zmieniamy chat na chat._id( co jest id konkretnej grupy)
      // Wtedy na back-endzie jestśmy podłączeni do pokoju o nazwie konkretnego chatu.

      if(selectedGroup._id) {
        // window.addEventListener("beforeunload", () => _emit_LEAVE_GROUP_ROOM(socket, selectedGroup._id!, user._id))
        // POWYZSZE WYWOŁYWAŁO DODATKOWY EVENT DO SOCKETA (DLA PROVIDERA - pOZOSTAŁ JEDEN DO WYKRYCIA)

        
        // PO ZMIANIE GRUPY EMITUJEMY WIADOMOŚĆ DO SERVERA ŻE DOŁĄCZYLIŚMY JAKO USER DO GRUPY O ID groupID
        
        //GROU_USER_LEAVE to event który zostaje aktywowany gdy jakiś z uczestników grupy w której jest użytkownik opuści ją! W ODPOWIEDZI DOSTAJEMY ID UŻYTKOWNIKA KTÓRY OPUŚCIŁ GRUPĘ
        _on_GROUP_USER_LEAVE(socket, dispatch, selectedGroup.group_name!)

        //EVENT GDY KTOŚ DOŁĄCZA DO GRUPY. W ODPOWIEDZI DOSTAJEMY OBIEKT UŻYTKOWNIKA KTÓRY DOŁĄCZYŁ DO GRUPY
        //W ODPOWIEDZI NA EMIT JOINING_GROUP_ROOM OTRZYMAMY ODPOWIEDŹ Z POKOJU GRUPY GDZIE ...args[0] BĘDZIE OBIEKTEM UŻYTKOWNIKA, KTÓRY DOŁĄCZY DIO GRUPY.
        _on_GROUP_USER_JOIN(socket, dispatch, selectedGroup.group_name!)

        // GDY ZMIENIMY GRUPĘ NA INNĄ DOSTAJEMY Z SERWERA AKTUALNĄ LISTĘ AKTYWNYCH UŻYTKOWNIKÓW W TEJ GRUPUIE!
        _on_CURRENT_ACTIVE_USERS(socket, dispatch)
      }
      return () => {
        // jeżeli komponent zostanie odmontowany przy zmianie chat to wyłączamy poniższe listenery socketu
        // bez tego liczba listenerów przy re-renderowaniach będzie się na siebie nakładać co wywoła niepotrzebne dwojenie, trojenie itd listenerów
        unsubscribeGroupRoomListeners(socket, selectedGroup._id!)

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
