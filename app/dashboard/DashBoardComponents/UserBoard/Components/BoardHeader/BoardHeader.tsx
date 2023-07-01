import React from 'react'

interface BoardHeadProps {
    children: JSX.Element[]
}
const BoardHeader = ({children}:BoardHeadProps) => {
  return (
    <header className='user_board_head font-plus_jakarta_sans bg-[#0D0F10] rounded-lg px-6 flex flex-col h-fit min-h-[177px] overflow-hidden'>
        {children.map(el=>el)}
    </header>
  )
}

export default BoardHeader
