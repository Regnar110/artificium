import React from 'react'

interface BoardHeadProps {
    children: JSX.Element[]
}
const BoardHeader = ({children}:BoardHeadProps) => {
  return (
    <header className='user_board_head font-plus_jakarta_sans bg-[#0D0F10] rounded-lg px-6 flex flex-col gap-y-10 overflow-hidden place-self-start'>
        {children.map(el=>el)}
    </header>
  )
}

export default BoardHeader
