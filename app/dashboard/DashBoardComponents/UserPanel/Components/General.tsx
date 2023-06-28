'use client'
import React from 'react'
import PanelHeader from './GenericComponents/PanelHeader'
import SearchOption from './GeneralComponents/SearchOption'
import BillingRedirection from './GeneralComponents/BillingRedirection'
const General = () => {
  return (
    <div className='user_general  border-b-[1px] border-[#131619] flex flex-col pb-8 gap-y-4'>
      <PanelHeader title='General'/>
      <div className='user_panel_options flex flex-col gap-y-5'>
        <SearchOption/>
        <BillingRedirection/>
      </div>
    </div>
  )
}

export default General
