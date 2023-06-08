"use client"
import Image from 'next/image'
import login_image from '../../public/login_assets/login_illustration.png'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { createTheme, ThemeProvider, withStyles  } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox'
import LoginPageWrapper from './components/LoginPageWrapper/LoginPageWrapper'
import LoginSection from './components/LoginSection/LoginSection'
import ArtificiumAbsoluteLogo from '../AppComponents/ArtificiumAbsoluteLogo/ArtificiumAbsoluteLogo'
import LoginFunctionalityBlock from './components/LoginFunctionalityBlock/LoginFunctionalityBlock'
import LoginHeaders from './components/LogInHeaders/LoginHeaders'
import LoginButtonsWrapper from './components/LoginButtonsWrapper/LoginButtonsWrapper'
import LoginButtons from './components/LoginButtonsWrapper/LoginButtons/LoginButtons'
export default function Home() {
  const styles = {
    root: {
      background:"black"
    },
    input: {
      color:"#fff"
    }
  }
  const theme = createTheme({
    palette: {
      primary: {
        main: '#82DBF7',
      }
    }
  })
  return (
    <LoginPageWrapper>
      <LoginSection>
        <ArtificiumAbsoluteLogo position='absolute' positionCordinates='top-5 left-5'/>

        <LoginFunctionalityBlock>
          <LoginHeaders/>
          <LoginButtonsWrapper>
            <LoginButtons/>
            <div className='login_space_breaker flex items-center justify-center relative text-[#686B6E] text-center text-[12px] w-full'>
              <div className='line h-[1px] w-full bg-[#363A3D]'></div>
              <div className='w-full'>or continue with</div>
              <div className='line h-[1px] w-full bg-[#363A3D]'></div>
            </div>
          </LoginButtonsWrapper> 
          <form className='login_form flex flex-col gap-y-10'>
            <div className='login_text_fields flex flex-col gap-y-5'>
              <ThemeProvider theme={theme}>
                <TextField InputLabelProps={{ style: {color:"#9B9C9E"}}} sx={{input: {color:"#fff", background:"#363A3D", borderRadius:"10px"}}} color="primary" id="outlined-basic" label="E-mail" variant="outlined" />
                <TextField InputLabelProps={{ style: {color:"#9B9C9E"}}} sx={{input: {color:"#fff", background:"#363A3D", borderRadius:"10px"}}} color="primary" id="outlined-basic" label="Password" variant="outlined" />              
              </ThemeProvider>
            </div>
            <div className='flex justify-between items-center'>
              <div className='remember_me_checkbox flex gap-x-2 text-white font-plus_jakarta_sans items-center'>
                <Checkbox size='medium' aria-label='remember_me' sx={{color:"#363A3D", '&.Mui-checked': {color:"#B6F09C"}}} defaultChecked />
                <span className='text-[16px]'>Remember me</span>
              </div>
              <span className='font-plus_jakarta_sans text-[16px] font-bold text-transparent bg-clip-text gradient_dayblue_blue_green500'>Forgot password?</span>
            </div>
            <Button
              className='bg-[#B6F09C] font-plus_jakarta_sans text-[#0C1132] font-bold'
              sx={{
                ':hover': {
                  bgcolor: '#9bf074', // theme.palette.primary.main
                },
              }}
            >
                Log in
              </Button>
          </form>   
          <div className='signup flex gap-3 relative justify-self-center font-semibold text-[#686B6E]'>Don't have an accont?<span className='font-plus_jakarta_sans text-[16px] font-semibold text-transparent bg-clip-text gradient_dayblue_blue_green500'>Sign Up</span></div>    
        </LoginFunctionalityBlock>

      </LoginSection>
      
      <div className='login_illustration relative w-full justify-self-end float-right h-fit'>
        <Image
          className='float-right object-contain w-fit' 
          src={login_image}
          alt='login_image'
        />
      </div>
    </LoginPageWrapper>
  )
}
