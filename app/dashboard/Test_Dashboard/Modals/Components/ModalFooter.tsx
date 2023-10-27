import React from 'react'
import Image from 'next/image'
import artificium_logo from '../../../../../public/home/mainlogo.svg'
const ModalFooter = () => {
  return (
    <footer className='w-full flex justify-center items-center'>
        <Image src={artificium_logo} alt="artificium logo" className='w-[200px]'/>
    </footer>
  )
}

export default ModalFooter
