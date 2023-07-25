'use client'
import React from 'react'
import Image from 'next/image'
import artificium_logo from '../../../public/logo/artificium_logo.png'
import { useRouter } from 'next/navigation';

interface Props {
    position:"absolute" | "relative",
    positionCordinates?:string;
}

const ArtificiumAbsoluteLogo = ({position, positionCordinates}:Props) => {
  const router = useRouter()
  return (
    <div className={`artifictium_logo box-border w-fit self-start h-[100px] ${position} ${positionCordinates}`}>
        <Image onClick={() => router.push('/')} className='w-fit cursor-pointer' src={artificium_logo} alt="artificium_logo"/>
    </div>
  )
}

export default ArtificiumAbsoluteLogo
