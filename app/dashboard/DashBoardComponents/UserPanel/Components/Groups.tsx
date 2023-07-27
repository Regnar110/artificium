import React from 'react'
import green_group from '../../../../../public/Dashboard/UserPanel/Groups/green.svg'
import SingleGroup from './GroupsComponents/SingleGroup'
import AddNewGroup from './GroupsComponents/AddNewGroup'
import PanelHeader from './GenericComponents/PanelHeader'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/typedHooks'
import { getChat, selectGroup } from '@/redux/slices/chattingWindows/chattingWindowsSlice'
const Groups = () => {
  const dispatch = useAppDispatch()
  const group = useAppSelector(getChat)
  console.log(group)
  const onGroupClick = (e:React.FormEvent<HTMLDivElement>) => {
    dispatch(selectGroup(e.currentTarget.id))
  }
  return (
    <div className='groups_container flex flex-col gap-y-4'>
      <PanelHeader title='Groups'/>
      <div className='groups flex flex-col gap-y-6 max-h-[300px] overflow-auto scrollbar scrollbar-w-1 scrollbar-thumb-green-500 scrollbar-track-gray-100'>
        <SingleGroup onGroupClick={onGroupClick} group_icon={green_group} group_title='Orbital Oddysey 1'/>
        <SingleGroup onGroupClick={onGroupClick} group_icon={green_group} group_title='Orbital Oddysey 2'/>
        <SingleGroup onGroupClick={onGroupClick} group_icon={green_group} group_title='Orbital Oddysey 3'/>
        <SingleGroup onGroupClick={onGroupClick} group_icon={green_group} group_title='Orbital Oddysey 4'/>
        <SingleGroup onGroupClick={onGroupClick} group_icon={green_group} group_title='Orbital Oddysey 5'/>
        <SingleGroup onGroupClick={onGroupClick} group_icon={green_group} group_title='Orbital Oddysey 6'/>
        <SingleGroup onGroupClick={onGroupClick} group_icon={green_group} group_title='Orbital Oddysey 7'/>
      </div>
      <AddNewGroup/>
    </div>
  )
}

export default Groups
