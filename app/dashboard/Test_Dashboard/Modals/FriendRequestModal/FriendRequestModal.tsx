import React, { useEffect } from 'react'
import GlassModal from '../GlassModal/GlassModal';
import testavatar from '../../../../../public/Dashboard/UserPanel/UserHeader/Avatar.png'
import ModalFooter from '../Components/ModalFooter';
import UserAvatarWithStatus from '@/app/AppComponents/UserAvatarWithStatus/UserAvatarWithStatus';
import FRresponseButtons from './components/FRresponseButtons';
import { _emit_ACCEPT_REQUEST, _emit_REJECT_REQUEST } from '@/app/utils/SocketFriendRequestHandlers/SocketFriendRequestHandlers';
import { useAppSelector } from '@/redux/hooks/typedHooks';
import { getUserId, getUserObject } from '@/redux/slices/userSession/userSessionSlice';
interface Props {
    modalIsOpen:boolean;
    setModal:(new_status: boolean) => void
    sender:string;
    email:string,
    fromId:string,
}
const FriendRequestModal = ({modalIsOpen, setModal, sender, email, fromId}:Props) => {
  const {_id, nickname} = useAppSelector(getUserObject)
  const handleRequestResponseToUser = (type: "accept" | "reject") => {
    type==="accept" ? _emit_ACCEPT_REQUEST(_id, nickname, fromId) : _emit_REJECT_REQUEST(_id, nickname, fromId);
  }


  return (
    <GlassModal modalIsOpen={modalIsOpen} header_title='Answer friend request' header_subtitle='Someone wants to contact you. Consider his request!' setModal={setModal}>
        <section className='friend_request_modal_content flex flex-col gap-y-3'>
          <UserAvatarWithStatus size='medium' user_avatar={testavatar} modal_action={true} user_data={{nickname:sender, email:email}} reveal_mail={true} show_nick={true}/>
          <article className='message bg-[#0D0F10] rounded-md px-3 py-2 text-[#9B9C9E] h-[200px] flex flex-col justify-between'>
            <div>
              Hello <span className='text-[#B6F09C]'>{sender}</span>. I would like you to join my group of friends. This would make it easier for us to establish and maintain contact. Consider my request.
            </div>
            <div className='accept_reject_buttons flex gap-2'>
              <FRresponseButtons type='Accept' callback={()=>_emit_ACCEPT_REQUEST(_id, nickname, fromId)}/>
              <FRresponseButtons type='Reject' callback={()=>_emit_REJECT_REQUEST(_id, nickname, fromId)}/>
            </div>
          </article>
        </section>
        <ModalFooter/>
    </GlassModal>
  )
}

export default FriendRequestModal
