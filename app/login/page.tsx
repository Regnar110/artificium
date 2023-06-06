"use client"
import Image from 'next/image'
import login_image from '../../public/login_assets/login_illustration.png'
import artificium_logo from '../../public/logo/artificium_logo.png'
import Button from '@mui/material/Button'
import google from '../../public/buttons/login_buttons/google.svg'
import apple from '../../public/buttons/login_buttons/apple.svg'
export default function Home() {
  return (
    <main className='login_page bg-[#131619] grid grid-cols-2 w-full'>
      <div className='login_section relative grid grid-rows-3 w-full'>
        <div className='artifictium_logo relative top-5 left-5'>
          <Image src={artificium_logo} alt="artificium_logo"/>
        </div>
        <div className='login_block grid grid-row-6 col-span-2 justify-self-center'>
          <div className='login_headers flex flex-col gap-y-4'>
            <span className='font-plus_jakarta_sans text-[36px] font-extralight text-white'>Let's get <span className='font-plus_jakarta_sans text-[36px] font-bold text-transparent bg-clip-text gradient_dayblue_blue_green500'>creative!</span></span>
            <span className='text-[#9B9C9E] font-plus_jakarta_sans text-[18px] font-medium'>Log in to Artificium to start creating magic.</span>  
          </div>
          <div className='login_buttons flex flex-col gap-y-9'>
            <div className='login_space_breaker flex items-center justify-center relative text-[#686B6E] text-center text-[12px] w-full'>
              <div className='line h-[1px] w-full bg-[#363A3D]'></div>
              <div className='w-full'>or continue with</div>
              <div className='line h-[1px] w-full bg-[#363A3D]'></div>
            </div>
            <div className='buttons_container flex gap-y-8'>
              <Button className='px-5 bg-[#1A1D21] text-[14px] text-[#686B6E] font-plus_jakarta_sans font-semibold flex gap-3 h-[48px]' variant='text' aria-label='google_login'>
                <Image src={google} alt='google'/>
                Sign In with Google
              </Button>
              <Button className='px-5 bg-[#1A1D21] text-[14px] text-[#686B6E] font-plus_jakarta_sans font-semibold flex gap-3 h-[48px]' variant='text' aria-label='google_login'>
                <Image src={apple} alt='google'/>
                Sign In with Apple
              </Button>              
            </div>
          </div>        
        </div>
        <div className='signup flex gap-3 relative left-5 bottom-5 place-self-end justify-self-start font-semibold text-[#686B6E]'>Don't have an accont?<span className='font-plus_jakarta_sans text-[16px] font-semibold text-transparent bg-clip-text gradient_dayblue_blue_green500'>Sign Up</span></div>
      </div>
      <div className='login_illustration relative w-full justify-self-end'>
        <Image 
          className='float-right object-contain' 
          src={login_image}
          alt='login_image'
        />
      </div>
    </main>
  )
}
