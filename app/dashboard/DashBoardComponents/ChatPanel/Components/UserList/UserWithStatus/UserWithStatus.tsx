import React from 'react'
import Image, { StaticImageData } from 'next/image'
interface UsersWithStatusesProps {
    user_avatar:StaticImageData;
    user_nickname:string;
    status:"ONLINE" | "OFFLINE"
}
const UserWithStatus = ({user_avatar, user_nickname, status}:UsersWithStatusesProps) => {
  return (
    <div className='user_with_status flex justify-center items-start gap-x-2'>
        <div className='user_avatar relative w-[50px] h-[50px]'>
            <Image src={user_avatar} fill={true} style={{objectFit:"contain"}} alt='user status'/>  
        </div>
        <div className='user_data flex flex-col'>
            <span className='text-[14px] xl:text-[16px]'>{user_nickname}</span>
            <span className='text-[#B6F09C] text-[10px] xl:text-[12px]'>{status}</span>
        </div>
    </div>
  )
}

export default UserWithStatus
