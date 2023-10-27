import Modal from 'react-modal';
import React, { useEffect, useState } from 'react'
import ModalHeader from '../Components/ModalHeader';
import ModalScrollUserList from '../Components/GroupManage/ModalScrollUserList';
import InviteStringGenerator from '../Components/GroupManage/InviteStringGenerator';
import { useAppSelector } from '@/redux/hooks/typedHooks';
import { getUserObject } from '@/redux/slices/userSession/userSessionSlice';
import { getChat } from '@/redux/slices/chattingWindows/chattingWindowsSlice';
import { userAccessRequest } from '@/app/utils/UserAccessRequest';

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
    <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        contentLabel="User modal"
        style={{content:{background:"transparent"}, overlay:{background:"#0004", zIndex:"50"}}}
        className={"flex flex-col backdrop-blur-lg backdrop-opacity-100 h-full justify-center items-center z-50"}>
        <section className={`bg-[#ffffff13] backdrop-blur-md bg-opacity-20 drop-shadow-lg p-5 max-w-[600px] flex flex-col justify-center items-center gap-8 rounded-md font-plus_jakarta_sans z-5`}>
          <ModalHeader 
            top_title='Manage this group' 
            subtitle='Add or remove group users. Manage its visibility status' 
            setModal={setModal} 
            modalIsOpen={modalIsOpen}
          />
          {scrollListUsers && <ModalScrollUserList list_users={scrollListUsers!}/>}
          <InviteStringGenerator/>
        </section>
    </Modal>
  )
}

export default ManageGroupModal
