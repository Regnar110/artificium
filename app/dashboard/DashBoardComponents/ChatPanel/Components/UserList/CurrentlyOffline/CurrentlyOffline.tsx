import React from 'react'

import user_avatar from '../../../../../../../public/Dashboard/UserBoard/user_avatar.png'
import UserAvatarWithStatus from '@/app/AppComponents/UserAvatarWithStatus/UserAvatarWithStatus'
import { useAppSelector } from '@/redux/hooks/typedHooks'
import { getOfflineUsers } from '@/redux/slices/friendList/offlineFriendListSlice'

const CurrentlyOnline = () => {
  const offlineUsers = useAppSelector(getOfflineUsers)
  return (
    <div id='currently_online' className='flex flex-col gap-4 '>
        <h3 className='list_header text-[12px] xl:text-[14px] text-[#9B9C9E]'>Currently Offline</h3>
        <div id='online_list' className='flex flex-col gap-3 opacity-50 '>
          {
            offlineUsers.map(el => {
              return <UserAvatarWithStatus size='normal' key={el._id} user_avatar={user_avatar} user_data={el} show_nick={true} user_status={{with_dot:true, with_text:true,  status:el.isOnline === true ? "ONLINE":"OFFLINE"}} reveal_mail={false} modal_action={true}/>
            })
          }
        </div>
    </div>
  )
}

export default CurrentlyOnline
