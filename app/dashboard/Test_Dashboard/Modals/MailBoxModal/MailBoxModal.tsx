import React from 'react'
import Image from 'next/image'
import delete_red from '../../../../../public/controller/delete_red.svg'
import { ThemeProvider } from '@emotion/react';
import ModalFooter from '../Components/ModalFooter';
import GlassModal from '../GlassModal/GlassModal';
import ModalScrollContainer from '../Components/ModalScrollContainer';
import MailBoxScrollForm from '../Components/MailBoxScrollForm';
import MailItem from './components/MailItem';
import { Checkbox, createTheme, TextField } from '@mui/material';

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
      const theme2 = createTheme({
        palette:{
            primary:{
                main:"#B6F09C"
            }
        },
        components: {
            MuiCheckbox: {
                
                styleOverrides:{
                    colorPrimary: {color:"#9B9C9E"},
                    root:({ownerState}) => ({
                        
                        ...(ownerState.checked === true && {
                            
                            color:"#B6F09C",
                        }
                        )
                        
                    }),
                }
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
      <ModalScrollContainer stickyHeader='Mailbox' scrollActive={false}>
        <MailBoxScrollForm>
          <MailItem 
            sender='Mateusz W2'
            topic='Friend Request'
            content=' z częścią wiadomosćiadsasdasdasdasdasdasdasdasdsdasdassafdasdasdasdasdasdasdasda'
          />
          <MailItem 
            sender='Mateusz W'
            topic='Friend Request'
            content=' z częścią wiadomosćiadsasdasdasdasdasdasdasdasdsdasdassafdasdasdasdasdasdasdasda'
          />

          <MailItem 
            sender='Mateusz W'
            topic='Friend Request'
            content=' z częścią wiadomosćiadsasdasdasdasdasdasdasdasdsdasdassafdasdasdasdasdasdasdasda'
          />
          <MailItem 
            sender='Mateusz W'
            topic='Friend Request'
            content=' z częścią wiadomosćiadsasdasdasdasdasdasdasdasdsdasdassafdasdasdasdasdasdasdasda'
          />
          <MailItem 
            sender='Mateusz W'
            topic='Friend Request'
            content=' z częścią wiadomosćiadsasdasdasdasdasdasdasdasdsdasdassafdasdasdasdasdasdasdasda'
          />

          <MailItem 
            sender='Mateusz W'
            topic='Friend Request'
            content=' z częścią wiadomosćiadsasdasdasdasdasdasdasdasdsdasdassafdasdasdasdasdasdasdasda'
          />
                    
        </MailBoxScrollForm>
        <form className='mailbox_operations relative flex justify-between items-center text-[#fff] bg-[#0D0F10]'>
          <div className='check_all flex gap-x-1 justify-center items-center relative'>
            <ThemeProvider theme={theme2}>
              <Checkbox size='medium' className='w-fit' color='primary'/> 
            </ThemeProvider>
            <span className='font-semibold'>Check all</span>
          </div>
          <button className='delete_all flex items-center justify-center gap-x-2 rounded-md px-6 py-2 w-fit bg-[#363A3D]'>
            <Image src={delete_red} className='w-[20px]' alt='delete all mails'/>
            <span className='w-fit font-semibold whitespace-nowrap'>Clear</span>
          </button>
        </form>
      </ModalScrollContainer>
      <ModalFooter/>
    </GlassModal>
  )
}

export default MailBoxModal
