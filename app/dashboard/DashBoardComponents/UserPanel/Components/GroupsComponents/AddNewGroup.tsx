'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import new_group from '../../../../../../public/Dashboard/UserPanel/Groups/new_group.svg'
import { userAccessRequest } from '@/app/utils/UserAccessRequest'

import Modal from 'react-modal';
import { TextField, ThemeProvider, createTheme } from '@mui/material'
import { useForm } from 'react-hook-form'
import main_logo from '../../../../../../public/home/mainlogo.svg'
import { useAppSelector } from '@/redux/hooks/typedHooks'
import { getUserId } from '@/redux/slices/userSession/userSessionSlice'
const AddNewGroup = () => {
  const authUserId = useAppSelector(getUserId)
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [ modalIsOpen, setIsOpen ] = useState<boolean>(false)

  const onSubmit = async (data:{group_name:string, group_description:string}) => {
    console.log(data)
    const requestBody = {
      group_admin:authUserId,
      group_name:data.group_name,
      group_description:data.group_description,
    }
    const response = userAccessRequest<any, any>('createGroup', requestBody)

}

  const theme = createTheme({
    palette: {
      primary: {
        main: '#82DBF7',
      }
    }
  })

  return (
    <div  className='add_new_group text-[#686B6E] text-[16px] flex justify-center items-center gap-x-5'>
        <Image className='w-[30px]' src={new_group} alt='new_Group_button'/>
        <span onClick={() => setIsOpen(!modalIsOpen)}>Add new group</span>
        <Modal
        isOpen={modalIsOpen}
        contentLabel="Create new group"
        className={"flex gap-8 bg-[#000000d3]  p-2 h-full justify-center items-center"}
      >
        <div className='newGroup_modal  bg-[#000000c2] p-5 max-w-[600px] flex flex-col justify-center items-center gap-8 rounded-md'>
          <header className='font-plus_jakarta_sans w-full flex flex-col gap-4'>
            <div className='header_and_close w-full flex justify-between items-center'>
              <h1 className='text-white text-[28px] whitespace-nowrap w-fit'>Create your own group</h1> 
              <button  onClick={()=> setIsOpen(!modalIsOpen)} className='text-red-500 text-[20px] font-extrabold w-fit cursor-pointer'>x</button>             
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
              helperText={errors.group_name?.message ? errors.group_name.message as string:""}
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
            <button type='submit' className='w-full col-span-2 bg-[#B6F09C] min-h-[36.5px] flex justify-center items-center rounded-md'> Create group </button>            
          </form>
          <footer className='modal_footer relative w-1/3 opacity-40 flex justify-center items-center'>
            <Image src={main_logo} alt='main_logo'/>
          </footer>
        </div>
      </Modal>
    </div>
  )
}

export default AddNewGroup
