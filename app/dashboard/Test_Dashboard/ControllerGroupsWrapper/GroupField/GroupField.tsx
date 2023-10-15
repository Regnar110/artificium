import CustomHoverTooltip from '@/app/AppComponents/CustomHoverTolltip/CustomHoverTooltip'
import React from 'react'
import Image from 'next/image'
import group_icon from '../../../../../public/controller/test_group_icon.png'
import { useAppDispatch } from '@/redux/hooks/typedHooks'
import { UI_VIEW_CHANGE } from '@/redux/slices/dashboardUI_controller/dashboardUI_controller'

interface Props {
  group_id:string,
  group_title:string,
  groupSelect: () => void
}
const GroupField = ({group_id, group_title, groupSelect}:Props) => {
  const dispatch = useAppDispatch()
  return (
    <div id={group_id} className='group_field flex justify-center items-center' onClick={groupSelect}>
        <CustomHoverTooltip title={group_title} placement='right'>
        <div className='user cursor-pointer flex justify-center items-center w-fit p-4'>
            <Image className=' w-[40px] rounded-full' src={group_icon} alt="artificium_logo"/>
        </div>   
        </CustomHoverTooltip>
    </div>
  )
}

export default GroupField
