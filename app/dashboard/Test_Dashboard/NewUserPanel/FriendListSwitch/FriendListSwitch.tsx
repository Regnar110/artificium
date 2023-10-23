import React from 'react'
import Image from 'next/image'
import friends_switch from '../../../../../public/controller/friends_switch.svg'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/typedHooks'
import { UI_VIEW_CHANGE, currentUIState } from '@/redux/slices/dashboardUI_controller/dashboardUI_controller'
import { useMediaQuery } from 'react-responsive'

const FriendListSwitch = () => {
    const dispatch = useAppDispatch()
    const currentFriendPanelStatus:boolean = useAppSelector(currentUIState).friendList_panel
    const widthQuery = useMediaQuery({ query: '(max-width: 768px)' })
    const handleFriendListDisplay = () => {
      if(widthQuery === true){
        dispatch(UI_VIEW_CHANGE({UI:"controller_panel", status:false}))
      }
      dispatch(UI_VIEW_CHANGE({UI:"friendList_panel", status:!currentFriendPanelStatus}))
    }
  return (
    <div id='friend_list_switch' className='text-[#9B9C9E] flex items-center'>
        <div onClick={handleFriendListDisplay} className='cursor-pointer offer flex flex-row-reverse justify-end gap-x-3 hover:bg-[#363A3D] transition-all px-2 py-2 rounded-sm'>
            <span className='font-semibold w-fit'>Friends</span>
            <Image className='w-[17px]' src={friends_switch} alt='buy turbo'/>            
        </div>
    </div>
  )
}

export default FriendListSwitch
