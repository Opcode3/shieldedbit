import React from 'react'

export default function Alert({message, toggle, type = 'error'}) {

  // const [alertToggle, setAlertToggle] = React.useState(false)

  return (
    <div className={ `${type=='error'? 'bg-red-500 hover:bg-red-500/80': 'bg-green-500 hover:bg-green-500/80'}  text-gray-800 text-base border-none outline-none shadow-lg w-full flex items-center justify-between rounded px-[4%] py-2 min-h-[30px]`}>
        <p className='pb-[2px]'>{message}</p>
        <svg onClick={()=> { toggle('')}} className={`w-6 cursor-pointer h-6 text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </div>
  )
}
