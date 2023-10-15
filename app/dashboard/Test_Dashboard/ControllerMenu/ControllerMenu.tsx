
import React from 'react'
import ControllerUser from './ControllerUser/ControllerUser'
import CreateGroup from '../ControllerGroupsWrapper/CreateGroup/CreateGroup'
import ControllerGroups from '../ControllerGroupsWrapper/ControllerGroupsWrapper'
import ExploreGroups from '../ControllerGroupsWrapper/ExploreGroups/ExploreGroups'
const ControllerMenu = ():React.JSX.Element => {
  
  return (
    <nav id='controller_menu' className='relative top-0 min-w-[100px] max-w-[100px] bg-[#0D0F10] min-h-screen text-[#53585f] overflow-hidden z-50'>
      <main className='relative flex flex-col gap-y-5 justify-center items-center pt-5 h-fit'>
        <ControllerUser/>
        <ControllerGroups/>
        <CreateGroup/>
        <ExploreGroups/>
      </main>
      
    </nav>
  )
}

export default ControllerMenu
