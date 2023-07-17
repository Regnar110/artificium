'use client'

import Button from '@mui/material/Button'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import google from '../../../../../public/buttons/login_buttons/google.svg'
import apple from '../../../../../public/buttons/login_buttons/apple.svg'
import { useSession, signIn, signOut } from "next-auth/react"
import { NextAuthProviderLoginPopUpCenter } from '@/app/utils/NextAuthProviderLoginPopUpCenter/NextAuthProviderLoginPopUpCenter'
import { TextField } from '@mui/material'
import { useForm } from 'react-hook-form'

interface GoogleSessionUser {
  email:string;
  name:string;
  image:string
}
const LoginButtons = () => {
  const [ showAdditionalInput, setAdditionalInputState ] = useState<boolean>(false)
  const ref = useRef<string>()
  const {data:session} = useSession()

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data:RegisterFormData) => {
      NextAuthProviderLoginPopUpCenter('/provider-sign-in/google', "Google user login")
      ref.current = data.nickname
  }
  useEffect(() => {
    if(session) {
      console.log(session) // sesja
      console.log(ref) // nickname wybrany dla użytkownika logowanego przez providera.
      // Teraz należy wykonać sprawdzenie w db czy użytkownik o takim mailu lub nicku istnieje, jeżeli nie to go zarejestrować a jeżeli tak to zalogować.
      // Trzeba też stworzyć customowy hook sesji lub coś podobnego, co w zależności od wyniku powyższego działania na bazie danych będzie
      // umozliwiało dostęp do dalszym części aplikacji

      // UWAGA TRZEBA ZMIENIĆ KOLEJNOŚĆ.
      // NAJPIERW UZYSKUJEMY SESJĘ. SPRAWDZAMY CZU TAKI EMAIL Z SESJI JUŻ JEST ZAREJESTROWANY JAKO UZYTKOWNIK APLIKACJI
        // JEŻELI NIE: UMOŻLIWIWAMY UTWORZENIE NOWEGO NICKNAME
        // JEŻELI TAK: POBIERAMY UŻYTKOWNIKA Z BAZY I PSZCZAMY DALEJ.
    }
  },[session])

  const handleSignInWithProvider = () => {
    if(userAuthenticated) {
      // jeżeli użtkownik jest zarejestrowany 
      // -- to wyniknie ze sprawdzenia w bazie czy email z utworzonej sesji już jest w bazie jako użytkownik
    } else {
      // jeżeli nie jest
    }
    setAdditionalInputState(true)
  }
  return (
    // provider-sign-in/google
    <div className='flex flex-col overflow-hidden'>
      <div className='buttons_container flex flex-col sm:flex-row gap-4 sm:gap-8'>
          <Button onClick={() => session ? signOut() : handleSignInWithProvider()} className='px-5 whitespace-nowrap bg-[#1A1D21] text-[14px] text-[#686B6E] font-plus_jakarta_sans font-semibold flex gap-3 h-[48px]' variant='text' aria-label='google_login'>
            <Image className='w-fit' src={google} alt='google'/>
            Sign in with Google
          </Button>
          <Button className='px-5 whitespace-nowrap bg-[#1A1D21] text-[14px] text-[#686B6E] font-plus_jakarta_sans font-semibold flex gap-3 h-[48px]' variant='text' aria-label='google_login'>
            <Image className='w-fit' src={apple} alt='google'/>
            Sign In with Apple
          </Button>  
      </div>
      <form className={`${showAdditionalInput ? "h-auto" : "h-[0px]"}`} onSubmit={handleSubmit(onSubmit as any)}>
            <TextField 
                className='w-[70%]'
                {
                    ...register(
                        "nickname",
                        {
                            required:"This field is required",
                        }
                    )
                }
                type='text'
                InputLabelProps={{ style: {color:"#9B9C9E"}}} 
                sx={{input: {color:"#fff", background:"#1A1D21", border:"2px solid #363A3D", borderRadius:"10px"}}} 
                color="primary" 
                id="outlined-basic" 
                label="Nickname" 
                variant="outlined" 
                />
                <Button type='submit' className='px-5 whitespace-nowrap bg-[#1A1D21] text-[14px] text-[#686B6E] font-plus_jakarta_sans font-semibold flex gap-3 h-[48px] w-[70%]' variant='text' aria-label='google_login'>
                    {/* <Image className='w-fit' src={google} alt='google'/> */}
                    Continue
                </Button>
        </form>
    </div>
  )
}

export default LoginButtons
