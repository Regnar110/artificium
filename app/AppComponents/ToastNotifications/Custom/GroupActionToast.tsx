import React from 'react'
import UserAvatarWithStatus from '../../UserAvatarWithStatus/UserAvatarWithStatus'
import avatar from '../../../../public/Dashboard/UserPanel/UserHeader/Avatar.png'

interface Props {
    message:string
    user?:AuthenticatedUser
    group_name?:string
}

const CUSTOM_TOAST_GROUP_ACTION = ({message, user, group_name}:Props) => {
  console.log("CUSTOM TOAST")
  console.log(user)
  return (
    <section className='TOAST_group_action bg-[#060708] w-[280px] font-plus_jakarta_sans flex flex-col gap-2 justify-center items-start px-5 py-2 rounded-md shadow-sm shadow-[#B6F09C]'>
        {group_name && <span className='w-fit text-[#9B9C9E] text-[12px] font-bold'>{group_name}</span>}
        <UserAvatarWithStatus size='normal' user_avatar={avatar} show_nick={true} modal_action={false} user_data={user} reveal_mail={false} message={message} hex_font_color='#fff'/>
    </section>
  )
}

export const renderGroupActionToast = (message:string, user?: AuthenticatedUser, group_name?:string) => {
  return(
    <CUSTOM_TOAST_GROUP_ACTION message={message} user={user} group_name={group_name}/>
  )
}
