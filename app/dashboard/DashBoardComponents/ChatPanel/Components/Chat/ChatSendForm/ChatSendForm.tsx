'use client'
import React, { useState } from 'react'
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
      // testowy lokalny stan do przechowywania wiadomości, potem będzie w redux.
      const [ messagesArray, setMessagesArray ] = useState() 
      const [ sendInputValue, setSendInputValue ] = useState<string>("")
      const sendMessageClientHandler = ( {e, message_text, user_data}:SendMessageHandlerProps) => {
        e.preventDefault()
        //Obsługa wysyłań wiadomości. Funkcja będzie walidowała i kompletowała cały obiekt message, który następnie będzie umieszczany w bazie i w interfejsie okna czatu.
        console.log(message_text);
        console.log(user_data.user_nickname)
      }

  return (
    <form className='chat_send_form rounded-lg flex items-center gap-3 bg-[#0D0F10] px-5 '>
        <div className='chat_panel_input_icon flex w-[80px] h-[80px] justify-center items-center p-5'> <Image width={50} style={{width:"auto"}} src={microphone} alt='send voice message'/></div>
        <ThemeProvider theme={theme}>
          <TextField onChange={(e) => setSendInputValue(e.target.value)} color='primary' sx={{input:{ height:"60px", padding:"0px" ,color:"white", background:"#0D0F10", '&::placeholder':{color:"#363A3D"}}}} placeholder='type something here' variant="filled" />          
        </ThemeProvider>
        
        <button onClick={(e) => sendMessageClientHandler( {e, message_text:sendInputValue, user_data:{user_nickname:"TestTest"}})} className='send_button bg-[#1A1D21] w-[50px] h-[50px] rounded-lg p-4'>
            <Image src={chat_send} alt='send message'/>
        </button>
    </form>
  )
}

export default ChatSendForm
