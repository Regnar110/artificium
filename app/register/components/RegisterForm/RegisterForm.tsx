'use client'
import React from 'react'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useForm } from "react-hook-form";
const RegisterForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async data => {
        delete data.register_password_repeat
        const response = await fetch("http://localhost:3001/register",
            {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: "follow", // manual, *follow, error
                referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data), // body data type must match "Content-Type" header
            }
        )
        const parsedResponse = await response.json()
        console.log(parsedResponse)
    }


    const theme = createTheme({
        palette: {
          primary: {
            main: '#82DBF7',
          }
        }
      })

  return (
    <form onSubmit={handleSubmit(onSubmit)}  className='register_form flex flex-col md:grid md:grid-cols-2 gap-5 h-fit md:row-span-2 w-full'>
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
                    error={errors.mail?.message ? true : false}
                    helperText={errors.mail?.message ? errors.mail.message as string:""}
                    type='email'
                    InputLabelProps={{ style: {color:"#9B9C9E"}}} 
                    sx={{input: {color:"#fff", background:"#1A1D21", border:"2px solid #363A3D", borderRadius:"10px"}}} 
                    color="primary" 
                    id="outlined-basic" 
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
                    id="outlined-basic" 
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
                    id="outlined-basic" 
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
                    id="outlined-basic" 
                    label="Repeat password" 
                    variant="outlined" 
                />                            
            </div>
        </ThemeProvider>
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
        <Button
        type='submit'
        className='w-full col-span-2 bg-[#B6F09C] '
        sx={{
            backgroundColor:"#B6F09C",
            fontFamily:"Plus Jakarta Sans",
            fontWeight:"700",
            color:"#0C1132",
            ':hover': {
            bgcolor: '#9bf074', // theme.palette.primary.main
            },
        }}
        >
            Create free account
        </Button>
    </form>                
  )
}

export default RegisterForm
