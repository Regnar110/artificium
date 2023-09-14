import React from 'react'
import Modal from 'react-modal';
const UserModal = () => {
  return (
    <Modal        
        ariaHideApp={false}
        isOpen={modalIsOpen}
        contentLabel="Create new group"
        className={"flex gap-8 bg-[#000000d3]  p-2 h-full justify-center items-center"}>

    </Modal>
  )
}

export default UserModal
