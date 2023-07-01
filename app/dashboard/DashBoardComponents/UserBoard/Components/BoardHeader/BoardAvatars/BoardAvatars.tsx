import React from 'react'
import Image from 'next/image'
import UserAvatarWithStatus from '../../../../../../AppComponents/UserAvatarWithStatus/UserAvatarWithStatus'
import user_avatar from '../../../../../../../public/Dashboard/UserBoard/user_avatar.png'
import share from '../../../../../../../public/Dashboard/UserBoard/share.svg'
import edit from '../../../../../../../public/Dashboard/UserBoard/edit.svg'
const BoardAvatars = () => {
  return (
    <div className='avatar_functionalities flex gap-6 w-fit'>
        <div className='users_avatars_status_container flex'>
            <UserAvatarWithStatus user_avatar={user_avatar} user_status={{with_dot:true, status:"ONLINE"}}/>
            <UserAvatarWithStatus user_avatar={user_avatar} user_status={{with_dot:true, status:"OFFLINE"}}/>
            <UserAvatarWithStatus user_avatar={user_avatar} user_status={{with_dot:true, status:"OFFLINE"}}/>

            <div className='hidden_users_count cursor-pointer bg-[#1A1D21] text-[#686B6E] w-[40px] h-[40px] flex justify-center items-center rounded-full'>
                +4
            </div>                
        </div>
        <div className='share_head_button relative font-plus_jakarta_sans flex items-center justify-center gap-x-3 cursor-pointer'>
            <Image className='w-auto' width={60} height={60} src={share} alt='share_icon'/>
            <span className='text-[#686B6E] text-[19px] font-semibold w-fit'>Share</span>
        </div>
        <div className='edit_head_button relative font-plus_jakarta_sans flex items-center justify-center gap-x-3 bg-[#1A1D21] rounded-lg cursor-pointer p-2'>
            <Image className='w-auto' width={150} height={150} src={edit} alt='edit_icon'/>
        </div>
    </div>
  )
}

export default BoardAvatars
