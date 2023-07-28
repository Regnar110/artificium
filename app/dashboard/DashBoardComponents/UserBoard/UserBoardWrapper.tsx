import React from 'react'


interface Props {
    children: JSX.Element[]
}

const UserBoardWrapper = ({children}:Props) => {
  return (
    <section className='text-white relative w-[100%] h-screen  min-h-[681px] place-items-center flex flex-col justify-center'>
      {children.map(el=>el)}
    </section>
  )
}

export default UserBoardWrapper
