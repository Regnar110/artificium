import React from 'react'
import Image from 'next/image'
import card from '../../../../../../public/Dashboard/UserPanel/General/credit_card.svg'
const BillingRedirection = () => {
  return (
    <div className='billing_redirection flex gap-4'>
        <Image src={card} alt='billing' className='w-[25px]'/>
        <span className='text-[14px] xl:text-[16px] text-white '>Billing</span>
    </div>
  )
}

export default BillingRedirection
