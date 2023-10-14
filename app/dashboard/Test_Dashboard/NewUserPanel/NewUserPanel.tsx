import React from 'react'
import UserHeader from '../../DashBoardComponents/UserPanel/Components/UserHeader'
import Shoping from './Shoping/Shoping'
import ControllerFooter from '../ControllerFooter/ControllerFooter'

const NewUserPanel = () => {
  return (
    <section className='bg-[#131619] min-w-[280px] w-full md:w-[280px] relative h-screen flex flex-col items-center gap-y-5 pt-5 pb-8 px-6 min-h-[681px] overflow-scroll overflow-x-hidden scrollbar scrollbar-w-1 scrollbar-thumb-[#0D0F10]'>
      <UserHeader/>
      <div className='break_line w-[100%] h-[1px] bg-[#32363b]'/>
      <Shoping/>
      {/* <PrivateMessages /> */}
      <ControllerFooter/>
    </section>
  )
}

export default NewUserPanel
