import React, { useEffect, useState } from 'react'
import PuffLoader from 'react-spinners/PuffLoader'

const MailBoxLoader = () => {
  const [isLoadingActive, setIsLoadingActive] = useState<boolean>(true)

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setIsLoadingActive(false);
      }, 3000);
  
      // Zwróć funkcję czyszczenia timera w celu uniknięcia wycieków pamięci
      return () => clearTimeout(timeoutId);
    }, []);
  return (
    <div className='flex flex-col text-white gap-2 w-full h-full justify-center items-center font-plus_jakarta_sans'>
      {
        isLoadingActive ? 
        <>
          <PuffLoader color="#36d7b7" />
          <span className='w-fit text-[18px] font-bold'>Loading...</span>          
        </>
        :
        <span className='w-fit text-[18px] font-bold'>Your mailbox is empty</span>  
      }

      
    </div>
  )
}

export default MailBoxLoader
