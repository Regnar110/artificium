import React, { useEffect } from 'react'
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
    useEffect(() => {
        const socket = ioInstance.getActiveSocket() 
        socket.on("chat", (...args) => {
            console.log(args)
        })
    },[])
  return (
    <>
        <div id='user_list_with_statuses' className={`w-[300px] p-5 ${friendsVisible === true ? "visible" : "hidden"} overflow-hidden flex flex-col justify-between gap-4`}>
            <div id='lists' className='flex flex-col overflow-scroll scrollbar scrollbar-w-[3px] scrollbar-thumb-[#0D0F10] scrollbar-track-[#131619] overflow-x-hidden gap-6 '>
            <CurrentlyOnline/>
            <CurrentlyOffline/>    
            </div>
            <ListCategoriesOptions/>
        </div>
        <ListVisibilitySetter friendsVisible setFriendsVisible={setFriendsVisible}/>
    </>
  )
}

export default FriendsListWrapper
