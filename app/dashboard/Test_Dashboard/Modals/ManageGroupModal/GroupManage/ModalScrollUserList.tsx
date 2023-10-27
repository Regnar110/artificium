import UserAvatarWithStatus from '@/app/AppComponents/UserAvatarWithStatus/UserAvatarWithStatus'
import { useAppSelector } from '@/redux/hooks/typedHooks'
import avatar from '../../../../../../public/Dashboard/UserPanel/UserHeader/Avatar.png'
import { TextField, ThemeProvider, createTheme} from '@mui/material'
import React, { useState } from 'react'
import Image from 'next/image'
import add_user from '../../../../../../public/controller/add_user.svg'
import remove_user from '../../../../../../public/controller/remove_user.svg'
import { getChat } from '@/redux/slices/chattingWindows/chattingWindowsSlice'
import CustomHoverTooltip from '@/app/AppComponents/CustomHoverTolltip/CustomHoverTooltip'

interface Props {
    list_users:AuthenticatedUser[]
}
const ModalScrollUserList = ({list_users}:Props) => {
    const [searchFieldInput, setSearchFieldInput] = useState<string>("")
    const filtered_users = list_users.filter(({nickname}) => nickname.toLowerCase().includes(searchFieldInput.toLowerCase()))
    const {group_admin, group_users} = useAppSelector(getChat)
    const theme = createTheme({
        palette: {
          primary: {
            main: '#B6F09C',
          }
        }
      })
  return (
    <article className='h-[300px] rounded-md flex flex-col gap-y-3'>
        <ThemeProvider theme={theme}>
            <TextField
                onChange={(e) => setSearchFieldInput(e.target.value)}
                color="primary"
                id="outlined-basic" 
                label="Nickname" 
                variant="filled" 
                sx={{input: {color:"#fff", background:"#131619", border:"1px solid #363A3D", borderRadius:"10px", margin:"0px", cursor:"pointer"}}}
                InputLabelProps={{style:{color:"white"}}} 
            />            
        </ThemeProvider>

        <div className='scroll_list bg-[#0D0F10] h-full rounded-md px-1'>
            <h5 className='bg-[#0D0F10] text-[#9B9C9E] text-[16px] w-full px-4 py-2'>Users</h5>
            <div className='scrollable_container flex flex-col gap-y-3 h-[200px] overflow-x-hidden overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-[#0D0F10] scrollbar-track-transparent'>
                {
                    filtered_users.map(user => (
                        <div className='group_manage_scroll_user_item relative flex items-center w-full rounded-md hover:bg-[#ffffff13] px-4 py-2 cursor-pointer'>
                            <UserAvatarWithStatus user_data={user} user_status={{status:user.isOnline ? "ONLINE" : "OFFLINE", with_dot:true}} size='medium' show_nick={true} modal_action={true} reveal_mail={true} user_avatar={avatar}/>
                            <div className='button_with_action flex justify-between items-center pl-3 gap-x-3 w-fit relative'>
                                {
                                    group_admin === user._id || group_users?.includes(user._id) ? (
                                        <CustomHoverTooltip title={"Remove"} PopperProps={{disablePortal:true}} placement={"left-start"}>
                                            <div className='list_user_action_images flex justify-center items-center  w-fit p-2 bg-[#363A3D] rounded-full'>
                                                <Image src={remove_user} className='min-w-[24px]' alt='remove use from group'/>
                                            </div>   
                                        </CustomHoverTooltip>                                          
                                    ) :
                                    <CustomHoverTooltip title={"Add"} PopperProps={{disablePortal:true}}  placement={"left-start"}>
                                        <div className='list_user_action_images flex justify-center items-center  w-fit p-2 bg-[#363A3D] rounded-full'>
                                            <Image src={add_user} className='min-w-[20px]' alt='add user to group'/>
                                        </div>                                          
                                    </CustomHoverTooltip>
   
                                }      
                                <button className={`user_group_role_badge ${group_admin === user._id ? "text-[#B6F09C]" : group_users?.includes(user._id) ? "text-[#82DBF7]" : "text-[#A6B0F2]"} text-[16px] font-normal flex justify-center items-center h-fit py-1 px-3 bg-[#363A3D] w-fit whitespace-nowrap rounded-xl`}>
                                    {group_admin === user._id ?
                                        "Owner" 
                                    :
                                        group_users?.includes(user._id) ? "Member" : "Not a member"
                                        
                                    }
                                </button>                          
                            </div>


                        </div>                        
                    ))
                }         
            </div>
            
        </div>
    </article>
  )
}

export default ModalScrollUserList
