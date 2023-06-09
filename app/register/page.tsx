'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import register_image_big from '../../public/register_assets/register_image_big.png'
import register_image_small from '../../public/register_assets/register_image_small.png'
import ArtificiumAbsoluteLogo from '../AppComponents/ArtificiumAbsoluteLogo/ArtificiumAbsoluteLogo'

import TextField from '@mui/material/TextField'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import MediaQuery from 'react-responsive'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
const Register = () => {
    const [mounted, setMounted] = useState<boolean>(false)
    useEffect(() =>{
        setMounted(true)
    })
    
    const theme = createTheme({
        palette: {
          primary: {
            main: '#82DBF7',
          }
        }
      })

  return mounted ?
    <main className='bg-[#131619] grid box-border grid-cols-5'>
        <div className='register_wrapper w-full col-span-3 xl:col-span-3 grid '>
            <div className='login_redirect_with_logorelativ justify-between w-full h-fit'>
              <ArtificiumAbsoluteLogo position='relative' positionCordinates='top-5 left-5'/>   
            </div>
            <div className='register_functionality_block h-fit w-[90%]  xl:w-[70%] justify-self-center flex flex-col gap-y-10'>
                <header className='register_header text-[25px] lg:text-[30px] xl:text-[40px] font-plus_jakarta_sans text-[#fff] row-span-3 self-center'>
                Connect with your team and bring your creative ideas to life.
                </header>
                <form  className='register_form grid grid-cols-2 gap-5 h-fit row-span-2 w-full'>
                <ThemeProvider theme={theme}>
                    <div className='register_input flex flex-col gap-y-4'>
                        <span className='text-[14px] font-plus_jakarta_sans text-[#9B9C9E] font-medium'>E-mail</span>
                        <TextField InputLabelProps={{ style: {color:"#9B9C9E"}}} sx={{input: {color:"#fff", background:"#1A1D21", border:"2px solid #363A3D", borderRadius:"10px"}}} color="primary" id="outlined-basic" label="E-mail" variant="outlined" />                        
                    </div>
                    <div className='register_input flex flex-col gap-y-4'>
                        <span className='text-[14px] font-plus_jakarta_sans text-[#9B9C9E] font-medium'>First name</span>
                        <TextField InputLabelProps={{ style: {color:"#9B9C9E"}}} sx={{input: {color:"#fff", background:"#1A1D21", border:"2px solid #363A3D", borderRadius:"10px"}}} color="primary" id="outlined-basic" label="First name" variant="outlined" />
                    </div>
                    <div className='register_input flex flex-col gap-y-4'>
                        <span className='text-[14px] font-plus_jakarta_sans text-[#9B9C9E] font-medium'>Password</span>
                        <TextField InputLabelProps={{ style: {color:"#9B9C9E"}}} sx={{input: {color:"#fff", background:"#1A1D21", border:"2px solid #363A3D", borderRadius:"10px"}}} color="primary" id="outlined-basic" label="Password" variant="outlined" />
                    </div>
                    <div className='register_input flex flex-col gap-y-4'>
                        <span className='text-[14px] font-plus_jakarta_sans text-[#9B9C9E] font-medium'>Repeat password</span>
                        <TextField InputLabelProps={{ style: {color:"#9B9C9E"}}} sx={{input: {color:"#fff", background:"#1A1D21", border:"2px solid #363A3D", borderRadius:"10px"}}} color="primary" id="outlined-basic" label="Repeat password" variant="outlined" />                            
                    </div>
                </ThemeProvider>
                <div className='terms_conditions_checkbox flex gap-x-2 text-white font-plus_jakarta_sans items-center col-span-2'>
                    <Checkbox size='medium' aria-label='terms_conditions' sx={{color:"#363A3D", '&.Mui-checked': {color:"#B6F09C"}}} defaultChecked />
                    <span className='text-[16px] w-full'>I agree with <span className='font-plus_jakarta_sans text-[16px] font-bold text-transparent bg-clip-text gradient_dayblue_blue_green500'>Terms and conditions</span></span>
                </div>
                <Button
                className='w-full col-span-2 bg-[#B6F09C] '
                sx={{
                    backgroundColor:"#B6F09C",
                    fontFamily:"Plus Jakarta Sans",
                    fontWeight:"700",
                    color:"#0C1132",
                    ':hover': {
                    bgcolor: '#9bf074', // theme.palette.primary.main
                    },
                }}
                >
                    Create free account
                </Button>
                </form>                
                <span className='text-[16px] w-full text-center text-white'>Already have an account?<span className='font-plus_jakarta_sans text-[16px] font-bold text-transparent bg-clip-text gradient_dayblue_blue_green500'> Log in</span></span>
                <footer className='text-[#9B9C9E] text-[14px] flex justify-between'>
                    <span>Artificium.app © 2023</span>
                    <span>Privacy Policy</span>
                </footer>
            </div>
        </div>
        <div className='register_ilustration w-full col-span-2'>
            <Image className='float-right h-[100vh]' src={register_image_small} alt='register_image'/>
        </div>
        
    </main>
  :
  null
}

export default Register
