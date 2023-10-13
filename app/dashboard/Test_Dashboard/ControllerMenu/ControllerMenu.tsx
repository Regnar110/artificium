
import React from 'react'
import ControllerUser from './ControllerUser/ControllerUser'
import main_logo from '../../../../public/home/mainlogo.svg'
import Image from 'next/image'
import CreateGroup from '../ControllerGroupsWrapper/CreateGroup/CreateGroup'
import ControllerFooter from '../ControllerFooter/ControllerFooter'
import ControllerGroups from '../ControllerGroupsWrapper/ControllerGroupsWrapper'
const ControllerMenu = () => {
  return (
    <nav id='controller_menu' className='max-w-[100px] bg-[#0D0F10] h-screen text-[#53585f] flex flex-col justify-between items-center overflow-hidden'>
      <main className='flex flex-col gap-y-5 justify-center items-center pt-5'>
        <Image className='w-[90px] h-[20px]' src={main_logo} alt='controller_main_logo'/>
        <ControllerUser/>
        <ControllerGroups/>
        <CreateGroup/>
      </main>
      <ControllerFooter/>
    </nav>
  )
}

export default ControllerMenu
