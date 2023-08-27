import React from 'react'
import user_avatar from '../../../../../../../public/Dashboard/UserBoard/user_avatar.png'
import UserAvatarWithStatus from '@/app/AppComponents/UserAvatarWithStatus/UserAvatarWithStatus'
interface Props {
  friends: any[]
}
const CurrentlyOnline = ({friends}:Props) => {

  return (
    <div id='currently_online' className='flex flex-col gap-4'>
        <h3 className='list_header text-[12px] xl:text-[14px] text-[#9B9C9E]'>Currently Online</h3>
        <div id='online_list' className='flex flex-col gap-3'>
          {
            friends.map(el => <UserAvatarWithStatus key={el._id} user_avatar={user_avatar} user_data={{nickname:el.nickname, }} user_status={{with_dot:true, with_text:true,  status:el.isOnline ? "ONLINE":"OFFLINE"}}/>)
          }

        </div>
    </div>
  )
}

export default CurrentlyOnline
