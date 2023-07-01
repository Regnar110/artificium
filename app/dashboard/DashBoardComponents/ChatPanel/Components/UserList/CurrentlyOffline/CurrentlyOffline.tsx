import React from 'react'

import user_avatar from '../../../../../../../public/Dashboard/UserBoard/user_avatar.png'
import UserAvatarWithStatus from '@/app/AppComponents/UserAvatarWithStatus/UserAvatarWithStatus'
const CurrentlyOnline = () => {
  return (
    <div id='currently_online' className='flex flex-col gap-4'>
        <h3 className='list_header text-[12px] xl:text-[14px] text-[#9B9C9E]'>Currently Offline</h3>
        <div id='online_list' className='flex flex-col gap-3 opacity-50'>
          <UserAvatarWithStatus user_avatar={user_avatar} user_data={{nickname:"MAteusz Kazik", }} user_status={{with_dot:true, with_text:true,  status:"OFFLINE"}}/>
        </div>
    </div>
  )
}

export default CurrentlyOnline
