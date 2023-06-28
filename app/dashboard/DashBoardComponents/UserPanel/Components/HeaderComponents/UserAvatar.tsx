import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface UserAvatarProps {
    nickname:string,
    account_type:string,
    avatar_image:StaticImageData
}

const UserAvatar = ({nickname, account_type, avatar_image}:UserAvatarProps) => {
  return (
    <div className='avatar relative flex rounded-full w-full gap-x-3 justify-center items-center'>
        <div className='avatar_image relative w-[50px]'>
            <Image src={avatar_image} className='object-contain' alt='user_avatar'/>                
        </div>
        <div className='user_nick w-full flex flex-col'>
            <span className='nick text-white text-[14px] xl:text-[16px]'>{nickname}</span>
            <span className='account_status text-[#B6F09C] text-[10px] xl:text-[12px]'>{account_type}</span>   
        </div>
    </div>
  )
}

export default UserAvatar
