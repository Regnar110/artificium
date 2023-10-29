import React, { useEffect, useState } from 'react'
import ModalScrollUserList from './GroupManage/ModalScrollUserList';
import InviteStringGenerator from './GroupManage/InviteStringGenerator';
import { useAppSelector } from '@/redux/hooks/typedHooks';
import { getUserObject } from '@/redux/slices/userSession/userSessionSlice';
import { getChat } from '@/redux/slices/chattingWindows/chattingWindowsSlice';
import { userAccessRequest } from '@/app/utils/UserAccessRequest';
import ModalFooter from '../Components/ModalFooter';
import GlassModal from '../GlassModal/GlassModal';

interface Props {
    modalIsOpen:boolean,
    setModal: (new_status:boolean) => void
}
const ManageGroupModal = ({modalIsOpen, setModal}:Props) => {
    const [scrollListUsers, setScrollListUsers ] = useState<AuthenticatedUser[]>()
    const {user_friends_ids}= useAppSelector(getUserObject)
    const {group_users} = useAppSelector(getChat)
    
    const getUsers = async () => {
      // Tu otrzymujemy z serwera wyszczególnionych( po id) użytkowników.
      // pomieszani przyjaciele i użytkownicy grupy(aktualnie w której jest użytkownik) - BEZ DUPLIKATÓW
      const mixedUsers = [...user_friends_ids, ...group_users!].filter((element,index, self) => self.indexOf(element) === index)
      const users = await userAccessRequest<AuthenticatedUser[], string[]>('getSelectedUsers', mixedUsers)
      setScrollListUsers(users)
    }

    useEffect(() => {
      // jeżeli modal jest true wywołujemy funkcję.
      modalIsOpen && getUsers()
    })
  return (
    <GlassModal modalIsOpen={modalIsOpen} setModal={setModal} header_title='Mange this group' header_subtitle='Add or remove group users. Manage its visibility status.'>
        {scrollListUsers ? <ModalScrollUserList list_users={scrollListUsers!}/> : <div className='hidden'/>}
        <InviteStringGenerator/>
        <ModalFooter/>
    </GlassModal>
  )
}

export default ManageGroupModal
