'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import UserAvatarWithStatus from '../../../../../../AppComponents/UserAvatarWithStatus/UserAvatarWithStatus'
import user_avatar from '../../../../../../../public/Dashboard/UserBoard/user_avatar.png'
import share from '../../../../../../../public/Dashboard/UserBoard/share.svg'
import edit from '../../../../../../../public/Dashboard/UserBoard/edit.svg'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/typedHooks'
import { addActiveUserToGroup, getChat, getGroup, removeUserFromgroup } from '@/redux/slices/chattingWindows/chattingWindowsSlice'
import { ioInstance } from '@/app/utils/SocketInstance/socketInstance'
import { getUserId } from '@/redux/slices/userSession/userSessionSlice'


// KOMPONENT RENDERUJĄCY ZNAJOMYCH DOSTĘPNYCH W WYBRANEJ PRZEZ UZYTKOWNIKA GRUPIE.
// PRZY ZAMONTOWANIU TEGO KOMPONENTU( CO DZIEJE SIĘ PO UPRZEDNIM WYBRANIU GRUPY) UŻYTKOWNIK ZOSTAJE DOŁĄCZONY PO STRONIE SERWERA
// DO POKOJU SOCKET.IO KTÓRY UMOŻLIWI MU EKSKLUZYWNE POŁĄCZENIE TYLKO Z UŻYTKOWNIKAMI Z TEJ SAMEJ GRUPY.
// PRZY ODMONTOWANIU WSZYSTKIE LISTENERY Z INSTANCJI SOCKET ZOSTANĄ USUNIĘTE A SAM UŻYTKOWNIK ZOSTANIE USUNIĘTY Z POKOJU SOCKET.IO


const BoardAvatars = () => {

    const {_id:groupId} = useAppSelector(getChat)
    const userId = useAppSelector(getUserId)
    const group = useAppSelector(getGroup)
    const dispatch = useAppDispatch()
    useEffect(() => { 
      console.log("GRUPA TO")
      console.log(group)
      // Re-render komponentu jest zależy od grupy jaką wybrailiśmy,
        // Przy zmianie czatu emitujemy wiadomośc do socketa, że zmieniamy chat na chat._id( co jest id konkretnej grupy)
        // Wtedy na back-endzie jestśmy podłączeni do pokoju o nazwie konkretnego chatu.
        const socket = ioInstance.getActiveSocket();
        if(groupId) {
          socket.emit("JOIN_GROUP_ROOM", groupId, userId)
          socket.on("JOINING_GROUP", (...args) => {
            // GDY DOŁĄCZYMY DO GRUPY OTRZYMUJEMY LISTĘ POCZĄTKOWĄ ACTIVE_USERS
          }) 
          socket.on(groupId, (...args) => console.log(args))

          //GROU_USER_LEAVE to event który zostaje aktywowany gdy jakiś z uczestników grupy w której jest użytkownik opuści ją! W ODPOWIEDZI DOSTAJEMY ID UŻYTKOWNIKA KTÓRY OPUŚCIŁ GRUPĘ
          socket.on("GROUP_USER_LEAVE", (...args) => {
            dispatch(removeUserFromgroup(args[0]))
            console.log(`UŻYTKOWNIK ${args[0]} OPUŚCIŁ POKÓJ GRUPY`)
            console.log(args[0])
            
          })

          //EVENT GDY KTOŚ DOŁĄCZA DO GRUPY. W ODPOWIEDZI DOSTAJEMY OBIEKT UŻYTKOWNIKA KTÓRY DOŁĄCZYŁ DO GRUPY
          socket.on("GROUP_USER_JOIN", (...args) => {
            console.log(`UŻYTKOWNIK ${args[0]} DOŁĄCZYŁ DO GRUPY`)
            dispatch(addActiveUserToGroup(args[0]))
            console.log(args[0])
          })
        }
        return () => {
          // Emitujemy do servera prośbę o odłączenie użytkownika z grupy po stronie serwera.
          // Ma to na celu, zapobiegnięcie dostarczania wiadomości wyłącznych dla użytkowników którzy są aktualnie w grupie użytkownikom, którzy ją opuścili.
          socket.emit("LEAVE_GROUP_ROOM", groupId, userId)
        
          // jeżeli komponent zostanie odmontowany przy zmianie chat to wyłączamy listener socketu o nazwie chat._id
          // bez tego liczba listenerów przy re-renderowaniach będzie się na siebie nakładać co wywoła niepotrzebneodpowiedzi z serwera.

          socket.off(groupId)
          socket.off("GROUP_USER_LEAVE")
          socket.off("GROUP_USER_JOIN")
          socket.off("GROUP_USER_LEAVE")
        }
      },[groupId, userId])
      

    return (
        <div className='avatar_functionalities flex gap-6 w-fit'>
          <button onClick={() => console.log(group)}>CLICK</button>
            <div className='users_avatars_status_container flex'>
                <UserAvatarWithStatus user_avatar={user_avatar} user_status={{with_dot:true, status:"ONLINE"}}/>
                <UserAvatarWithStatus user_avatar={user_avatar} user_status={{with_dot:true, status:"OFFLINE"}}/>
                <UserAvatarWithStatus user_avatar={user_avatar} user_status={{with_dot:true, status:"OFFLINE"}}/>

                <div className='hidden_users_count cursor-pointer bg-[#1A1D21] text-[#686B6E] w-[40px] h-[40px] flex justify-center items-center rounded-full'>
                    +4
                </div>                
            </div>
            <div className='share_head_button relative font-plus_jakarta_sans flex items-center justify-center gap-x-3 cursor-pointer'>
                <Image className='w-auto' width={60} height={60} src={share} alt='share_icon'/>
                <span className='text-[#686B6E] text-[19px] font-semibold w-fit'>Share</span>
            </div>
            <div className='edit_head_button relative font-plus_jakarta_sans flex items-center justify-center gap-x-3 bg-[#1A1D21] rounded-lg cursor-pointer p-2'>
                <Image className='w-auto' width={150} height={150} src={edit} alt='edit_icon'/>
            </div>
        </div>
    )
}

export default BoardAvatars
