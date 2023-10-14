import React, { useEffect } from 'react'
import GroupField from './GroupField/GroupField'
import { userAccessRequest } from '@/app/utils/UserAccessRequest'
import { getStoredGroups, injectInitialGroups } from '@/redux/slices/groups/groupsSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/typedHooks'
import { getUserObject } from '@/redux/slices/userSession/userSessionSlice'


const ControllerGroups = () => {
    // Tu będziemy inicjalizować grupy
const dispatch = useAppDispatch()
const groups = useAppSelector(getStoredGroups)
const {_id:authUser} = useAppSelector(getUserObject)
  useEffect(() => {
    const getGroups = async () => {
      const response = await userAccessRequest<Group[] | UserAccessErrorResponse, any>('getUserGroups', {user_id: authUser})
      console.log(response)
      if('status' in response && response.status) {
        console.log(response)
      } else {
        dispatch(injectInitialGroups(response as Group[]))
      }
      return response
    }
    getGroups()
  },[authUser])
  return (
    <section id='controller_groups' className='max-h-[300px] overflow-y-auto overflow-x-hidden scrollbar scrollbar-w-1 scrollbar-thumb-[#1A1D21] scrollbar-track-transparent'>
        {
          groups.map(group => (
            <GroupField key={group._id} group_id={group._id}  group_title={group.group_name}/>
          ))
        }
        {/* <GroupField/>
        <GroupField/>
        <GroupField/>
        <GroupField/>
        <GroupField/>
        <GroupField/>
        <GroupField/>
        <GroupField/> */}
    </section>
  )
}

export default ControllerGroups
