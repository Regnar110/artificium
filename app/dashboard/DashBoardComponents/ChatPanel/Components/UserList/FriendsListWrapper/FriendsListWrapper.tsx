import React, { useEffect, useState } from 'react'
import CurrentlyOffline from '../CurrentlyOffline/CurrentlyOffline'
import CurrentlyOnline from '../CurrentlyOnline/CurrentlyOnline'
import ListCategoriesOptions from '../ListCategoriesOptions/ListCategoriesOptions'
import ListVisibilitySetter from '../ListVisiblitySetter/ListVisibilitySetter'
import { ioInstance } from '@/app/utils/SocketInstance/socketInstance'
import { RingLoader } from 'react-spinners'

interface Props {
    friendsVisible:boolean
    setFriendsVisible:React.Dispatch<React.SetStateAction<boolean>>
}

const FriendsListWrapper = ({friendsVisible, setFriendsVisible}:Props) => {
    const [ friendList, setFriendList ] = useState<Friend[] | "LOADING">("LOADING")

    useEffect(() => {
        // ten komponent odbiera z serwera wiadomość z listą znajomych zalogowanego użytkownika. Lista offline i online. 
        const socket = ioInstance.getActiveSocket() 
        socket.on("chat", (...args) => {
            console.log(args[0])
            setFriendList(args[0] as Friend[])
        })
    },[])
  return friendList.length >= 0 ? 
            <>
                <div id='user_list_with_statuses' className={`w-[300px] p-5 ${friendsVisible === true ? "visible" : "hidden"} overflow-hidden flex flex-col justify-between gap-4`}>
                    <div id='lists' className='flex flex-col overflow-scroll scrollbar scrollbar-w-[3px] scrollbar-thumb-[#0D0F10] scrollbar-track-[#131619] overflow-x-hidden gap-6 '>
                    {
                        friendList === "LOADING" ?
                        <div className='flex justify-center items-center'>
                            <RingLoader color="#B6F09C" />
                        </div>
                       
                        :
                        friendList.length === 0 ? 
                            <span className='text-[#686B6E] text-[16px]'>Your friends list is empty</span>
                            :
                            <>
                                <CurrentlyOnline friends={friendList.filter((friend:any) => friend.isOnline === true)}/>
                                <CurrentlyOffline friends={friendList.filter((friend:any) => friend.isOnline === false)}/>                            
                            </>
                    }

                    </div>
                    <ListCategoriesOptions/>
                </div>
                <ListVisibilitySetter friendsVisible setFriendsVisible={setFriendsVisible}/>
            </>
            :
            null       
}

export default FriendsListWrapper
