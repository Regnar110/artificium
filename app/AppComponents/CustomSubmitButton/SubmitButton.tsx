import React from 'react'
import PulseLoader from 'react-spinners/PulseLoader'
interface SubmitButtonProps {
    text:string,
    isLoading:boolean
}
const SubmitButton = ({text, isLoading}:SubmitButtonProps) => {
    return (
        <button type='submit' className='w-full col-span-2 bg-[#B6F09C] min-h-[36.5px] flex justify-center items-center rounded-md'>
            {
                isLoading ? <PulseLoader className='w-fit' size={10} color="#131619" /> : text
            }
        </button>  
    )
}
 

export default SubmitButton
