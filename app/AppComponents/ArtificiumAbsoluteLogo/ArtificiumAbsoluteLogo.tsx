'use client'
import React from 'react'
import Image from 'next/image'
import artificium_logo from '../../../public/logo/artificium_logo.png'

interface Props {
    position:"absolute" | "relative",
    positionCordinates?:string;
}

const ArtificiumAbsoluteLogo = ({position, positionCordinates}:Props) => {
  return (
    <div className={`artifictium_logo w-fit h-fit ${position} ${positionCordinates}`}>
        <Image src={artificium_logo} alt="artificium_logo"/>
    </div>
  )
}

export default ArtificiumAbsoluteLogo
