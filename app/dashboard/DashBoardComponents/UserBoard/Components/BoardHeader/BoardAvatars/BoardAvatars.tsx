'use client'
import React from 'react'
import Image from 'next/image'
import UserAvatarWithStatus from '../../../../../../AppComponents/UserAvatarWithStatus/UserAvatarWithStatus'
import user_avatar from '../../../../../../../public/Dashboard/UserBoard/user_avatar.png'
import share from '../../../../../../../public/Dashboard/UserBoard/share.svg'
import edit from '../../../../../../../public/Dashboard/UserBoard/edit.svg'
import { useAppSelector } from '@/redux/hooks/typedHooks'
import { getGroup } from '@/redux/slices/chattingWindows/chattingWindowsSlice'



const BoardAvatars = () => {
    const {active_users} = useAppSelector(getGroup)
    return (
        <div className='avatar_functionalities flex gap-6 w-fit'>
            <div className='users_avatars_status_container flex'>
                {
                  active_users?.map((active_user, index) => {
                    return index <= 2 ? <UserAvatarWithStatus size='normal' user_avatar={user_avatar} user_data={active_user} show_nick={false} user_status={{with_dot:true, status: active_user.isOnline ? "ONLINE":"OFFLINE"}} reveal_mail={false} modal_action={true}/> : null
                   
                  })
                }

                {
                  active_users && active_users.length > 3 ? (

                  <div className='hidden_users_count cursor-pointer bg-[#1A1D21] text-[#686B6E] w-[40px] h-[40px] flex justify-center items-center rounded-full'>
                      {
                        `+${(active_users?.length! -3)}`
                      }
                  </div>                       
                  )
                  :null
                }
             
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
