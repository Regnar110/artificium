'use client'
import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface UserAvatarWithStatusProps {
    user_avatar: StaticImageData,
    user_status?: {
      with_dot?: boolean
      with_text?: boolean
      status: "ONLINE" | "OFFLINE" 
    }
    user_data?: {
      nickname?:string
      account_type?:"FREE" | "PREMIUM"
    }
}

const UserAvatarWithStatus = ({user_avatar, user_status, user_data}:UserAvatarWithStatusProps) => {
  return (
    <div className='avatar_with_statusoverflow-hidden flex justify-start items-start gap-2 w-fit h-fit'>
      <div className='avatar_wrapper relative h-[40px] w-[40px] flex cursor-pointer'>
        <Image fill style={{objectFit:"contain"}} src={user_avatar} alt='avatar_icon'/>
        {
          user_status?.with_dot ? (
          <div className='status_circle h-[16px] w-[16px] rounded-full flex justify-center items-center bg-[#0D0F10] absolute top-0 -right-1'>
            <div className={`inner_statuc_circle w-[10px] h-[10px] ${user_status.status === "ONLINE" ? "bg-green-500":"bg-[#b83030]"}  rounded-full`}/>
          </div>              
          )
          :null
        }
      
      </div>
      <div className={`user_data flex flex-col w-fit h-fit `}>
        {
          user_data ? (
            <div className='user_nick w-full flex flex-col'>
              <span className='nick text-white text-[14px] xl:text-[16px] cursor-pointer'>{user_data.nickname}</span>
              {
                user_data.account_type === "FREE" 
                ?  
                  <span className='account_status text-[#B6F09C] text-[10px] xl:text-[12px] cursor-pointer'>Free account</span>
                : user_data.account_type === "PREMIUM" ?
                  <span className='account_status text-[#B6F09C] text-[10px] xl:text-[12px] cursor-pointer'>Premium account</span>
                :
                null
              }  
            </div>
          ):
          null
        }
        {
          user_status?.with_text ? 
            <span className={`${user_status.status === "ONLINE"? "text-[#B6F09C]": "text-[#b83030]"} text-[10px] xl:text-[12px]`}>{user_status.status}</span>
          :
            null
          }        
      </div>

  </div>
  )
}

export default UserAvatarWithStatus
