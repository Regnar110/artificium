'use client'
import TextField from '@mui/material/TextField'
import React from 'react'
import Image from 'next/image'
import microphone from '../../../../public/chatpanel/microphone.svg'
import chat_send from '../../../../public/chatpanel/chat_send.svg'
import { ThemeProvider, createTheme } from '@mui/material'
import user_avatar from '../../../../public/Dashboard/UserBoard/user_avatar.png'
import copy_message from '../../../../public/chatpanel/copy.svg'
const ChatPanel = () => {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#B6F09C',
      }
    }
  })
  return (
    <section className='w-full flex flex-col h-full rounded-lg mt-5'>
      <div id='chat_window' className='flex flex-col gap-5  overflow-scroll overflow-x-hidden scrollbar scrollbar-w-1 scrollbar-thumb-green-500 scrollbar-track-gray-100'>
        <div className='chat_message flex gap-5 border-[1px] border-[#1A1D21] p-3 rounded-lg'>
          <div className='chat_avatar relative w-[50px] flex items-start'>
            <Image src={user_avatar} alt='message'/>
          </div>
          <div className='nick_and_message'>
            <h1 className='nick text-[16px]'>Mateusz Wrycza</h1>
            <p className='message text-[#9B9C9E] text-[14px] font-medium'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque

            </p>
          </div>
          <div className='chat_avatar relative w-[20px] flex justify-center items-start'>
            <Image src={copy_message} alt='message'/>
          </div>
        </div>
        <div className='chat_message flex gap-5 border-[1px] border-[#1A1D21] p-3 rounded-lg'>
          <div className='chat_avatar relative w-[50px] flex items-start'>
            <Image src={user_avatar} alt='message'/>
          </div>
          <div className='nick_and_message'>
            <h1 className='nick text-[16px]'>Mateusz Wrycza</h1>
            <p className='message text-[#9B9C9E] text-[14px] font-medium'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque

            </p>
          </div>
          <div className='chat_avatar relative w-[20px] flex justify-center items-start'>
            <Image src={copy_message} alt='message'/>
          </div>
        </div>
        <div className='chat_message flex gap-5 border-[1px] border-[#1A1D21] p-3 rounded-lg'>
          <div className='chat_avatar relative w-[50px] flex items-start'>
            <Image src={user_avatar} alt='message'/>
          </div>
          <div className='nick_and_message'>
            <h1 className='nick text-[16px]'>Mateusz Wrycza</h1>
            <p className='message text-[#9B9C9E] text-[14px] font-medium'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque

            </p>
          </div>
          <div className='chat_avatar relative w-[20px] flex justify-center items-start'>
            <Image src={copy_message} alt='message'/>
          </div>
        </div>
        <div className='chat_message flex gap-5 border-[1px] border-[#1A1D21] p-3 rounded-lg'>
          <div className='chat_avatar relative w-[50px] flex items-start'>
            <Image src={user_avatar} alt='message'/>
          </div>
          <div className='nick_and_message'>
            <h1 className='nick text-[16px]'>Mateusz Wrycza</h1>
            <p className='message text-[#9B9C9E] text-[14px] font-medium'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque

            </p>
          </div>
          <div className='chat_avatar relative w-[20px] flex justify-center items-start'>
            <Image src={copy_message} alt='message'/>
          </div>
        </div>
        <div className='chat_message flex gap-5 border-[1px] border-[#1A1D21] p-3 rounded-lg'>
          <div className='chat_avatar relative w-[50px] flex items-start'>
            <Image src={user_avatar} alt='message'/>
          </div>
          <div className='nick_and_message'>
            <h1 className='nick text-[16px]'>Mateusz Wrycza</h1>
            <p className='message text-[#9B9C9E] text-[14px] font-medium'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque

            </p>
          </div>
          <div className='chat_avatar relative w-[20px] flex justify-center items-start'>
            <Image src={copy_message} alt='message'/>
          </div>
        </div>
        <div className='chat_message flex gap-5 border-[1px] border-[#1A1D21] p-3 rounded-lg'>
          <div className='chat_avatar relative w-[50px] flex items-start'>
            <Image src={user_avatar} alt='message'/>
          </div>
          <div className='nick_and_message'>
            <h1 className='nick text-[16px]'>Mateusz Wrycza</h1>
            <p className='message text-[#9B9C9E] text-[14px] font-medium'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque

            </p>
          </div>
          <div className='chat_avatar relative w-[20px] flex justify-center items-start'>
            <Image src={copy_message} alt='message'/>
          </div>
        </div>
        <div className='chat_message flex gap-5 border-[1px] border-[#1A1D21] p-3 rounded-lg'>
          <div className='chat_avatar relative w-[50px] flex items-start'>
            <Image src={user_avatar} alt='message'/>
          </div>
          <div className='nick_and_message'>
            <h1 className='nick text-[16px]'>Mateusz Wrycza</h1>
            <p className='message text-[#9B9C9E] text-[14px] font-medium'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque

            </p>
          </div>
          <div className='chat_avatar relative w-[20px] flex justify-center items-start'>
            <Image src={copy_message} alt='message'/>
          </div>
        </div>
        <div className='chat_message flex gap-5 border-[1px] border-[#1A1D21] p-3 rounded-lg'>
          <div className='chat_avatar relative w-[50px] flex items-start'>
            <Image src={user_avatar} alt='message'/>
          </div>
          <div className='nick_and_message'>
            <h1 className='nick text-[16px]'>Mateusz Wrycza</h1>
            <p className='message text-[#9B9C9E] text-[14px] font-medium'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque

            </p>
          </div>
          <div className='chat_avatar relative w-[20px] flex justify-center items-start'>
            <Image src={copy_message} alt='message'/>
          </div>
        </div>
        <div className='chat_message flex gap-5 border-[1px] border-[#1A1D21] p-3 rounded-lg'>
          <div className='chat_avatar relative w-[50px] flex items-start'>
            <Image src={user_avatar} alt='message'/>
          </div>
          <div className='nick_and_message'>
            <h1 className='nick text-[16px]'>Mateusz Wrycza</h1>
            <p className='message text-[#9B9C9E] text-[14px] font-medium'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, iure, esse dolore quas eum quidem aliquam cumque

            </p>
          </div>
          <div className='chat_avatar relative w-[20px] flex justify-center items-start'>
            <Image src={copy_message} alt='message'/>
          </div>
        </div>
        <div className='chat_message flex gap-5 border-[1px] border-[#1A1D21] p-3 rounded-lg'>
          <div className='chat_avatar relative w-[50px] flex items-start'>
            <Image src={user_avatar} alt='message'/>
          </div>
          <div className='nick_and_message'>
            <h1 className='nick text-[16px]'>Mateusz Wrycza</h1>
            <p className='message text-[#9B9C9E] text-[14px] font-medium'>
asdasd

            </p>
          </div>
          <div className='chat_avatar relative w-[20px] flex justify-center items-start'>
            <Image src={copy_message} alt='message'/>
          </div>
        </div>
      </div>
      <form className='chat_send_form rounded-lg flex items-center gap-3 bg-[#0D0F10] px-5 '>
          <div className='chat_panel_input_icon flex w-[80px] h-[80px] justify-center items-center p-5'> <Image width={50} style={{width:"auto"}} src={microphone} alt='send voice message'/></div>
          <ThemeProvider theme={theme}>
            <TextField color='primary' sx={{input:{ height:"60px", padding:"0px" ,color:"white", background:"#0D0F10", '&::placeholder':{color:"#363A3D"}}}} placeholder='type something here' variant="filled" />          
          </ThemeProvider>
          
          <button className='send_button bg-[#1A1D21] w-[50px] h-[50px] rounded-lg p-4'>
              <Image src={chat_send} alt='send message'/>
          </button>
      </form>
      
    </section>
  )
}

export default ChatPanel
