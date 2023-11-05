import React from 'react'
import PuffLoader from 'react-spinners/PuffLoader'

const MailBoxLoader = () => {
  return (
    <div className='flex flex-col text-white gap-2 w-full h-full justify-center items-center font-plus_jakarta_sans'>
        <PuffLoader color="#36d7b7" />
        <span className='w-fit text-[18px] font-bold'>Loading...</span>
      
    </div>
  )
}

export default MailBoxLoader
