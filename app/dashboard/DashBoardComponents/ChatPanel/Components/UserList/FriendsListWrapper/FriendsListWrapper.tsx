import React, { useEffect, useState } from 'react'
import CurrentlyOffline from '../CurrentlyOffline/CurrentlyOffline'
import CurrentlyOnline from '../CurrentlyOnline/CurrentlyOnline'
import ListCategoriesOptions from '../ListCategoriesOptions/ListCategoriesOptions'
import ListVisibilitySetter from '../ListVisiblitySetter/ListVisibilitySetter'
import { ioInstance } from '@/app/utils/SocketInstance/socketInstance'
import { RingLoader } from 'react-spinners'
import { userAccessRequest } from '@/app/utils/UserAccessRequest'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/typedHooks'
import { getUserId } from '@/redux/slices/userSession/userSessionSlice'
import { ONLINE_initializeOnlineUsers, ONLINE_injectUserToFriendList } from '@/redux/slices/friendList/onlineFriendListSlice'
import { OFFLINE_initializeOfflineUsers, OFFLINE_injectUserToFriendList } from '@/redux/slices/friendList/offlineFriendListSlice'

interface Props {
    friendsVisible:boolean
    setFriendsVisible:React.Dispatch<React.SetStateAction<boolean>>
}

const FriendsListWrapper = ({friendsVisible, setFriendsVisible}:Props) => {
    const dispatch = useAppDispatch()
    // TEN SPOSÓB INTERWAŁOWEGO ŚCIAGANIA LIST ONLINE POWODUJE PROBLEMY I SPOWOLNIENIE APLIKACJI, A NAWET ZAWIESZENIE
    const authUserId = useAppSelector(getUserId)
    const initializeFriendList = async () => {
        const allFriends = await userAccessRequest<any, any>('getUserFriends', {user_id: authUserId})
        const onlineFriends = allFriends.filter((friend:Friend) => friend.isOnline === true) as Friend[]
        const offlineFriends = allFriends.filter((friend:Friend) => friend.isOnline === false) as Friend[]
        if(onlineFriends.length > 0) {
            dispatch(ONLINE_initializeOnlineUsers(onlineFriends))
        }
        if(offlineFriends.length > 0) {
            dispatch(OFFLINE_initializeOfflineUsers(offlineFriends))
        }
    }
    useEffect(() => {
        initializeFriendList()
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
