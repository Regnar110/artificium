import UserAvatarWithStatus from '@/app/AppComponents/UserAvatarWithStatus/UserAvatarWithStatus';
import React, { useEffect } from 'react'
import Modal from 'react-modal';
import user_avatar from '../../../../public/Dashboard/UserPanel/UserHeader/Avatar.png'

interface UserModalProps {
  modalIsOpen:boolean;
  user_data:Friend | AuthenticatedUser
  setModal:(new_status: boolean) => void
}
const UserModal = ({modalIsOpen, user_data, setModal}:UserModalProps) => {
  console.log(modalIsOpen)
  useEffect(() =>{

  }, [modalIsOpen])
  return (
    <Modal        
        ariaHideApp={false}
        isOpen={modalIsOpen}
        contentLabel="Create new group"
        className={"flex gap-8 bg-[#000000d3]  p-2 h-full justify-center items-center"}>
        <div className='bg-[#000000c2] p-5 max-w-[600px] flex flex-col justify-center items-center gap-8 rounded-md font-plus_jakarta_sans'>
          <header className='header_and_close w-full flex justify-between items-center'>
              <h1 className='text-white text-[28px] whitespace-nowrap w-fit'>User panel</h1> 
              <button className='text-red-500 text-[20px] font-extrabold w-fit cursor-pointer' onClick={()=>setModal(!modalIsOpen)}>x</button>             
          </header>
          <section className='user_avatar'>
            <UserAvatarWithStatus size='large' modal_action={false} user_data={user_data} user_avatar={user_avatar} show_nick={true} user_status={{with_dot:true, with_text:false, status:user_data.isOnline ? "ONLINE" : "OFFLINE"}}/>
          </section>
        </div>
    </Modal>
  )
}

export default UserModal
