import React from 'react'
import Image from 'next/image'
import send_black from '../../../public/chatpanel/chat_send_black.svg'

interface InviteBtnProps {
    text:string
}
const InviteButton = ({text}:InviteBtnProps) => {
  return (
    <button className='bg-[#B6F09C] relative w-fit h-fit px-4 py-2 text-[#0C1132] text-[15px] rounded-md font-semibold flex items-center justify-center gap-3'>
        <span className='w-full whitespace-nowrap'>{text}</span>
        <Image src={send_black} alt='send invite' className='w-[18px] h-[18px]' />
    </button>
  )
}

export default InviteButton
