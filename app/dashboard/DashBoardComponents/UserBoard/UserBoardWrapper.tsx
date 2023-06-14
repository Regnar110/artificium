import React from 'react'


interface Props {
    children: JSX.Element[]
}

const UserBoardWrapper = ({children}:Props) => {
  return (
    <section className='text-white flex flex-col w-full'>
      {children.map(el=>el)}
    </section>
  )
}

export default UserBoardWrapper
