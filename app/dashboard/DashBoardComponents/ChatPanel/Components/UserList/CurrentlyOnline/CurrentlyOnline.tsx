import React, { useEffect } from 'react'
import user_avatar from '../../../../../../../public/Dashboard/UserBoard/user_avatar.png'
import UserAvatarWithStatus from '@/app/AppComponents/UserAvatarWithStatus/UserAvatarWithStatus'
import { useAppSelector } from '@/redux/hooks/typedHooks'
import { getOnlineUsers } from '@/redux/slices/friendList/onlineFriendListSlice'

const CurrentlyOnline = () => {
  const onlineUsers = useAppSelector(getOnlineUsers)
  return (
    <div id='currently_online' className='flex w-full flex-col gap-4'>
        <h3 className='list_header text-[12px] xl:text-[14px] text-[#9B9C9E]'>Currently Online</h3>
        <div id='online_list' className='flex flex-col gap-3'>
          {
            onlineUsers.map(el => <UserAvatarWithStatus size='normal' key={el._id} user_avatar={user_avatar} user_data={el} show_nick={true} user_status={{with_dot:true, with_text:true,  status:el.isOnline ? "ONLINE":"OFFLINE"}} reveal_mail={false} modal_action={true}/>)
          }

        </div>
    </div>
  )
}

export default CurrentlyOnline
