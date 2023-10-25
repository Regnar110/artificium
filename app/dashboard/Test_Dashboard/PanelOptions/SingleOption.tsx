import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import ManageGroupModal from '../Modals/ManageGroupModal/ManageGroupModal'

interface Props {
    text:string,
    icon:StaticImageData
    onClickCallback?:(...args:any) => void
    modal? :boolean, //default NO MODAL AVAILABLE
    modalType?: "groupManage"
}
const SingleOption = ({text, icon, onClickCallback, modal=false, modalType}:Props) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const onClickHandler = () => {
    onClickCallback && onClickCallback()
    setModalIsOpen(true)
  }
  const modalOpenCloseHandler = (new_status:boolean) => setModalIsOpen(new_status)

  
  return (
    <>
      <div className='group_chat_choice cursor-pointer hover:text-white hover:bg-[#363A3D] transition-all p-2 rounded-sm flex items-center gap-x-3' onClick={onClickHandler}>
          <Image className='w-[17px]' src={icon} alt='artificium'/>
          <span className='font-semibold w-fit hover:text-white transition-all '>{text}</span>         
      </div>    
      {
        modal===true && modalType ==="groupManage"  ? <ManageGroupModal modalIsOpen={modalIsOpen} setModal={modalOpenCloseHandler}/> : null
      }
    </>

  )
}

export default SingleOption
