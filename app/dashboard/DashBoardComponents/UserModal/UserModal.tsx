import UserAvatarWithStatus from '@/app/AppComponents/UserAvatarWithStatus/UserAvatarWithStatus';
import React, { useEffect } from 'react'
import Image from "next/image"
import artifiucium_logo from '../../../../public/home/mainlogo.svg'
import artificium_icon from '../../../../public/logo/artificium_logo.png'
import Modal from 'react-modal';
import user_avatar from '../../../../public/Dashboard/UserPanel/UserHeader/Avatar.png'
import InviteButton from '@/app/AppComponents/InviteButton/InviteButton';
import CommonFriends from './components/CommonFriends';
import CommonGroups from './components/CommonGroups';
import { useAppSelector } from '@/redux/hooks/typedHooks';
import { getUserObject } from '@/redux/slices/userSession/userSessionSlice';
import { userAccessRequest } from '@/app/utils/UserAccessRequest';

interface UserModalProps {
  modalIsOpen:boolean;
  user_data:Friend | AuthenticatedUser
  setModal:(new_status: boolean) => void
}
const UserModal = ({modalIsOpen, user_data, setModal}:UserModalProps) => {
  const authUser = useAppSelector(getUserObject)

  useEffect(() =>{
    //FUNKCJA KTÓRA ZWRACA TABLICĘ Z WSPÓLNYMI GRUPAMI UŻYTKOWNIKA APLIKACJI I UŻYTKOWNIKA W KTÓREGO IKONKĘ KLIKNĄŁ
    if(user_data._id) {
      console.log(authUser.user_groups_ids)
      const preparedGroups = user_data.user_groups_ids.filter(group => {
        for(const app_user_group of authUser.user_groups_ids){
          return group === app_user_group
        }
      })

      //FUNKCJA KTÓRA ZWRACA TABLICĘ Z WSPÓLNYMI ZNAJOMYMI UŻYTKOWNIKA APLIKACJI I UŻYTKOWNIKA W KTÓREGO IKONKĘ KLIKNĄŁ
      const preparedFriends = user_data.user_friends_ids.filter(friend => {
        for(const app_user_friend of authUser.user_friends_ids) {
          return friend === app_user_friend
        }
      }) 
      // console.log(user_data.user_groups_ids)
      const ready = userAccessRequest('getSelectedGroups', preparedGroups)     
    }

  }, [modalIsOpen, user_data])
  return (
    <Modal        
        ariaHideApp={false}
        isOpen={modalIsOpen}
        contentLabel="Create new group"
        className={"flex flex-col gap-8 bg-[#000000d3]  p-2 h-full justify-center items-center"}>
        <div className='bg-[#000000c2] p-5 max-w-[600px] flex flex-col justify-center items-center gap-8 rounded-md font-plus_jakarta_sans'>
          <header className='header_and_close w-full flex justify-between items-center pb-6'>
            <div className='heder_with_icon flex items-center gap-3'>
              <Image src={artificium_icon} alt="artificium icon logo" className='w-[25px] h-[25px]'/>
              <h1 className='text-white text-[20px] whitespace-nowrap w-fit'>User panel</h1>
            </div>
              
              <button className='text-red-500 text-[20px] font-extrabold w-fit cursor-pointer' onClick={()=>setModal(!modalIsOpen)}>x</button>             
          </header>
          <section className='user_avatar flex items-center justify-between'>
            <UserAvatarWithStatus size='large' modal_action={false} user_data={user_data} user_avatar={user_avatar} show_nick={true} user_status={{with_dot:true, with_text:false, status:user_data.isOnline ? "ONLINE" : "OFFLINE"}} reveal_mail={true}/>
            <InviteButton text='Invite'/>
          </section>
          <CommonFriends user_avatar={user_avatar}/>
          <CommonGroups/>
          <footer className='w-full flex justify-center items-center'>
            <Image src={artifiucium_logo} alt="artificium logo" className='w-[200px]'/>
          </footer>
        </div>
    </Modal>
  )
}

export default UserModal
