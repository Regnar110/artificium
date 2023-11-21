import React from 'react'


interface Props {
    type:"Accept" | "Reject" 
    callback:(type:"accept" | "reject") => void
}
const FRresponseButtons = ({type, callback}:Props) => {
  return (
    <button 
        onClick={callback}
        className={`request_response_button text-black ${type==="Accept" ? 'bg-[#B6F09C]':"bg-[#EF4444]"} px-3 py-1 rounded-md`}
    >
        {type}
    </button>
  )
}

export default FRresponseButtons
