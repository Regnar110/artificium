'use client'
import TextField from '@mui/material/TextField'
import React from 'react'
import Image from 'next/image'
import microphone from '../../../../public/chatpanel/microphone.svg'
import chat_send from '../../../../public/chatpanel/chat_send.svg'
import { ThemeProvider, createTheme } from '@mui/material'
import user_avatar from '../../../../public/Dashboard/UserBoard/user_avatar.png'
import copy_message from '../../../../public/chatpanel/copy.svg'
import chat_category_friends from '../../../../public/chatpanel/chat.svg'
import friends_category from '../../../../public/chatpanel/friends.svg'
const ChatPanel = () => {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#B6F09C',
      }
    }
  })
  return (
    <section className='relative h-full flex w-full place-self-end overflow-hidden rounded-lg mt-5'>
      <div className='chat flex flex-col h-full gap-y-5'>
        <div id='chat_window' className='relative flex h-full flex-col gap-5 overflow-scroll overflow-x-hidden scrollbar scrollbar-w-[3px] scrollbar-thumb-[#0D0F10] scrollbar-track-[#131619]'>
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
  2

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
                ostatnie
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
      </div>
      <div id='user_list_with_statuses' className='w-[300px] p-5 overflow-hidden flex flex-col gap-4'>
        <div id='lists' className='flex flex-col overflow-scroll scrollbar scrollbar-w-[3px] scrollbar-thumb-[#0D0F10] scrollbar-track-[#131619] overflow-x-hidden gap-6'>
          <div id='currently_online' className='flex flex-col gap-4'>
            <h3 className='list_header text-[12px] xl:text-[14px] text-[#9B9C9E]'>Currently Online</h3>
            <div id='online_list' className='flex flex-col gap-3'>
              <div className='user_with_status flex justify-center items-start gap-x-2'>
                <div className='user_avatar relative w-[50px] h-[50px]'>
                  <Image src={user_avatar} fill={true} style={{objectFit:"contain"}} alt='user status'/>  
                </div>
                <div className='user_data flex flex-col'>
                  <span className='text-[14px] xl:text-[16px]'>Mateusz Wrycza</span>
                  <span className='text-[#B6F09C] text-[10px] xl:text-[12px]'>Online</span>
                </div>
              </div>
              <div className='user_with_status flex justify-center items-start gap-x-2'>
                <div className='user_avatar relative w-[50px] h-[50px]'>
                  <Image src={user_avatar} fill={true} style={{objectFit:"contain"}} alt='user status'/>  
                </div>
                <div className='user_data flex flex-col'>
                  <span className='text-[14px] xl:text-[16px]'>Mateusz Wrycza</span>
                  <span className='text-[#B6F09C] text-[10px] xl:text-[12px]'>Online</span>
                </div>
              </div>
              <div className='user_with_status flex justify-center items-start gap-x-2'>
                <div className='user_avatar relative w-[50px] h-[50px]'>
                  <Image src={user_avatar} fill={true} style={{objectFit:"contain"}} alt='user status'/>  
                </div>
                <div className='user_data flex flex-col'>
                  <span className='text-[14px] xl:text-[16px]'>Mateusz Wrycza</span>
                  <span className='text-[#B6F09C] text-[10px] xl:text-[12px]'>Online</span>
                </div>
              </div>
              <div className='user_with_status flex justify-center items-start gap-x-2'>
                <div className='user_avatar relative w-[50px] h-[50px]'>
                  <Image src={user_avatar} fill={true} style={{objectFit:"contain"}} alt='user status'/>  
                </div>
                <div className='user_data flex flex-col'>
                  <span className='text-[14px] xl:text-[16px]'>Mateusz Wrycza</span>
                  <span className='text-[#B6F09C] text-[10px] xl:text-[12px]'>Online</span>
                </div>
              </div>
              <div className='user_with_status flex justify-center items-start gap-x-2'>
                <div className='user_avatar relative w-[50px] h-[50px]'>
                  <Image src={user_avatar} fill={true} style={{objectFit:"contain"}} alt='user status'/>  
                </div>
                <div className='user_data flex flex-col'>
                  <span className='text-[14px] xl:text-[16px]'>Mateusz Wrycza</span>
                  <span className='text-[#B6F09C] text-[10px] xl:text-[12px]'>Online</span>
                </div>
              </div>
              <div className='user_with_status flex justify-center items-start gap-x-2'>
                <div className='user_avatar relative w-[50px] h-[50px]'>
                  <Image src={user_avatar} fill={true} style={{objectFit:"contain"}} alt='user status'/>  
                </div>
                <div className='user_data flex flex-col'>
                  <span className='text-[14px] xl:text-[16px]'>Mateusz Wrycza</span>
                  <span className='text-[#B6F09C] text-[10px] xl:text-[12px]'>Online</span>
                </div>
              </div>
              <div className='user_with_status flex justify-center items-start gap-x-2'>
                <div className='user_avatar relative w-[50px] h-[50px]'>
                  <Image src={user_avatar} fill={true} style={{objectFit:"contain"}} alt='user status'/>  
                </div>
                <div className='user_data flex flex-col'>
                  <span className='text-[14px] xl:text-[16px]'>Mateusz Wrycza</span>
                  <span className='text-[#B6F09C] text-[10px] xl:text-[12px]'>Online</span>
                </div>
              </div>
              
            </div>
          </div>
          <div id='currently_offline' className='flex flex-col gap-4'>
            <h3 className='list_header text-[12px] xl:text-[14px] text-[#9B9C9E]'>Currently Offline</h3>
            <div id='offline_list' className='flex flex-col gap-3'>
            <div className='user_with_status flex justify-center items-start gap-x-2'>
                <div className='user_avatar relative w-[50px] h-[50px]'>
                  <Image src={user_avatar} fill={true} style={{objectFit:"contain"}} alt='user status'/>  
                </div>
                <div className='user_data flex flex-col'>
                  <span className='text-[14px] xl:text-[16px]'>Mateusz Wrycza</span>
                  <span className='text-[#B6F09C] text-[10px] xl:text-[12px]'>Online</span>
                </div>
              </div>
              <div className='user_with_status flex justify-center items-start gap-x-2'>
                <div className='user_avatar relative w-[50px] h-[50px]'>
                  <Image src={user_avatar} fill={true} style={{objectFit:"contain"}} alt='user status'/>  
                </div>
                <div className='user_data flex flex-col'>
                  <span className='text-[14px] xl:text-[16px]'>Mateusz Wrycza</span>
                  <span className='text-[#B6F09C] text-[10px] xl:text-[12px]'>Online</span>
                </div>
              </div>
              <div className='user_with_status flex justify-center items-start gap-x-2'>
                <div className='user_avatar relative w-[50px] h-[50px]'>
                  <Image src={user_avatar} fill={true} style={{objectFit:"contain"}} alt='user status'/>  
                </div>
                <div className='user_data flex flex-col'>
                  <span className='text-[14px] xl:text-[16px]'>Mateusz Wrycza</span>
                  <span className='text-[#B6F09C] text-[10px] xl:text-[12px]'>Online</span>
                </div>
              </div>
              <div className='user_with_status flex justify-center items-start gap-x-2'>
                <div className='user_avatar relative w-[50px] h-[50px]'>
                  <Image src={user_avatar} fill={true} style={{objectFit:"contain"}} alt='user status'/>  
                </div>
                <div className='user_data flex flex-col'>
                  <span className='text-[14px] xl:text-[16px]'>Mateusz Wrycza</span>
                  <span className='text-[#B6F09C] text-[10px] xl:text-[12px]'>Online</span>
                </div>
              </div>
              <div className='user_with_status flex justify-center items-start gap-x-2'>
                <div className='user_avatar relative w-[50px] h-[50px]'>
                  <Image src={user_avatar} fill={true} style={{objectFit:"contain"}} alt='user status'/>  
                </div>
                <div className='user_data flex flex-col'>
                  <span className='text-[14px] xl:text-[16px]'>Mateusz Wrycza</span>
                  <span className='text-[#B6F09C] text-[10px] xl:text-[12px]'>Online</span>
                </div>
              </div>
              <div className='user_with_status flex justify-center items-start gap-x-2'>
                <div className='user_avatar relative w-[50px] h-[50px]'>
                  <Image src={user_avatar} fill={true} style={{objectFit:"contain"}} alt='user status'/>  
                </div>
                <div className='user_data flex flex-col'>
                  <span className='text-[14px] xl:text-[16px]'>Mateusz Wrycza</span>
                  <span className='text-[#B6F09C] text-[10px] xl:text-[12px]'>Online</span>
                </div>
              </div>
              <div className='user_with_status flex justify-center items-start gap-x-2'>
                <div className='user_avatar relative w-[50px] h-[50px]'>
                  <Image src={user_avatar} fill={true} style={{objectFit:"contain"}} alt='user status'/>  
                </div>
                <div className='user_data flex flex-col'>
                  <span className='text-[14px] xl:text-[16px]'>Mateusz Wrycza</span>
                  <span className='text-[#B6F09C] text-[10px] xl:text-[12px]'>Online</span>
                </div>
              </div>
              <div className='user_with_status flex justify-center items-start gap-x-2'>
                <div className='user_avatar relative w-[50px] h-[50px]'>
                  <Image src={user_avatar} fill={true} style={{objectFit:"contain"}} alt='user status'/>  
                </div>
                <div className='user_data flex flex-col'>
                  <span className='text-[14px] xl:text-[16px]'>Mateusz Wrycza</span>
                  <span className='text-[#B6F09C] text-[10px] xl:text-[12px]'>Online</span>
                </div>
              </div>
              <div className='user_with_status flex justify-center items-start gap-x-2'>
                <div className='user_avatar relative w-[50px] h-[50px]'>
                  <Image src={user_avatar} fill={true} style={{objectFit:"contain"}} alt='user status'/>  
                </div>
                <div className='user_data flex flex-col'>
                  <span className='text-[14px] xl:text-[16px]'>Mateusz Wrycza</span>
                  <span className='text-[#B6F09C] text-[10px] xl:text-[12px]'>Online</span>
                </div>
              </div>
              <div className='user_with_status flex justify-center items-start gap-x-2'>
                <div className='user_avatar relative w-[50px] h-[50px]'>
                  <Image src={user_avatar} fill={true} style={{objectFit:"contain"}} alt='user status'/>  
                </div>
                <div className='user_data flex flex-col'>
                  <span className='text-[14px] xl:text-[16px]'>Mateusz Wrycza</span>
                  <span className='text-[#B6F09C] text-[10px] xl:text-[12px]'>Online</span>
                </div>
              </div>
            </div>
          </div>          
        </div>
        <div id='user_list_categories' className='w-full flex justify-between items-center'>
          <div className='category flex gap-2 justify-center items-center'>
            <div className='category_image relative w-[20px] h-[20px]'>
              <Image fill={true} style={{objectFit:"contain"}} src={chat_category_friends} alt='chat'/>
            </div>
            <span className='w-fit'>Chats</span>
          </div>
          <div className='category flex gap-2 justify-center items-center'>
            <span className='w-fit'>Friends</span>
            <div className='category_image relative w-[25px] h-[25px]'>
              <Image fill={true} style={{objectFit:"contain"}} src={friends_category} alt='chat'/>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default ChatPanel
