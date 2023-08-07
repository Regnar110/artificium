import React, { useEffect, useRef } from 'react'
import green_group from '../../../../../public/Dashboard/UserPanel/Groups/green.svg'
import SingleGroup from './GroupsComponents/SingleGroup'
import AddNewGroup from './GroupsComponents/AddNewGroup'
import PanelHeader from './GenericComponents/PanelHeader'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/typedHooks'
import { selectGroup } from '@/redux/slices/chattingWindows/chattingWindowsSlice'
import { getStoredGroups, injectInitialGroups } from '@/redux/slices/groups/groupsSlice'
const Groups = () => {
  const dispatch = useAppDispatch()
  const userGroups = useAppSelector(getStoredGroups)
  //useReg służy do memoizacji poprzedniego stanu grup. 
  // Ma to na celu zapobiegnięcie zapętleniu się renderowania komponentu.
  // Komponent wyrerenderuje się tylko gdy prevGroups będzie się różnił od tych pobranych z servera.
  const onGroupClick = (e:React.FormEvent<HTMLDivElement>) => {
    dispatch(selectGroup(e.currentTarget.id))
  }

  // Hook tutaj służy jedynie do tego, żeby aktualizować ten komponent w przypadku gdy zostanie dodana lub usunięta grupa.
  // Inicjalny stan grup pobietrany jest TYLKO RAZ w komponencie nadrzędnym USERPANEL.
  useEffect( () => {},[userGroups])

  return (
    <div className='groups_container flex flex-col gap-y-4'>
      <PanelHeader title='Groups'/>
      <div className='groups flex flex-col gap-y-6 max-h-[300px] max-w-[250px] overflow-y-auto overflow-x-hidden scrollbar scrollbar-w-1 scrollbar-thumb-green-500 scrollbar-track-gray-100'>
        {
          userGroups.map(el => {
            return <SingleGroup key={el._id} onGroupClick={onGroupClick} group_icon={green_group} group_title={el.group_name}/>
          })
        }
      </div>
      <AddNewGroup/>
    </div>
  )
}

export default Groups
