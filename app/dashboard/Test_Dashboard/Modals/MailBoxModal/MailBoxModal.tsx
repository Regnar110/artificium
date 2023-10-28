import Modal from 'react-modal';
import React, { useEffect } from 'react'
import Image from 'next/image'
import artificium_logo from '../../../../../public/home/mainlogo.svg'
import ModalGlassContainer from '../Components/ModalGlassContainer'
import ModalHeader from '../Components/ModalHeader'
import { ThemeProvider } from '@emotion/react';
import { createTheme, TextField } from '@mui/material';

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
    <Modal        
        ariaHideApp={false}
        isOpen={modalIsOpen}
        contentLabel="User modal"
        style={{content:{background:"transparent"}, overlay:{background:"#0004", zIndex:"50"}}}
        className={"flex flex-col backdrop-blur-lg backdrop-opacity-100 h-full justify-center items-center"}>
        <ModalGlassContainer>
          <ModalHeader 
            top_title='Your mailbox' 
            subtitle='Remember to check your emails regularly! Someone may want to contact you.' 
            modalIsOpen={modalIsOpen} 
            setModal={setModal}
            />
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
            {/*TUTAJ Będzie lista scrollowana z mailami z hederem w formacie GRID layout. Każdy mail będzie otwierał nowy modal z mailem. */}
          <footer className='w-full flex justify-center items-center'>
            <Image src={artificium_logo} alt="artificium logo" className='w-[200px]'/>
          </footer>
        </ModalGlassContainer>
    </Modal>
  )
}

export default MailBoxModal
