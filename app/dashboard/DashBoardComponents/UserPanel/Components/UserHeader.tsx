import React from 'react'
import Image from 'next/image'
import dummy_avatar from '../../../../../public/Dashboard/UserPanel/UserHeader/Avatar.png'
import header_dropdown from '../../../../../public/Dashboard/UserPanel/UserHeader/header_dropdown.svg'
import UserAvatar from './HeaderComponents/UserAvatar'
const UserHeader = () => {
  return (
    <div id='user_panel_header' className='user_header w-full font-plus_jakarta_sans flex justify-between items-center pb-8 border-b-[1px] border-[#131619]'>
        <UserAvatar nickname='Mateusz Wrycza' account_type='Free Account' avatar_image={dummy_avatar}/>
        <div className='header_dropdown_icon relative w-[15px]'>
            <Image src={header_dropdown} alt='dropdown'/>
        </div>
      
    </div>
  )
}

export default UserHeader
