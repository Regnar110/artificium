'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { userAccessRequest } from '@/app/utils/UserAccessRequest';
import { useAppSelector } from '@/redux/hooks/typedHooks';
import { getUserId } from '@/redux/slices/userSession/userSessionSlice';
import { ThemeProvider } from '@emotion/react';
import { createTheme, TextField } from '@mui/material';
import Modal from 'react-modal';
import main_logo from '../../../../../../public/home/mainlogo.svg'
import { useForm } from 'react-hook-form';
import SubmitButton from '@/app/AppComponents/CustomSubmitButton/SubmitButton';
import toast from 'react-hot-toast';
import { turnOnNotification } from '@/app/AppComponents/ToastNotifications/TurnOnNotification';

interface ModalProps {
    modalIsOpen:boolean;
    setModalStatus: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateGroupModal = ({modalIsOpen, setModalStatus}:ModalProps) => {
    const [responseStatus, responseLoading] = useState<boolean>(false)
    const [ createGroupResponse, setCreateGroupResponse ] = useState<UserAccesSuccessResponse | UserAccessErrorResponse>()
    const authUserId = useAppSelector(getUserId)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data:{group_name:string, group_description:string}) => {
        responseLoading(true)
        console.log(data)
        const requestBody = {
        group_admin:authUserId,
        group_name:data.group_name,
        group_description:data.group_description,
        }
        const response = await userAccessRequest<any, any>('createGroup', requestBody)
        setCreateGroupResponse(response)
        if(response.status!==500) {
            turnOnNotification({response})
            response.status===200 ? setModalStatus(false) : null
        }
        responseLoading(false)
    }

    const theme = createTheme({
        palette: {
        primary: {
            main: '#82DBF7',
        }
        }
    })
  return (
    <Modal
        isOpen={modalIsOpen}
        contentLabel="Create new group"
        className={"flex gap-8 bg-[#000000d3]  p-2 h-full justify-center items-center"}
      >
        <div className='newGroup_modal  bg-[#000000c2] p-5 max-w-[600px] flex flex-col justify-center items-center gap-8 rounded-md'>
          <header className='font-plus_jakarta_sans w-full flex flex-col gap-4'>
            <div className='header_and_close w-full flex justify-between items-center'>
              <h1 className='text-white text-[28px] whitespace-nowrap w-fit'>Group created successfuly</h1> 
              <button  onClick={()=> setModalStatus(!modalIsOpen)} className='text-red-500 text-[20px] font-extrabold w-fit cursor-pointer'>x</button>             
            </div>
            <h3 className='text-[#9B9C9E]'>Create a new group and invite your friends to it. Think carefully about its name because you won't be able to change it!</h3>
          </header>
          <form onSubmit={handleSubmit(onSubmit as any)} className='flex flex-col gap-8'>
          <ThemeProvider theme={theme}>
            <TextField 
              {
                  ...register(
                      "group_name",
                      {
                        required:{value:true, message:"This field is required"},
                        minLength:{value:6, message:"Group name is to short"}
                      }
                  )
              }
              error={errors.group_name?.message ? true : false}
              helperText={errors.group_name?.message ? errors.group_name.message as string: ""}
              type='text'
              InputLabelProps={{ style: {color:"#9B9C9E"}}} 
              sx={{input: {color:"#fff", background:"#1A1D21", border:"2px solid #363A3D", borderRadius:"10px"}}} 
              color="primary" 
              id="outlined-basic_group_name" 
              label="Group name" 
              variant="outlined" 
            />   
            <TextField 
              {
                  ...register(
                      "group_description",
                      {
                          required:{value:true, message:"This field is required"},
                          minLength:{value:10, message:"Group description is to short. At least 10 characters!"}

                      }
                  )
              }
              error={errors.group_description?.message ? true : false}
              helperText={errors.group_description?.message ? errors.group_description.message as string:""}
              type='text'
              InputLabelProps={{ style: {color:"#9B9C9E"}}} 
              sx={{input: {color:"#fff", background:"#1A1D21", border:"2px solid #363A3D", borderRadius:"10px"}}} 
              color="primary" 
              id="outlined-basic_group_description" 
              label="Group description" 
              variant="outlined" 
            />  
            </ThemeProvider>
            <div className='text-[#d32f2f] font-plus_jakarta_sans'>
                {
                    createGroupResponse && createGroupResponse.status === 510 ? createGroupResponse.client_message : ""
                }
            </div>
            <SubmitButton text='Create group' isLoading={responseStatus}/>          
          </form>
          <footer className='modal_footer relative w-1/3 opacity-40 flex justify-center items-center'>
            <Image src={main_logo} alt='main_logo'/>
          </footer>
        </div>
      </Modal>
  )
}

export default CreateGroupModal
