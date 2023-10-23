import React, { useEffect, useState } from 'react'
import CurrentlyOffline from '../CurrentlyOffline/CurrentlyOffline'
import CurrentlyOnline from '../CurrentlyOnline/CurrentlyOnline'
import ListCategoriesOptions from '../ListCategoriesOptions/ListCategoriesOptions'
import { userAccessRequest } from '@/app/utils/UserAccessRequest'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/typedHooks'
import { getUserId } from '@/redux/slices/userSession/userSessionSlice'
import { ONLINE_initializeOnlineUsers} from '@/redux/slices/friendList/onlineFriendListSlice'
import { OFFLINE_initializeOfflineUsers } from '@/redux/slices/friendList/offlineFriendListSlice'
import { currentUIState } from '@/redux/slices/dashboardUI_controller/dashboardUI_controller'


const FriendsListWrapper = () => {
    const friendListPanelStatus:boolean = useAppSelector(currentUIState).friendList_panel
    const dispatch = useAppDispatch()
    // TEN SPOSÓB INTERWAŁOWEGO ŚCIAGANIA LIST ONLINE POWODUJE PROBLEMY I SPOWOLNIENIE APLIKACJI, A NAWET ZAWIESZENIE
    const authUserId = useAppSelector(getUserId)
    const initializeFriendList = async () => {
        console.log("INICJALIZACJA FUNKCJI?")
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
        console.log("Friends")
        initializeFriendList()
    },[])
  return (
            <>
                <div id='user_list_with_statuses' className={` transition-all z-40 duration-300 ${friendListPanelStatus === true ? "absolute right-0 opacity-100":"opacity-30 right-full md:right-0"} absolute md:relative min-w-full w-full md:min-w-[200px] md:w-[200px] bg-[#131619]  overflow-hidden flex flex-col justify-between gap-4 h-screen shadow-2xl shadow-black`}>
                    <div id='lists' className='flex flex-col min-w-[200px] p-5 overflow-scroll scrollbar scrollbar-w-[3px] scrollbar-thumb-[#0D0F10] scrollbar-track-[#131619] overflow-x-hidden gap-6 '>
                        <CurrentlyOnline/>
                        <CurrentlyOffline/>                            
                    </div>
                    <ListCategoriesOptions/>
                </div>

            </>
    )
}

export default FriendsListWrapper
