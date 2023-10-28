import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import ManageGroupModal from '../Modals/ManageGroupModal/ManageGroupModal'
import MailBoxModal from '../Modals/MailBoxModal/MailBoxModal'

interface Props {
    text:string,
    icon:StaticImageData
    onClickCallback?:(...args:any) => void
    modal? :boolean, //default NO MODAL AVAILABLE
    modalType?: "groupManage" | "mailBoxModal"
}
const SingleOption = ({text, icon, onClickCallback, modal=false, modalType}:Props) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const onClickHandler = () => {
    onClickCallback && onClickCallback()
    setModalIsOpen(true)
  }
  const modalOpenCloseHandler = (new_status:boolean) => setModalIsOpen(new_status)

  const renderModal = () => {
    if(modal === true) {
      switch(modalType) {
        case "groupManage":
          return <ManageGroupModal modalIsOpen={modalIsOpen} setModal={modalOpenCloseHandler}/>
        case "mailBoxModal":
          return <MailBoxModal modalIsOpen={modalIsOpen} setModal={modalOpenCloseHandler}/>
        default:
          break;
      } 
    } else {
      return null
    }
  }
  return (
    <>
      <div className='group_chat_choice cursor-pointer hover:text-white text-[#9B9C9E] hover:bg-[#363A3D] transition-all px-2  rounded-sm flex items-center gap-x-3' onClick={onClickHandler}>
          <Image className='w-[17px]' src={icon} alt='artificium'/>
          <span className='font-semibold w-fit hover:text-white transition-all '>{text}</span>         
      </div>    
      {
        renderModal()
      }
    </>

  )
}

export default SingleOption
