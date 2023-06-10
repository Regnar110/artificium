'use client'

import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox'
const LoginForm = () => {

      const theme = createTheme({
        palette: {
          primary: {
            main: '#82DBF7',
          }
        }
      })

  return (
    <form className='login_form flex flex-col gap-y-10'>
        <div className='login_text_fields flex flex-col gap-y-5'>
        <ThemeProvider theme={theme}>
            <TextField InputLabelProps={{ style: {color:"#9B9C9E"}}} sx={{input: {color:"#fff", background:"#1A1D21", border:"2px solid #363A3D", borderRadius:"10px"}}} color="primary" id="outlined-basic" label="E-mail" variant="outlined" />
            <TextField InputLabelProps={{ style: {color:"#9B9C9E"}}} sx={{input: {color:"#fff", background:"#1A1D21", border:"2px solid #363A3D", borderRadius:"10px"}}} color="primary" id="outlined-basic" label="Password" variant="outlined" />              
        </ThemeProvider>
        </div>
        <div className='flex flex-col sm:flex-row w-full justify-between items-start sm:items-center'>
          <div className='remember_me_checkbox w-fit flex gap-x-2 text-white font-plus_jakarta_sans items-center'>
              <Checkbox size='medium' aria-label='remember_me' sx={{color:"#363A3D", '&.Mui-checked': {color:"#B6F09C"}}} defaultChecked />
              <span className='text-[16px] whitespace-nowrap'>Remember me</span>
          </div>
          <span className='font-plus_jakarta_sans w-fit text-[16px] font-bold text-transparent bg-clip-text gradient_dayblue_blue_green500'>Forgot password?</span>
        </div>
        <Button
        className='bg-[#B6F09C] font-plus_jakarta_sans text-[#0C1132] font-bold'
        sx={{
            ':hover': {
            bgcolor: '#9bf074', // theme.palette.primary.main
            },
        }}
        >
            Log in
        </Button>
    </form>
  )
}

export default LoginForm
