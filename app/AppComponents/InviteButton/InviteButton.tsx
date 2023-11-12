import React from 'react'
import Image from 'next/image'
import send_black from '../../../public/chatpanel/chat_send_black.svg'
import already_invited from '../../../public/buttons/invite_button/already_invited.svg'
import { _emit_SEND_FRIEND_REQUEST } from '@/app/utils/SocketFriendRequestHandlers/SocketFriendRequestHandlers'
import { useAppSelector } from '@/redux/hooks/typedHooks'
import { getUserId, getUserNickName } from '@/redux/slices/userSession/userSessionSlice'

interface InviteBtnProps {
    text:string
    isAlreadyFriend:boolean
    modalUserId:string
}
const InviteButton = ({text,isAlreadyFriend, modalUserId}:InviteBtnProps) => {
  console.log(isAlreadyFriend)
  const appUserId = useAppSelector(getUserId)
  const fromUserNick = useAppSelector(getUserNickName)

  const testFriendRequest = () => {
    console.log(appUserId)
    console.log(fromUserNick)
    console.log(modalUserId)
    _emit_SEND_FRIEND_REQUEST(appUserId, fromUserNick, modalUserId)
  }
  return isAlreadyFriend === false ? 
    <button onClick={testFriendRequest} className='bg-[#B6F09C] relative w-fit h-fit px-4 py-2 text-[#0C1132] text-[15px] rounded-md font-semibold flex items-center justify-center gap-3'>
        <span className='w-full whitespace-nowrap'>{text}</span>
        <Image src={send_black} alt='send invite' className='w-[18px] h-[18px]' />
    </button>
    :
    <button className='bg-[#B6F09C] relative w-fit h-fit px-4 py-2 text-[#0C1132] text-[15px] rounded-md font-semibold flex items-center justify-center gap-3'>
      <span className='w-full whitespace-nowrap'>Your Friend</span>
      <Image src={already_invited} alt='send invite' className='w-[18px] h-[18px]' />
    </button>

}

export default InviteButton
