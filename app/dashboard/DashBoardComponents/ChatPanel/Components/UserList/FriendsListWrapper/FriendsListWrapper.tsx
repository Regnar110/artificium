import React, { useEffect, useState } from 'react'
import CurrentlyOffline from '../CurrentlyOffline/CurrentlyOffline'
import CurrentlyOnline from '../CurrentlyOnline/CurrentlyOnline'
import ListCategoriesOptions from '../ListCategoriesOptions/ListCategoriesOptions'
import ListVisibilitySetter from '../ListVisiblitySetter/ListVisibilitySetter'
import { ioInstance } from '@/app/utils/SocketInstance/socketInstance'

interface Props {
    friendsVisible:boolean
    setFriendsVisible:React.Dispatch<React.SetStateAction<boolean>>
}

const FriendsListWrapper = ({friendsVisible, setFriendsVisible}:Props) => {
    const [ friendList, setFriendList ] = useState<any>([])
    useEffect(() => {
        const socket = ioInstance.getActiveSocket() 
        socket.on("chat", (...args) => {
            setFriendList(args[0])
        })
    },[])
  return friendList.length > 0 ? 
            <>
                
                <div id='user_list_with_statuses' className={`w-[300px] p-5 ${friendsVisible === true ? "visible" : "hidden"} overflow-hidden flex flex-col justify-between gap-4`}>
                    <div id='lists' className='flex flex-col overflow-scroll scrollbar scrollbar-w-[3px] scrollbar-thumb-[#0D0F10] scrollbar-track-[#131619] overflow-x-hidden gap-6 '>
                    <CurrentlyOnline friends={friendList.filter((friend:any) => friend.isOnline === true)}/>
                    <CurrentlyOffline friends={friendList.filter((friend:any) => friend.isOnline === false)}/>    
                    </div>
                    <ListCategoriesOptions/>
                </div>
                <ListVisibilitySetter friendsVisible setFriendsVisible={setFriendsVisible}/>
            </>
            :
            null       
}

export default FriendsListWrapper
