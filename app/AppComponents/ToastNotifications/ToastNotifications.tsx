import React from 'react'
import Image from 'next/image'
import success_icon from '../../../public/notifications/success.svg'
import error_icon from '../../../public/notifications/error.svg'
import { Toaster, resolveValue } from 'react-hot-toast';
const ToastNotifications = () => {
  return (

    <Toaster position='bottom-center'>
      {(t) => {
        console.log(t)
        return (
            <div
            className='bg-[#060708] w-fit font-plus_jakarta_sans flex gap-3 justify-center items-center p-4'
            >
              <div className='notification_icon relative w-[30px] h-full'>
                <Image src={t.type === 'error' ? error_icon : success_icon} alt='response icon'/>
              </div>
              <div className='text-white text-[15px] flex flex-col h-full'>
                <span className={`${t.type === 'error' ? "text-[#D0302F]" : "text-[#4AC97E]"}`}>{t.type === 'error' ? "Something went wrong." : "Success!"} </span>
                {resolveValue(t.message, t)}
              </div>  
            </div>
        )
      }
      }
    </Toaster>
    
  )
}

export default ToastNotifications
