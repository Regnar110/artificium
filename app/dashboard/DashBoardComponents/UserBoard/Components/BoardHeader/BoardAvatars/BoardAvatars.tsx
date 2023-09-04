'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import UserAvatarWithStatus from '../../../../../../AppComponents/UserAvatarWithStatus/UserAvatarWithStatus'
import user_avatar from '../../../../../../../public/Dashboard/UserBoard/user_avatar.png'
import share from '../../../../../../../public/Dashboard/UserBoard/share.svg'
import edit from '../../../../../../../public/Dashboard/UserBoard/edit.svg'
import { useAppSelector } from '@/redux/hooks/typedHooks'
import { getChat } from '@/redux/slices/chattingWindows/chattingWindowsSlice'
import { ioInstance } from '@/app/utils/SocketInstance/socketInstance'
import { getUserId } from '@/redux/slices/userSession/userSessionSlice'

const BoardAvatars = () => {
    const {_id:groupId} = useAppSelector(getChat)
    const userId = useAppSelector(getUserId)
    useEffect(() => { // Re-render komponentu jest zależy od grupy jaką wybrailiśmy,
        // Przy zmianie czatu emitujemy wiadomośc do socketa, że zmieniamy chat na chat._id( co jest id konkretnej grupy)
        // Wtedy na back-endzie jestśmy podłączeni do pokoju o nazwie konkretnego chatu.
        const socket = ioInstance.getActiveSocket();
        if(groupId) {
          socket.emit("JOIN_GROUP_ROOM", groupId, userId) 
          socket.on(groupId, (...args) => console.log(args))

          //GROU_USER_LEAVE to event który zostaje aktywowany gdy jakiś z uczestników grupy w której jest użytkownik opuści ją!
          socket.on("GROUP_USER_LEAVE", (...args) => {
            console.log(`UŻYTKOWNIK ${args[0]} OPUŚCIŁ POKÓJ GRUPY`)
          })
          socket.on("GROUP_USER_JOIN", (...args) => {
            console.log(`UŻYTKOWNIK ${args[0]} DOŁĄCZYŁ DO GRUPY`)
          })
        }
    // wpychamy do komponentu nowy event listener socket, który nasłuchuje wiadomości z pokoju o nazwie id grupy
        return () => {
          // Emitujemy do servera prośbę o odłączenie użytkownika z grupy po stronie serwera.
          // Ma to na celu, zapobiegnięcie dostarczania wiadomości wyłącznych dla użytkowników którzy są aktualnie w grupie użytkownikom, którzy ją opuścili.
          socket.emit("LEAVE_GROUP_ROOM", groupId, userId)
        
          // jeżeli komponent zostanie odmontowany przy zmianie chat to wyłączamy listener socketu o nazwie chat._id
          // bez tego liczba listenerów przy re-renderowaniach będzie się na siebie nakładać co wywoła niepotrzebneodpowiedzi z serwera.

          socket.off(groupId)
          socket.off("GROUP_USER_LEAVE")
        }
      },[groupId, userId])
      

    return (
        <div className='avatar_functionalities flex gap-6 w-fit'>
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
