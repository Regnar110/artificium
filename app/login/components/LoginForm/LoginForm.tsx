'use client'

import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox'
import { useForm } from "react-hook-form";
import { useAppDispatch } from '@/redux/hooks/typedHooks';
import SubmitButton from '@/app/AppComponents/CustomSubmitButton/SubmitButton';
import { turnOnNotification } from '@/app/AppComponents/ToastNotifications/TurnOnNotification';
import { useRouter } from 'next/navigation';
import { authUserLogIn } from '@/app/utils/AuthUserLogIn/AuthUserLogIn';
const LoginForm = () => {
    const dispatch = useAppDispatch()
    const [ loginResponse, setLoginResponse ] = useState<UserAccesSuccessResponse | UserAccessErrorResponse>()
    const [ responseLoading, setResponseLoading ] = useState<boolean>(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const router = useRouter()

    const onSubmit = async (data:LoginFormData) => {
      setResponseLoading(true)
      const loginResponse = await authUserLogIn({sessionData:data, dispatch})
      setLoginResponse(loginResponse)
      setResponseLoading(false)
      loginResponse.status === 200 ? router.push("/dashboard") : null
      turnOnNotification({response:loginResponse})
    }

      const theme = createTheme({
        palette: {
          primary: {
            main: '#82DBF7',
          }
        }
      })

  return (
    <form onSubmit={handleSubmit(onSubmit as any)}  className='login_form flex flex-col gap-y-10'>
        <div className='login_text_fields flex flex-col gap-y-5'>
        <ThemeProvider theme={theme}>
            <TextField 
              {
                ...register(
                    "email",
                    {
                        required:"This field is required",
                        pattern: {value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message:"Wrong email format"},
                    }
                )
              }
              error={errors.email?.message ? true : false}
              helperText={errors.mail?.message ? errors.mail.message as string:""}
              type='email'
              InputLabelProps={{ style: {color:"#9B9C9E"}}} 
              sx={{input: {color:"#fff", background:"#1A1D21", border:"2px solid #363A3D", borderRadius:"10px"}}} 
              color="primary" 
              id="outlined-basic_email" 
              label="E-mail"
              variant="outlined" 
            />
            <TextField 
              {
                ...register(
                    "login_password",
                    {
                        required:"This field is required",
                    }
                )
              }
              type='password'
              InputLabelProps={{ style: {color:"#9B9C9E"}}} 
              sx={{input: {color:"#fff", background:"#1A1D21", border:"2px solid #363A3D", borderRadius:"10px"}}} 
              color="primary" 
              id="outlined-basic_password" 
              label="Password" 
              variant="outlined" 
            />              
        </ThemeProvider>
        <div className='text-[#d32f2f] font-plus_jakarta_sans'>
            {
                loginResponse && loginResponse.status === 510 ? loginResponse.client_message : ""
            }
        </div>
        </div>
        <div className='flex flex-col sm:flex-row w-full justify-between items-start sm:items-center'>
          <div className='remember_me_checkbox w-fit flex gap-x-2 text-white font-plus_jakarta_sans items-center'>
              <Checkbox size='medium' aria-label='remember_me' sx={{color:"#363A3D", '&.Mui-checked': {color:"#B6F09C"}}} defaultChecked />
              <span className='text-[16px] whitespace-nowrap'>Remember me</span>
          </div>
          <span className='font-plus_jakarta_sans w-fit text-[16px] font-bold text-transparent bg-clip-text gradient_dayblue_blue_green500'>Forgot password?</span>
        </div>
        <SubmitButton text='Log in' isLoading={responseLoading}/>
    </form>
  )
}

export default LoginForm
