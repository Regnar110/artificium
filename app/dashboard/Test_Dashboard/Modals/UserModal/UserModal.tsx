import UserAvatarWithStatus from '@/app/AppComponents/UserAvatarWithStatus/UserAvatarWithStatus';
import React, { useEffect, useState } from 'react'
import user_avatar from '../../../../../public/Dashboard/UserPanel/UserHeader/Avatar.png'
import InviteButton from '@/app/AppComponents/InviteButton/InviteButton';
import CommonFriends from './Components/CommonFriends';
import CommonGroups from './Components/CommonGroups';
import { useAppSelector } from '@/redux/hooks/typedHooks';
import { getUserObject } from '@/redux/slices/userSession/userSessionSlice';
import { userAccessRequest } from '@/app/utils/UserAccessRequest';
import GlassModal from '../GlassModal/GlassModal';
import ModalFooter from '../Components/ModalFooter';

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
    <GlassModal modalIsOpen={modalIsOpen} setModal={setModal} header_title='User panel' header_subtitle='Check who this user is. Invite him as a friend or be neutral.' >
        <section className='user_avatar flex items-center justify-between'>
          <UserAvatarWithStatus size='large' modal_action={false} user_data={user_data} user_avatar={user_avatar} show_nick={true} user_status={{with_dot:true, with_text:false, status:user_data.isOnline ? "ONLINE" : "OFFLINE"}} reveal_mail={true}/>
          <InviteButton text='Invite' isAlreadyFriend={isUserFriend} modalUserId={user_data._id}/>
        </section>
        <CommonFriends user_avatar={user_avatar} friends={commonFriends!}/>
        <CommonGroups groups={commonGroups!}/>
        <ModalFooter/>
    </GlassModal>
  )
}

export default UserModal
