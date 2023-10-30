import React from 'react'
import GlassModal from '../GlassModal/GlassModal';
interface Props {
    modalIsOpen:boolean;
    setModal:(new_status: boolean) => void
}
const FriendRequestModal = ({modalIsOpen, setModal}:Props) => {
  return (
    <GlassModal modalIsOpen={modalIsOpen} header_title='Answer friend request' header_subtitle='Someone wants to contact you. Consider his request!' setModal={setModal}>
        <span> Consider user proposal</span>
        <span>Check this!</span>
    </GlassModal>
  )
}

export default FriendRequestModal
