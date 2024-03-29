'use client'
import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import UserModal from '@/app/dashboard/Test_Dashboard/Modals/UserModal/UserModal'
import { useAppSelector } from '@/redux/hooks/typedHooks'
import { getUserId } from '@/redux/slices/userSession/userSessionSlice'

interface UserAvatarWithStatusProps {
    size: "normal" | "medium" | "large",
    user_avatar: StaticImageData,
    user_status?: {
      with_dot?: boolean
      with_text?: boolean
      status: "ONLINE" | "OFFLINE" 
    }
    user_data?: Friend | AuthenticatedUser
    show_nick: boolean,
    account_type?:"FREE" | "PREMIUM",
    reveal_mail:boolean
    modal_action:boolean
    message?:string
    hex_font_color?:string
    width?:"full" | "fit"
}

const UserAvatarWithStatus = ({size, user_avatar, user_status, user_data, show_nick, account_type, reveal_mail, modal_action, message, hex_font_color, width}:UserAvatarWithStatusProps) => {
  const [ userModalIsOpen, setUserModalStatus ] = useState<boolean>(false)
  const authUserId = useAppSelector(getUserId)
  const openCloseUserModal = (new_status:boolean) => {
    console.log(userModalIsOpen)
    setUserModalStatus(new_status)
  }
  return (
    <>
    
    <div className={`avatar_with_status overflow-hidden flex justify-start items-center ${size === "normal" ? "gap-2": "gap-6"} ${width==="fit"?"w-fit":"w-full"}`} onClick={() => openCloseUserModal(true)}>
      <div className={`avatar_wrapper relative ${size === "normal" ? "h-[40px] w-[40px]" : size === "medium" ? "h-[50px] w-[50px]" : "h-[80px] w-[80px]"} flex cursor-pointer`}>
        <Image fill style={{objectFit:"contain"}} src={user_avatar} alt='avatar_icon'/>
        {
          user_status?.with_dot ? (
          <div className={`status_circle ${size === "normal" ? "h-[16px] w-[16px]" : size === "medium" ? "h-[20px] w-[22px]" : "h-[30px] w-[30px]"} rounded-full flex justify-center items-center bg-[#0D0F10] absolute top-0 -right-1`}>
            <div className={`inner_status_circle ${size === "normal" ? "h-[10px] w-[10px]" :  size === "medium" ? "h-[14px] w-[14px]" : "h-[19px] w-[19px]"}  ${user_status.status === "ONLINE" ? "bg-green-500":"bg-[#b83030]"}  rounded-full`}/>
          </div>              
          )
          :null
        }
      
      </div>
      <div className={`user_data flex flex-col w-fit h-fit `}>
        {
          user_data ? (
            <div className={`user_nick w-full flex flex-col ${hex_font_color ? `text-[${hex_font_color}]` : 'text-white'}`}>
              {show_nick && <span className={`nick ${size === "normal" ? "text-[14px] xl:text-[16px]" : size === "medium" ? "text-[18px] xl:text-[20px]" : "text-[32px] xl:text-[36px]"} cursor-pointer`}>{user_data.nickname}</span>}
              {message &&  <span className={`additional_undernick_message text-[#9B9C9E] ${size === "normal" ? "text-[14px] xl:text-[16px]" : size === "medium" ? "text-[18px] xl:text-[20px]" : "text-[32px] xl:text-[36px]"}`}>{message}</span>}
              {
                account_type === "FREE" 
                ?  
                  <span className='account_status text-[#B6F09C] text-[10px] xl:text-[12px] cursor-pointer'>Free account</span>
                : account_type === "PREMIUM" ?
                  <span className='account_status text-[#B6F09C] text-[10px] xl:text-[12px] cursor-pointer'>Premium account</span>
                :
                null
              }
              {
                reveal_mail && <span className={`account_status text-[#B6F09C] ${size === "normal" ? "text-[10px] xl:text-[12px]" : size === "medium" ? "text-[11px] xl:text-[13px]" : "text-[13px] xl:text-[14px]"} cursor-pointer`}>{user_data.email}</span>
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

  {/*JEŻELI AAVATAR NALEŻY DO UŻYTKOWNIKA APLIKACJI(ZALOGOWANEGO) TO NIE TWORZYMY DLA NIEGO MODALU*/}
  {modal_action === true && user_data && user_data._id !== authUserId ? <UserModal modalIsOpen={userModalIsOpen} setModal={openCloseUserModal} user_data={user_data!}/> : null}
  </>
  )
}

export default UserAvatarWithStatus
