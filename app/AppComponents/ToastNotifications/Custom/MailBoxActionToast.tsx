import React from 'react'

interface Props {
    message:string
    sender:string
    topic:string
}

const CUSTOM_TOAST_MAILBOX_ACTION = ({message, sender, topic}:Props) => {
  console.log("CUSTOM TOAST")
  return (
    <section className='TOAST_group_action bg-[#060708] text-[#9B9C9E] w-[280px] font-plus_jakarta_sans flex flex-col gap-2 justify-center items-start px-5 py-2 rounded-md shadow-sm shadow-[#B6F09C]'>
        <h3 className='w-fit text-[18px] font-bold'>Inbox: New message</h3>
        <div className='text-[14px] font-bold'> Topic: <span className='font-normal'>{topic}</span></div>
        <div className=' text-[14px] flex gap-2 font-bold'>
            Sender
            <span className='text-[#B6F09C] font-normal'>{sender}</span>
        </div>
        <span className='text-white text-[14px]'>{message}</span>
    </section>
  )
}

export const renderMailboxActionToast = (message:string, sender:string, topic:string) => {
  return(
    <CUSTOM_TOAST_MAILBOX_ACTION message={message} sender={sender} topic={topic}/>
  )
}
