'use client'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react'

const RegisterForm = () => {

    const theme = createTheme({
        palette: {
          primary: {
            main: '#82DBF7',
          }
        }
      })

  return (
    <form  className='register_form flex flex-col md:grid md:grid-cols-2 gap-5 h-fit md:row-span-2 w-full'>
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
            <Checkbox className='w-fit' size='medium' aria-label='terms_conditions' sx={{color:"#363A3D", '&.Mui-checked': {color:"#B6F09C"}}} defaultChecked />
            <span className='text-[16px] w-fit'>I agree with <span className='font-plus_jakarta_sans text-[16px] font-bold text-transparent bg-clip-text gradient_dayblue_blue_green500'>Terms and conditions</span></span>
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
  )
}

export default RegisterForm
