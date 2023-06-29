'use client'
import React from 'react'
import Image from 'next/image'
import { ThemeProvider, createTheme } from '@mui/material'
import TextField from '@mui/material/TextField'
import chat_send from '../../../../../../../public/chatpanel/chat_send.svg'
import microphone from '../../../../../../../public/chatpanel/microphone.svg'
const ChatSendForm = () => {

    const theme = createTheme({
        palette: {
          primary: {
            main: '#B6F09C',
          }
        }
      })

  return (
    <form className='chat_send_form rounded-lg flex items-center gap-3 bg-[#0D0F10] px-5 '>
        <div className='chat_panel_input_icon flex w-[80px] h-[80px] justify-center items-center p-5'> <Image width={50} style={{width:"auto"}} src={microphone} alt='send voice message'/></div>
        <ThemeProvider theme={theme}>
        <TextField color='primary' sx={{input:{ height:"60px", padding:"0px" ,color:"white", background:"#0D0F10", '&::placeholder':{color:"#363A3D"}}}} placeholder='type something here' variant="filled" />          
        </ThemeProvider>
        
        <button className='send_button bg-[#1A1D21] w-[50px] h-[50px] rounded-lg p-4'>
            <Image src={chat_send} alt='send message'/>
        </button>
    </form>
  )
}

export default ChatSendForm
