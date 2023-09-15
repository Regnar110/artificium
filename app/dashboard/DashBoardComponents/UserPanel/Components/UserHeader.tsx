import React from 'react'
import Image from 'next/image'
import header_dropdown from '../../../../../public/Dashboard/UserPanel/UserHeader/header_dropdown.svg'
import user_avatar from '../../../../../public/Dashboard/UserBoard/user_avatar.png'
import UserAvatarWithStatus from '../../../../AppComponents/UserAvatarWithStatus/UserAvatarWithStatus'
import { useAppSelector } from '@/redux/hooks/typedHooks'
import { getUserObject } from '@/redux/slices/userSession/userSessionSlice'
const UserHeader = () => {
  const userObject = useAppSelector(getUserObject)
  return (
    <div id='user_panel_header' className='user_header w-full font-plus_jakarta_sans flex justify-between items-center pb-8 border-b-[1px] border-[#131619]'>
      <UserAvatarWithStatus size='normal' user_avatar={user_avatar} user_data={userObject} show_nick={true} account_type='FREE' modal_action={false}/>
        <div className='header_dropdown_icon relative w-[15px]'>
            <Image src={header_dropdown} alt='dropdown'/>
        </div>
    </div>
  )
}

export default UserHeader
