import UserAvatarWithStatus from '@/app/AppComponents/UserAvatarWithStatus/UserAvatarWithStatus'
import React, { useEffect, useState } from 'react'
import user_avatar from '../../../../public/Dashboard/UserPanel/UserHeader/Avatar.png'
import { userAccessRequest } from '@/app/utils/UserAccessRequest'
import { useAppSelector } from '@/redux/hooks/typedHooks'
import { getChat } from '@/redux/slices/chattingWindows/chattingWindowsSlice'
import { getOnlineUsers } from '@/redux/slices/friendList/onlineFriendListSlice'

interface Props {
    header:string,
    className?:string
}
const GroupMembersPanelList = ({header, className}:Props) => {
    const [groupMembers, setGroupMembers] = useState<AuthenticatedUser[]>()
    const { group_users, _id:groupId} = useAppSelector(getChat)
    const currentlyOnlineUsers = useAppSelector(getOnlineUsers)
    const getGroupMembers = async () => {
        const members = await userAccessRequest<AuthenticatedUser[], string[]>("getSelectedUsers", group_users)
        setGroupMembers(members)
      }
    useEffect(() => {
        // jeżeli group_users są dostępne. Tzn jeżeli jeżeli grupa została wybrana dopiero wysyłamy żądanie o obiekty członków grupy
        // Montowanie nowego GroupPanel następuje jedynie gdy zmieni się groupId lub zmieni się lista znajomych online użytkownika
        group_users  && getGroupMembers()
      },[groupId, currentlyOnlineUsers])
  return (
    <div className={`scroll_panel_list h-full flex flex-col overflow-hidden px-6 ${className && className}`}>
        <h3 className='scroll_list_header pl-2 text-[14px]'>{header.toUpperCase()}</h3>
        <div className='scrollable_elements_wrapper overflow-y-auto overflow-x-hidden scrollbar scrollbar-w-1 scrollbar-thumb-[#0D0F10] scrollbar-track-transparent'>
            {groupMembers && groupMembers.map(member => (
                <div className='scroll_element flex hover:bg-[#363A3D] rounded-sm px-2 py-2 cursor-pointer'>
                    <UserAvatarWithStatus size='normal' user_avatar={user_avatar} user_data={member} show_nick={true} reveal_mail={false} modal_action={true} user_status={{with_dot:true, status:member.isOnline ? "ONLINE":"OFFLINE"}}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default GroupMembersPanelList
