import CustomHoverTooltip from '@/app/AppComponents/CustomHoverTolltip/CustomHoverTooltip'
import React from 'react'
import Image from 'next/image'
import artificium_logo from '../../../../../public/logo/artificium_logo.png'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/typedHooks'
import { UI_VIEW_CHANGE, currentUIState } from '@/redux/slices/dashboardUI_controller/dashboardUI_controller'
const ControllerUser = () => {
  const {type,status}= useAppSelector(currentUIState).controller_panel

  // Warunkowy ciąg sprawdzajacy czy użytkownik zamyka ten sam controllerPanel zy też zmienia go na inny.
  // Jeżeli klika na ten sam to jego status zmienia się na false /  true w zależności od bazowego statusu
  // Jeżeli klika na inny panel to status się nie zmienia tylko zmieni się samo pole TYPE bo nie zamykamy panelu, ale zmieniamy jego rodzaj w UI
  const thisUIStatusChangeQuery = type !== "user" && status === true ? true : type ==="user" && status===true ? false : true
  
  const disptach = useAppDispatch()
  return (
    <section id='controller_user' className=' flex flex-col gap-y-3 justify-center items-center'
      onClick={()=>disptach(UI_VIEW_CHANGE({UI:"controller_panel", status:thisUIStatusChangeQuery, type:"user"}))}
    >
        <CustomHoverTooltip title={"User Panel"} placement='right'>
        <div className='user cursor-pointer flex justify-center items-center rounded-full bg-[#1A1D21] transition-all  hover:bg-[#7C35F1] hover:rounded-2xl on w-fit p-4'>
            <Image className=' w-[30px]' src={artificium_logo} alt="artificium_logo"/>
        </div>   
        </CustomHoverTooltip>
        <div className='section_bottom_break_line w-[60%] h-[1px] bg-[#32363b]'/>
    </section>          
  )
}

export default ControllerUser
