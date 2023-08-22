import React from 'react'
import Image, { StaticImageData } from 'next/image'
interface ProviderLoginProps {
    providerAction: () =>any
    providerLogo: StaticImageData
    providerName: string
}

// Button przyjmujący jako funkcję akcję, wywołującą logowanie się użytkownika lub wylogowanie się.
const ProviderLoginButton = ({providerAction, providerLogo, providerName}:ProviderLoginProps) => {

  return (
    <button onClick={() => {
      providerAction()
      }} className='px-5 whitespace-nowrap bg-[#1A1D21] text-[14px] text-[#686B6E] font-plus_jakarta_sans font-semibold flex justify-center items-center gap-3 h-[48px]' aria-label='google_login'>
        <Image className='w-fit' src={providerLogo} alt='google'/>
        Sign in with {providerName}
    </button>
  )
}

export default ProviderLoginButton
