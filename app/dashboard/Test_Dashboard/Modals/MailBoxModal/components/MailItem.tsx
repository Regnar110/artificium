import { ThemeProvider, createTheme } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import red_cross from '../../../../../../public/controller/red_cross.svg'
import React, { useState } from 'react'
import Image from 'next/image'
import CustomHoverTooltip from '@/app/AppComponents/CustomHoverTolltip/CustomHoverTooltip'
import FriendRequestModal from '../../FriendRequestModal/FriendRequestModal'
interface Props {
    mail_id:string,
    sender:string,
    email:string,
    fromId:string,
    topic:string,
    content:string
}

const MailItem = ({mail_id, sender, email, fromId, topic, content}:Props) => {
    
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
    const modalOpenCloseHandler = (new_status:boolean) => setModalIsOpen(new_status)

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

    console.log(sender)

  const renderModal = () => modalIsOpen === true ? <FriendRequestModal mail_id={mail_id} sender={sender} email={email} fromId={fromId} modalIsOpen={modalIsOpen} setModal={modalOpenCloseHandler}/> : null
  

  return (
    <>
        <div className='mailbox_mail text-white grid grid-cols-10 hover:bg-[#ffffff13] cursor-pointer px-3 py-3 rounded-md place-content-center place-items-center' onClick={()=> setModalIsOpen(true)}>
            <div className='mail_actions flex' onClick={(e) => e.stopPropagation() /*Po kliknięciu na te elementy onClick z parent elementu nie będzie działał.*/}>
                <CustomHoverTooltip title="Delete" placement='right'>
                    <Image src={red_cross} className='w-[15px]' alt='delete mail'/>
                </CustomHoverTooltip>
            </div>

            <div className='col-span-3 text-[#B6F09C] font-medium text-[16px] '>{sender}</div>
            <div className="col-span-6 text-ellipsis whitespace-nowrap overflow-hidden pr-5 text-[#9B9C9E] hover:text-[#ffffff] transition-all duration-300">
                <span className='topic font-bold'>{topic}</span>
                :

                <span>{content}</span>
            </div>
        </div>
        {
            renderModal()
        }    
    </>

  )
}

export default MailItem
