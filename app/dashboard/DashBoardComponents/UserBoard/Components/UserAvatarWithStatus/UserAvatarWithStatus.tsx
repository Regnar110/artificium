import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface UserAvatarWithStatusProps {
    user_avatar: StaticImageData,
}

const UserAvatarWithStatus = ({user_avatar}:UserAvatarWithStatusProps) => {
  return (
    <div className='avatar_with_status relative rounder-full overflow-hidden cursor-pointer min-w-fit'>
    <Image className='w-[40px]' width={150} height={150} src={user_avatar} alt='avatar_icon'/>
    <div className='status_circle h-[16px] w-[16px] rounded-full flex justify-center items-center bg-[#0D0F10] absolute top-0 right-0'>
      <div className='inner_statuc_circle w-[8px] h-[8px] bg-green-500 rounded-full'></div>
    </div>
  </div>
  )
}

export default UserAvatarWithStatus
