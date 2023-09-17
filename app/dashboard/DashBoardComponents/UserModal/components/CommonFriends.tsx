import UserAvatarWithStatus from '@/app/AppComponents/UserAvatarWithStatus/UserAvatarWithStatus'
import { useAppSelector } from '@/redux/hooks/typedHooks'
import { getUserObject } from '@/redux/slices/userSession/userSessionSlice'
import { StaticImageData } from 'next/image'
import React from 'react'
interface Props {
    user_avatar:StaticImageData
    friends:Friend[]
}
const CommonFriends = ({user_avatar, friends}:Props) => {
    const dummyuser = useAppSelector(getUserObject)
  return (
    <section className='common_friends relative bg-[#0D0F10] rounded-md overflow-hidden pb-2'>
        <nav className='head bg-[#0D0F10] text-[#9B9C9E] text-[14px] font-semibold px-3 pb-4 z-50 '>Common friends</nav>
        <article className='flex flex-col overflow-scroll overflow-x-hidden max-h-[200px]'>
          {
            friends.map(friend => (
              <div className='common_friend_color_wrapper hover:bg-[#181B1C] px-3 py-3'>
                <UserAvatarWithStatus size='medium' user_avatar={user_avatar} user_data={friend} show_nick={true} reveal_mail={true} modal_action={false}/>  
              </div>              
            ))
          }
        </article>
    </section>
  )
}

export default CommonFriends
