import React, { useEffect } from 'react'
import GlassModal from '../GlassModal/GlassModal';
import testavatar from '../../../../../public/Dashboard/UserPanel/UserHeader/Avatar.png'
import ModalFooter from '../Components/ModalFooter';
import { useAppSelector } from '@/redux/hooks/typedHooks';
import { getUserObject } from '@/redux/slices/userSession/userSessionSlice';
import UserAvatarWithStatus from '@/app/AppComponents/UserAvatarWithStatus/UserAvatarWithStatus';
interface Props {
    modalIsOpen:boolean;
    setModal:(new_status: boolean) => void
}
const FriendRequestModal = ({modalIsOpen, setModal}:Props) => {
  const test_user = useAppSelector(getUserObject)
  return (
    <GlassModal modalIsOpen={modalIsOpen} header_title='Answer friend request' header_subtitle='Someone wants to contact you. Consider his request!' setModal={setModal}>
        <section className='friend_request_modal_content flex flex-col gap-y-3'>
          <UserAvatarWithStatus size='medium' user_avatar={testavatar} modal_action={true} user_data={test_user} user_status={{with_dot:true, status:test_user.isOnline ? "ONLINE":"OFFLINE"}} reveal_mail={true} show_nick={true}/>
          <article className='message bg-[#0D0F10] rounded-md px-3 py-2 text-[#9B9C9E] h-[200px] flex flex-col justify-between'>
            <div>
              Hello <span className='text-[#B6F09C]'>{test_user.nickname}</span>. I would like you to join my group of friends. This would make it easier for us to establish and maintain contact. Consider my request.
            </div>
            <div className='accept_reject_buttons flex gap-2'>
              <button className='request_response_button text-black bg-[#B6F09C] px-3 py-1 rounded-md'>
                Accept
              </button>
              <button className='request_response_button text-black bg-[#D0302F] px-3 py-1 rounded-md'>
                Reject
              </button>
            </div>
          </article>
        </section>
        <ModalFooter/>
    </GlassModal>
  )
}

export default FriendRequestModal