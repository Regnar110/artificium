import React from 'react'
import BoardHeaderElement from '../BoardHeaderElement/BoardHeaderElement'
import BoardAvatars from '../BoardAvatars/BoardAvatars'

const HeaderWithAvatars = () => {
  return (
        <div className='board_head grid lg:grid-flow-col auto-cols-max justify-between items-center gap-y-6 lg:gap-0 pt-6'>
            <BoardHeaderElement header='Orbital Odyssey' description='Marketing Campaign for a new TV series Launch'/>
            <BoardAvatars/>
        </div>
  )
}

export default HeaderWithAvatars
