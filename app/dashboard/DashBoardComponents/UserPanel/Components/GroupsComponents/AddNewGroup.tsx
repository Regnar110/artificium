import React from 'react'
import Image from 'next/image'
import new_group from '../../../../../../public/Dashboard/UserPanel/Groups/new_group.svg'
const AddNewGroup = () => {
  return (
    <div className='add_new_group text-[#686B6E] text-[16px] flex justify-center items-center gap-x-5'>
        <Image className='w-[30px]' src={new_group} alt='new_Group_button'/>
        <span>Add new group</span>
    </div>
  )
}

export default AddNewGroup
