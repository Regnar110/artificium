import React from 'react'
import Image from 'next/image'
import main_logo from '../../../../public/home/mainlogo.svg'
const EmptyBoardWaterMark = () => {
  return (
    <main className='relative w-[400px] h-full opacity-20 flex flex-col justify-center items-center gap-10'>
      <Image src={main_logo} alt='logo_watermark'/>
      <span className='font-plus_jakarta_sans text-center'>/Create an group or join to start creating magic</span>
    </main>
  )
}

export default EmptyBoardWaterMark
