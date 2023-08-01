'use client'
import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useForm } from "react-hook-form";
import PulseLoader from 'react-spinners/PulseLoader';
import { userAccessRequest } from '@/app/utils/UserAccessRequest';
import SubmitButton from '@/app/AppComponents/CustomSubmitButton/SubmitButton';
import { turnOnNotification } from '@/app/AppComponents/ToastNotifications/TurnOnNotification';
const RegisterForm = () => {
    const [registerResponse, setRegisterResponse ] = useState<UserAccesSuccessResponse | UserAccessErrorResponse>()
    const [responseLoading, setResponseLoading] = useState<boolean>(false)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data:RegisterFormData) => {
        console.log(data)
        data.provider = "artificium" // użytkownik zarejestrowany przez formularz artificium - bez zewnętrznego providera
        setResponseLoading(true)
        delete data.register_password_repeat
        const userAccessResponse = await userAccessRequest<UserAccesSuccessResponse | UserAccessErrorResponse , RegisterFormData>('register', data)
        console.log(userAccessResponse)
        if(userAccessResponse.status!==500) {
            turnOnNotification({response:userAccessResponse})
        }
        setRegisterResponse(userAccessResponse)
        setResponseLoading(false)
    }


    const theme = createTheme({
        palette: {
          primary: {
            main: '#82DBF7',
          }
        }
      })

  return (
    <form onSubmit={handleSubmit(onSubmit as any)}  className='register_form flex flex-col md:grid md:grid-cols-2 gap-5 h-fit md:row-span-2 w-full'>
        <ThemeProvider theme={theme}>
            <div className='register_input flex flex-col gap-y-4'>
                <span className='text-[14px] font-plus_jakarta_sans text-[#9B9C9E] font-medium'>E-mail</span>
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
            </div>
            <div className='register_input flex flex-col gap-y-4'>
                <span className='text-[14px] font-plus_jakarta_sans text-[#9B9C9E] font-medium'>Nickname</span>
                <TextField 
                    type='text'
                    {...register(
                        "nickname",
                        {
                            required:"This field is required",
                            minLength: { value:2, message:"This nickname is too short"},
                            maxLength:{ value:20, message:"This nickname is too long"}
                        }
                        )
                    }
                    error={errors.nickname?.message ? true:false}
                    helperText={errors.nickname?.message ? errors.nickname.message as string:""}
                    InputLabelProps={{ style: {color:"#9B9C9E"}}} 
                    sx={{input: {color:"#fff", background:"#1A1D21", border:"2px solid #363A3D", borderRadius:"10px"}}} 
                    color="primary" 
                    id="outlined-basic_nickname" 
                    label="Nickname" 
                    variant="outlined" 
                />
            </div>
            <div className='register_input flex flex-col gap-y-4'>
                <span className='text-[14px] font-plus_jakarta_sans text-[#9B9C9E] font-medium'>Password</span>
                <TextField 
                    type='password'
                    {...register(
                        "register_password",
                        {
                            required: "This field is required",
                            pattern: {value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, message:"Wrong password format. At least 8 charaters, one big, one small, number and special character"},
                        }
                        )
                    }
                    error={errors.register_password?.message ? true:false}
                    helperText={errors.register_password?.message ? errors.register_password.message as string:""}
                    InputLabelProps={{ style: {color:"#9B9C9E"}}}
                    sx={{input: {color:"#fff", background:"#1A1D21", border:"2px solid #363A3D", borderRadius:"10px"}}} 
                    color="primary" 
                    id="outlined-basic_password" 
                    label="Password" 
                    variant="outlined" 
                />
            </div>
            <div className='register_input flex flex-col gap-y-4'>
                <span className='text-[14px] font-plus_jakarta_sans text-[#9B9C9E] font-medium'>Repeat password</span>
                <TextField 
                    type='password'
                    {...register(
                        "register_password_repeat",
                        {
                            required:"This field is required",
                            validate: (val:string) => {
                                if(watch("register_password") !== val) {
                                    return "Password not match"
                                }
                            }
                        }
                        )
                    }
                    error={errors.register_password_repeat?.message ? true : false} 
                    helperText={`${errors.register_password_repeat?.message ? errors.register_password_repeat.message:""}`} 
                    InputLabelProps={{ style: {color:"#9B9C9E"}}} 
                    sx={{input: {color:"#fff", background:"#1A1D21", border:"2px solid #363A3D", borderRadius:"10px"}}} 
                    color="primary" 
                    id="outlined-basic_password_repeat" 
                    label="Repeat password" 
                    variant="outlined" 
                />                            
            </div>
        </ThemeProvider>
        <div className='text-[#d32f2f] font-plus_jakarta_sans'>
            {
                registerResponse && registerResponse.status === 500 ? registerResponse.client_message : ""
            }
        </div>
        <div className='terms_conditions_checkbox flex gap-x-2 text-white font-plus_jakarta_sans items-center col-span-2'>
            <Checkbox 
                {...register(
                    "register_terms",
                    {
                        required:"You need to accept terms and agreements"
                    }
                    )
                }
                required={true}
                className='w-fit' 
                size='medium' 
                aria-label='terms_conditions' 
                sx={{color:"#363A3D", '&.Mui-checked': {color:"#B6F09C"}}} 
                defaultChecked={false}
            />
            <span className='text-[16px] w-fit'>I agree with <span className='font-plus_jakarta_sans text-[16px] font-bold text-transparent bg-clip-text gradient_dayblue_blue_green500'>Terms and conditions</span></span>
        </div>
\       <SubmitButton text='Register' isLoading={responseLoading}/>
    </form>                
  )
}

export default RegisterForm
