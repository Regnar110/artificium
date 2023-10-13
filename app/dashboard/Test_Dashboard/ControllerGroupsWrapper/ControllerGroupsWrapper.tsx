import React from 'react'
import GroupField from './GroupField/GroupField'

const ControllerGroups = () => {
    // Tu będziemy inicjalizować grupy
  return (
    <section id='controller_groups' className='max-h-[375px] overflow-y-auto overflow-x-hidden scrollbar scrollbar-w-1 scrollbar-thumb-[#1A1D21] scrollbar-track-transparent'>
        <GroupField/>
        <GroupField/>
        <GroupField/>
        <GroupField/>
        <GroupField/>
        <GroupField/>
        <GroupField/>
        <GroupField/>
    </section>
  )
}

export default ControllerGroups
