import React from 'react'
import SingleGroup from '../../UserPanel/Components/GroupsComponents/SingleGroup'
import green from '../../../../../public/Dashboard/UserPanel/Groups/green.svg'
const CommonGroups = () => {
  return (
    <section className='common_groups relative bg-[#0D0F10] rounded-md overflow-hidden pb-2'>
        <nav className='head bg-[#0D0F10] text-[#9B9C9E] text-[14px] font-semibold px-3 pb-4 z-50 '>Common groups</nav>
        <article className='flex flex-col overflow-scroll overflow-x-hidden max-h-[200px]'>
            <div className='common_group_color_wrapper hover:bg-[#181B1C] px-3 py-3'>
                <SingleGroup group_id='dasdkasdkansdkkansd' group_title='GRUPA COMMON' group_ppl_amount={8} group_icon={green}/>
            </div>
            <div className='common_group_color_wrapper hover:bg-[#181B1C] px-3 py-3'>
                <SingleGroup group_id='dasdkasdkansdkkansd' group_title='GRUPA COMMON' group_ppl_amount={8} group_icon={green}/>
            </div>
            <div className='common_group_color_wrapper hover:bg-[#181B1C] px-3 py-3'>
                <SingleGroup group_id='dasdkasdkansdkkansd' group_title='GRUPA COMMON' group_ppl_amount={8} group_icon={green}/>
            </div>
            <div className='common_group_color_wrapper hover:bg-[#181B1C] px-3 py-3'>
                <SingleGroup group_id='dasdkasdkansdkkansd' group_title='GRUPA COMMON' group_ppl_amount={8} group_icon={green}/>
            </div>
            <div className='common_group_color_wrapper hover:bg-[#181B1C] px-3 py-3'>
                <SingleGroup group_id='dasdkasdkansdkkansd' group_title='GRUPA COMMON' group_ppl_amount={8} group_icon={green}/>
            </div>
            
        </article>
    </section>
  )
}

export default CommonGroups
