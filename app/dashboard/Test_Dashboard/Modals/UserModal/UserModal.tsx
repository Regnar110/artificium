import UserAvatarWithStatus from '@/app/AppComponents/UserAvatarWithStatus/UserAvatarWithStatus';
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import artifiucium_logo from '../../../../../public/home/mainlogo.svg'
import Modal from 'react-modal';
import user_avatar from '../../../../../public/Dashboard/UserPanel/UserHeader/Avatar.png'
import InviteButton from '@/app/AppComponents/InviteButton/InviteButton';
import CommonFriends from './Components/CommonFriends';
import CommonGroups from './Components/CommonGroups';
import { useAppSelector } from '@/redux/hooks/typedHooks';
import { getUserObject } from '@/redux/slices/userSession/userSessionSlice';
import { userAccessRequest } from '@/app/utils/UserAccessRequest';
import ModalGlassContainer from '../Components/ModalGlassContainer';
import ModalHeader from '../Components/ModalHeader';

interface UserModalProps {
  modalIsOpen:boolean;
  user_data:Friend | AuthenticatedUser
  setModal:(new_status: boolean) => void
}
const UserModal = ({modalIsOpen, user_data, setModal}:UserModalProps) => {
  const authUser = useAppSelector(getUserObject)
  const isUserFriend = authUser.user_friends_ids.includes(user_data._id)
  const [commonGroups, setCommonGroups ] = useState<Group[]>()
  const [ commonFriends, setCommonFriends ]= useState<Friend[]>()
  
  const getCommonGroupsAndFriends = async () => {
    if(user_data._id) {
      const preparedGroups = user_data.user_groups_ids.filter(group => authUser.user_groups_ids.includes(group));
      //FUNKCJA KTÓRA ZWRACA TABLICĘ Z WSPÓLNYMI ZNAJOMYMI UŻYTKOWNIKA APLIKACJI I UŻYTKOWNIKA W KTÓREGO IKONKĘ KLIKNĄŁ
      const preparedFriends = user_data.user_friends_ids.filter(friend =>authUser.user_friends_ids.includes(friend));
      const groups_response = await userAccessRequest<Group[], string[]>('getSelectedGroups', preparedGroups)
      const friends_response = await userAccessRequest<Friend[], string[]>('getSelectedUsers', preparedFriends)
      setCommonGroups(groups_response)
      setCommonFriends(friends_response)
    }   
  }
  useEffect(() =>{
    getCommonGroupsAndFriends()
    //FUNKCJA KTÓRA ZWRACA TABLICĘ Z WSPÓLNYMI GRUPAMI UŻYTKOWNIKA APLIKACJI I UŻYTKOWNIKA W KTÓREGO IKONKĘ KLIKNĄŁ
      // console.log(user_data.user_groups_ids

  }, [modalIsOpen, user_data])
  return (
    <Modal        
        ariaHideApp={false}
        isOpen={modalIsOpen}
        contentLabel="User modal"
        style={{content:{background:"transparent"}, overlay:{background:"#0004", zIndex:"50"}}}
        className={"flex flex-col backdrop-blur-lg backdrop-opacity-100 h-full justify-center items-center"}>
        <ModalGlassContainer>
          <ModalHeader 
            top_title='User panel' 
            subtitle='Check who this user is. Invite him as a friend or be neutral.' 
            modalIsOpen={modalIsOpen} 
            setModal={setModal}
            />
          <section className='user_avatar flex items-center justify-between'>
            <UserAvatarWithStatus size='large' modal_action={false} user_data={user_data} user_avatar={user_avatar} show_nick={true} user_status={{with_dot:true, with_text:false, status:user_data.isOnline ? "ONLINE" : "OFFLINE"}} reveal_mail={true}/>
            <InviteButton text='Invite' isAlreadyFriend={isUserFriend}/>
          </section>
          <CommonFriends user_avatar={user_avatar} friends={commonFriends!}/>
          <CommonGroups groups={commonGroups!}/>
          <footer className='w-full flex justify-center items-center'>
            <Image src={artifiucium_logo} alt="artificium logo" className='w-[200px]'/>
          </footer>
        </ModalGlassContainer>
    </Modal>
  )
}

export default UserModal
