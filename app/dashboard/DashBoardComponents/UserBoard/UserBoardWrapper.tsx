import React from 'react'


interface Props {
    children: JSX.Element[]
}

const UserBoardWrapper = ({children}:Props) => {
  return (
    <section className='text-white relative w-full h-full '>
      {children.map(el=>el)}
    </section>
  )
}

export default UserBoardWrapper
