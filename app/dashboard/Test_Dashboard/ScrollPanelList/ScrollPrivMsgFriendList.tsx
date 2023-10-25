import React from 'react'

interface Props {
    children:JSX.Element[]
}
const ScrollPrivMsgFriendList = ({children}:Props) => {
  return (
      <div className='scrollable_prv_msgs_user_chats flex flex-col h-full justify-start pb-8 gap-y-3 overflow-x-hidden overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-[#0D0F10] scrollbar-track-transparent'>
        {children.map(el=>el)}
      </div>
  )
}

export default ScrollPrivMsgFriendList
