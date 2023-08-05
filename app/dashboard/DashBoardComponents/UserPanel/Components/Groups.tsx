import React, { useEffect, useRef } from 'react'
import green_group from '../../../../../public/Dashboard/UserPanel/Groups/green.svg'
import SingleGroup from './GroupsComponents/SingleGroup'
import AddNewGroup from './GroupsComponents/AddNewGroup'
import PanelHeader from './GenericComponents/PanelHeader'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/typedHooks'
import { selectGroup } from '@/redux/slices/chattingWindows/chattingWindowsSlice'
import { userAccessRequest } from '@/app/utils/UserAccessRequest'
import { getUserId } from '@/redux/slices/userSession/userSessionSlice'
import { getStoredGroups, injectGroups } from '@/redux/slices/groups/groupsSlice'
const Groups = () => {
  const dispatch = useAppDispatch()
  const authUser = useAppSelector(getUserId)
  const userGroups = useAppSelector(getStoredGroups)
  const prevGroupsRef = useRef<Group[] | null>(null);
  //useReg służy do memoizacji poprzedniego stanu grup. 
  // Ma to na celu zapobiegnięcie zapętleniu się renderowania komponentu.
  // Komponent wyrerenderuje się tylko gdy prevGroups będzie się różnił od tych pobranych z servera.
  const onGroupClick = (e:React.FormEvent<HTMLDivElement>) => {
    dispatch(selectGroup(e.currentTarget.id))
  }

  useEffect( () => {
    // console.log('mount')
    // const getGroups = async () => {
    //   const response = await userAccessRequest<Group[] | UserAccessErrorResponse, any>('getUserGroups', {user_id: authUser})
    //   if('status' in response && response.status) {
    //     console.log(response)
    //   } else {
    //     if(JSON.stringify(response) !== JSON.stringify(prevGroupsRef.current)) {
    //       dispatch(injectGroups(response as Group[]))
    //       prevGroupsRef.current = response as Group[] 
    //     }
    //   }
    //   return response
    // }
    // getGroups()
  },[userGroups])

  return (
    <div className='groups_container flex flex-col gap-y-4'>
      <PanelHeader title='Groups'/>
      <div className='groups flex flex-col gap-y-6 max-h-[300px] overflow-auto scrollbar scrollbar-w-1 scrollbar-thumb-green-500 scrollbar-track-gray-100'>
        {
          userGroups.map(el => {
            return <SingleGroup onGroupClick={onGroupClick} group_icon={green_group} group_title={el.group_name}/>
          })
        }
      </div>
      <AddNewGroup/>
    </div>
  )
}

export default Groups
