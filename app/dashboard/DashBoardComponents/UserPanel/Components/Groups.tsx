import React from 'react'
import green_group from '../../../../../public/Dashboard/UserPanel/Groups/green.svg'
import SingleGroup from './GroupsComponents/SingleGroup'
import AddNewGroup from './GroupsComponents/AddNewGroup'
import PanelHeader from './GenericComponents/PanelHeader'
const Groups = () => {
  return (
    <div className='groups_container flex flex-col gap-y-4'>
      <PanelHeader title='Groups'/>
      <div className='groups flex flex-col gap-y-6 max-h-[300px] overflow-auto scrollbar scrollbar-w-1 scrollbar-thumb-green-500 scrollbar-track-gray-100'>
        <SingleGroup group_icon={green_group} group_title='Orbital Oddysey'/>
        <SingleGroup group_icon={green_group} group_title='Orbital Oddysey'/>
        <SingleGroup group_icon={green_group} group_title='Orbital Oddysey'/>
        <SingleGroup group_icon={green_group} group_title='Orbital Oddysey'/>
        <SingleGroup group_icon={green_group} group_title='Orbital Oddysey'/>
        <SingleGroup group_icon={green_group} group_title='Orbital Oddysey'/>
        <SingleGroup group_icon={green_group} group_title='Orbital Oddysey'/>
      </div>
      <AddNewGroup/>
    </div>
  )
}

export default Groups
