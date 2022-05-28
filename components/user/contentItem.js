import React from 'react'

export default function ContentItem() {
    const number = 1;
  return (
    <div className='flex pt-2 pb-1 px-1 mt-1 hover:shadow-md cursor-pointer hover:bg-black/10 group'>
        <input type='checkbox' className='mt-2 mx-2 bg-black'  />
        <div className='pl-2'>
            <p className='text-base font-serif'>{number} Welcome</p>
            <label className='flex items-center text-gray-300 font-light group-hover:text-gray-800 text-sm'>
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                6min
            </label>
        </div>
    </div>
  )
}
