'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import new_group from '../../../../../../public/Dashboard/UserPanel/Groups/new_group.svg'
import CreateGroupModal from './CreateGroupModal'
const AddNewGroup = () => {
  const [ modalIsOpen, setIsOpen ] = useState<boolean>(false)

  return (
    <div  className='add_new_group text-[#686B6E] text-[16px] flex justify-center items-center gap-x-5'>
        <Image className='w-[30px]' src={new_group} alt='new_Group_button'/>
        <span onClick={() => setIsOpen(!modalIsOpen)}>Add new group</span>
        <CreateGroupModal modalIsOpen={modalIsOpen} setModalStatus={setIsOpen}/>
    </div>
  )
}

export default AddNewGroup
