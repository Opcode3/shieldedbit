import React from 'react'

export default function Preload() {
  return (
    <div className='h-screen px-[20px] md:px-0 w-[100vw-40px] md:w-screen bg-gray-50 flex flex-col justify-center items-center'>
        <svg className="w-9 h-9 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
        <p className='text-center font-light text-sm md:text-lg uppercase pt-3'>ShieldedBit site is loading</p>
    </div>
  )
}
