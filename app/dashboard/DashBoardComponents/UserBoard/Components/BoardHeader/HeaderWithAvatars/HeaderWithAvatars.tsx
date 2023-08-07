import React from 'react'
import BoardHeaderElement from '../BoardHeaderElement/BoardHeaderElement'
import BoardAvatars from '../BoardAvatars/BoardAvatars'

interface HeaderProps {
  chat_title:string,
  chat_description:string
}

const HeaderWithAvatars = ({chat_title, chat_description}:HeaderProps) => {
  return (
        <div className='board_head grid lg:grid-flow-col auto-cols-max justify-between items-center gap-y-6 lg:gap-0 pt-6'>
            <BoardHeaderElement header={chat_title} description={chat_description}/>
            <BoardAvatars/>
        </div>
  )
}

export default HeaderWithAvatars
