import React from 'react'
import Image from 'next/image'
import artificium from '../../../public/Loader/artificium.svg'
import artificium_logo_icon from '../../../public/logo/artificium_logo.png'
import LinearProgress from '@mui/material/LinearProgress'
import { createTheme, ThemeProvider } from '@mui/material/styles';
const PageLoader = () => {

    const theme = createTheme({
        palette: {
          primary: {
            main: '#82DBF7',
          }
        }
      })

  return (
    <main className='w-[100vw] h-[100vh] bg-[#131619] flex flex-col-reverse justify-center items-center gap-y-5'>
        <div className='flex flex-col justify-center items-center'>
            <Image className='w-[250px]' src={artificium} alt="artificium_text_logo"/>
            <ThemeProvider theme={theme}>
                <LinearProgress color='primary' sx={{height:"2px"}}  className='w-[250px]'/>                
            </ThemeProvider>
            
        </div>
        <Image className='w-[35px]' src={artificium_logo_icon} alt="artificium_logo_icon"/>
    </main>
  )
}

export default PageLoader
