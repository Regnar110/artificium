import Modal from 'react-modal';
import React, { useEffect } from 'react'

interface Props {
    modalIsOpen:boolean,
    setModal: (new_status:boolean) => void
}
const ManageGroupModal = ({modalIsOpen, setModal}:Props) => {
    useEffect(()=>{
    },[modalIsOpen])
  return (
    <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        contentLabel="User modal"
        className={"flex flex-col gap-8  bg-[#000000d3] backdrop-blur-sm backdrop-opacity-100 p-2 h-full justify-center items-center z-50"}>
        <div className='bg-[#0000008f] backdrop-blur-sm bg-opacity-20 drop-shadow-lg   p-5 max-w-[600px] flex flex-col justify-center items-center gap-8 rounded-md font-plus_jakarta_sans z-50'>
          <header className='header_and_close w-full flex justify-between items-center pb-6'>
            <div className='heder_with_icon flex items-center gap-3'>
              <h1 className='text-white text-[20px] whitespace-nowrap w-fit' onClick={()=>setModal(false)}>User panel</h1>
            </div>
              
              <button className='text-red-500 text-[20px] font-extrabold w-fit cursor-pointer' onClick={()=> {
                setModal(!modalIsOpen)
                
                }}>x</button>             
          </header>
          <section className='user_avatar flex items-center justify-between'>
          </section>
asdasds
          <footer className='w-full flex justify-center items-center'>
          </footer>
        </div>
    </Modal>
  )
}

export default ManageGroupModal
