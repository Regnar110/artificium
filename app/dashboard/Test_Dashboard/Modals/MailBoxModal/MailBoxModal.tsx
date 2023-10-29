import React from 'react'
import { ThemeProvider } from '@emotion/react';
import { createTheme, TextField } from '@mui/material';
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
      <ModalFooter/>
    </GlassModal>
  )
}

export default MailBoxModal
