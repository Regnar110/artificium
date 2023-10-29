import React from 'react'

import { ThemeProvider } from '@emotion/react';
import { Checkbox, createTheme, TextField } from '@mui/material';
import ModalFooter from '../Components/ModalFooter';
import GlassModal from '../GlassModal/GlassModal';

interface Props {
    modalIsOpen:boolean;
    setModal:(new_status: boolean) => void
}

const MailBoxModal = ({modalIsOpen, setModal}:Props) => {

    const theme = createTheme({
        palette: {
          primary: {
            main: '#B6F09C',
          }
        }
      })

  return (
    <GlassModal modalIsOpen={modalIsOpen} header_title='MailBox' header_subtitle='Coś tam coś tam coś tam' setModal={setModal}>
      <ThemeProvider theme={theme}>
          <TextField
              color="primary"
              id="outlined-basic" 
              label="Search the box" 
              variant="filled" 
              sx={{input: {color:"#fff", background:"#131619", border:"1px solid #363A3D", borderRadius:"10px", margin:"0px", cursor:"pointer"}}}
              InputLabelProps={{style:{color:"white"}}} 
          />            
      </ThemeProvider>
      <section className='grid_scroll_mailbox bg-[#0D0F10] h-full rounded-md px-1'>
        <h5 className='bg-[#0D0F10] text-[#9B9C9E] text-[16px] w-full px-4 py-2'>Mailbox</h5>
        <article className='scrollable_mailbox_container px-1 py-1 flex flex-col h-[200px] overflow-x-hidden overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-[#0D0F10] scrollbar-track-transparent'>
          <div className='mailbox_mail text-white grid grid-cols-10 hover:bg-[#ffffff13] cursor-pointer px-3 py-3 rounded-md place-content-center place-items-center'>
            <form >
              <Checkbox size='small'/>
            </form>
            <div className='col-span-2 text-[#B6F09C] font-medium text-[16px] '>Mateusz W</div>
            <div className="col-span-7 text-ellipsis whitespace-nowrap overflow-hidden pr-5 text-[#9B9C9E] hover:text-[#ffffff] transition-all duration-300">TOPIC z częścią wiadomosćiadsasdasdasdasdasdasdasdasdsdasdas</div>
          </div>
          <div className='mailbox_mail text-white grid grid-cols-10 hover:bg-[#ffffff13] cursor-pointer px-3 py-3 rounded-md place-content-center place-items-center'>
            <form >
              <Checkbox size='small'/>
            </form>
            <div className='col-span-2 text-[#B6F09C] font-medium text-[16px] '>Mateusz W</div>
            <div className="col-span-7 text-ellipsis whitespace-nowrap overflow-hidden pr-5 text-[#9B9C9E] hover:text-[#ffffff] transition-all duration-300">TOPIC z częścią wiadomosćiadsasdasdasdasdasdasdasdasdsdasdas</div>
          </div>
          <div className='mailbox_mail text-white grid grid-cols-10 hover:bg-[#ffffff13] cursor-pointer px-3 py-3 rounded-md place-content-center place-items-center'>
            <form >
              <Checkbox size='small'/>
            </form>
            <div className='col-span-2 text-[#B6F09C] font-medium text-[16px] '>Mateusz W</div>
            <div className="col-span-7 text-ellipsis whitespace-nowrap overflow-hidden pr-5 text-[#9B9C9E] hover:text-[#ffffff] transition-all duration-300">TOPIC z częścią wiadomosćiadsasdasdasdasdasdasdasdasdsdasdas</div>
          </div>
          <div className='mailbox_mail text-white grid grid-cols-10 hover:bg-[#ffffff13] cursor-pointer px-3 py-3 rounded-md place-content-center place-items-center'>
            <form >
              <Checkbox size='small'/>
            </form>
            <div className='col-span-2 text-[#B6F09C] font-medium text-[16px] '>Mateusz W</div>
            <div className="col-span-7 text-ellipsis whitespace-nowrap overflow-hidden pr-5 text-[#9B9C9E] hover:text-[#ffffff] transition-all duration-300">TOPIC z częścią wiadomosćiadsasdasdasdasdasdasdasdasdsdasdas</div>
          </div>
          <div className='mailbox_mail text-white grid grid-cols-10 hover:bg-[#ffffff13] cursor-pointer px-3 py-3 rounded-md place-content-center place-items-center'>
            <form >
              <Checkbox size='small'/>
            </form>
            <div className='col-span-2 text-[#B6F09C] font-medium text-[16px] '>Mateusz W</div>
            <div className="col-span-7 text-ellipsis whitespace-nowrap overflow-hidden pr-5 text-[#9B9C9E] hover:text-[#ffffff] transition-all duration-300">TOPIC z częścią wiadomosćiadsasdasdasdasdasdasdasdasdsdasdas</div>
          </div>
          <div className='mailbox_mail text-white grid grid-cols-10 hover:bg-[#ffffff13] cursor-pointer px-3 py-3 rounded-md place-content-center place-items-center'>
            <form >
              <Checkbox size='small'/>
            </form>
            <div className='col-span-2 text-[#B6F09C] font-medium text-[16px] '>Mateusz W</div>
            <div className="col-span-7 text-ellipsis whitespace-nowrap overflow-hidden pr-5 text-[#9B9C9E] hover:text-[#ffffff] transition-all duration-300">TOPIC z częścią wiadomosćiadsasdasdasdasdasdasdasdasdsdasdas</div>
          </div>

          <div className='mailbox_mail text-white grid grid-cols-10 hover:bg-[#ffffff13] cursor-pointer px-3 py-3 rounded-md place-content-center place-items-center'>
            <form >
              <Checkbox size='small'/>
            </form>
            <div className='col-span-2 text-[#B6F09C] font-medium text-[16px] '>Mateusz W</div>
            <div className="col-span-7 text-ellipsis whitespace-nowrap overflow-hidden pr-5 text-[#9B9C9E] hover:text-[#ffffff] transition-all duration-300">TOPIC z częścią wiadomosćiadsasdasdasdasdasdasdasdasdsdasdas</div>
          </div>
          <div className='mailbox_mail text-white grid grid-cols-10 hover:bg-[#ffffff13] cursor-pointer px-3 py-3 rounded-md place-content-center place-items-center'>
            <form >
              <Checkbox size='small'/>
            </form>
            <div className='col-span-2 text-[#B6F09C] font-medium text-[16px] '>Mateusz W</div>
            <div className="col-span-7 text-ellipsis whitespace-nowrap overflow-hidden pr-5 text-[#9B9C9E] hover:text-[#ffffff] transition-all duration-300">TOPIC z częścią wiadomosćiadsasdasdasdasdasdasdasdasdsdasdas</div>
          </div>
          <div className='mailbox_mail text-white grid grid-cols-10 hover:bg-[#ffffff13] cursor-pointer px-3 py-3 rounded-md place-content-center place-items-center'>
            <form >
              <Checkbox size='small'/>
            </form>
            <div className='col-span-2 text-[#B6F09C] font-medium text-[16px] '>Mateusz W</div>
            <div className="col-span-7 text-ellipsis whitespace-nowrap overflow-hidden pr-5 text-[#9B9C9E] hover:text-[#ffffff] transition-all duration-300">TOPIC z częścią wiadomosćiadsasdasdasdasdasdasdasdasdsdasdas</div>
          </div>
          
        </article>

      </section>
      <ModalFooter/>
    </GlassModal>
  )
}

export default MailBoxModal
