import React from 'react'


interface Props {
    children: JSX.Element[]
}

const UserBoardWrapper = ({children}:Props) => {
  return (
    <section className='text-white relative w-full h-screen grid min-h-[681px] place-items-center grid-auto-rows-auto'>
      {children.map(el=>el)}
    </section>
  )
}

export default UserBoardWrapper
