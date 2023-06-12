'use client'
import React from 'react'
import Image from 'next/image'
import card from '../../../../../public/Dashboard/UserPanel/General/credit_card.svg'
import search from '../../../../../public/Dashboard/UserPanel/General/search.svg'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { ThemeProvider, createTheme } from '@mui/material/styles'
const General = () => {
    const theme = createTheme({
        palette: {
          primary: {
            main: '#82DBF7',
          }
        }
      })
  return (
    <div className='user_general  border-b-[1px] border-[#131619] flex flex-col pb-8 gap-y-4'>
      <h1 className='text-[16px] text-[#686B6E] font-semibold'>General</h1>
      <div className='user_panel_options flex flex-col gap-y-5'>
        <div className='search_option'>
        <Box className="gap-4 relative" sx={{ display: 'flex', alignItems: 'center', justifyContent:"center" }}>
            <Image className='w-[25px]' src={search} alt='search'/>
            <ThemeProvider theme={theme}>
                <TextField 
                size='small'
                color='primary'
                    sx={{input:{color:"#fff", '&.Mui-checked': {color:"#B6F09C"}}}}
                    id="input-with-sx" 
                    label="Search"
                    InputLabelProps={{style:{color:"#fff"}}} 
                    variant="standard" 
                />                
            </ThemeProvider>
        </Box>
        </div>
        <div className='billing_redirection flex gap-4'>
            <Image src={card} alt='billing' className='w-[25px]'/>
            <span className='text-[16px] text-white'>Billing</span>
        </div>
      </div>
    </div>
  )
}

export default General
