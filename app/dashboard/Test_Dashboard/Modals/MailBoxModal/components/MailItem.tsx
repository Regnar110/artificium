import { ThemeProvider, createTheme } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import red_cross from '../../../../../../public/controller/red_cross.svg'
import React, { useState } from 'react'
import Image from 'next/image'
import CustomHoverTooltip from '@/app/AppComponents/CustomHoverTolltip/CustomHoverTooltip'
import FriendRequestModal from '../../FriendRequestModal/FriendRequestModal'
interface Props {
    sender:string,
    topic:string,
    content:string
}

const MailItem = ({sender, topic, content}:Props) => {
    const theme = createTheme({
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

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
    const modalOpenCloseHandler = (new_status:boolean) => setModalIsOpen(new_status)
  
  return (
    <div className='mailbox_mail text-white grid grid-cols-10 hover:bg-[#ffffff13] cursor-pointer px-3 py-3 rounded-md place-content-center place-items-center' onClick={()=> setModalIsOpen(true)}>
        <div className='mail_actions flex' onClick={(e) => e.stopPropagation()}>
            <CustomHoverTooltip title="Delete" placement='right'>
                <Image src={red_cross} className='w-[15px]' alt='delete mail'/>
            </CustomHoverTooltip>
            <ThemeProvider theme={theme}>
                <Checkbox className='p-0 m-0' color='primary' size='small'/>            
            </ThemeProvider>
        </div>

        <div className='col-span-3 text-[#B6F09C] font-medium text-[16px] '>{sender}</div>
        <div className="col-span-6 text-ellipsis whitespace-nowrap overflow-hidden pr-5 text-[#9B9C9E] hover:text-[#ffffff] transition-all duration-300">
            <span className='topic font-bold'>{topic}</span>
             :

            <span>{content}</span>
        </div>
        <FriendRequestModal modalIsOpen={modalIsOpen} setModal={modalOpenCloseHandler}/>
    </div>
  )
}

export default MailItem
