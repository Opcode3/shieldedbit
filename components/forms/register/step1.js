import Link from 'next/link';
export default function Step1({ active, setActive, setLevel}) {
    const userInformation = [
        'Individual account are for ', // Individual
        'Corporate account is ', //Corporate
        'Expert tutor account are', // Expert Tutor
        'Become a partner with us'//Partner 
    ]

  return (
    <form onSubmit={(e) => { e.preventDefault(); setLevel(1)}} className='w-[680px] max-w-[90%] px-2 mb-6 grid place-items-center '>
        <h2 className='text-2xl lg:text-4xl font-bold'>Select a Account Type</h2>
        <p className='mb-6'>Select a user type to continue registration!</p>
        <div className='py-2 w-full text-center'>
            <span onClick={()=>{setActive(0)}} className={ `${active == 0?'bg-blue-800':''} bg-blue-600 text-blue-50 cursor-pointer hover:bg-blue-800 transition-colors py-2 px-4 inline-block`}>Individual</span>
            <span onClick={()=>{setActive(1)}} className={ `${active == 1?'bg-blue-800':''} bg-blue-600 text-blue-50 cursor-pointer hover:bg-blue-800 transition-colors py-2 px-4 inline-block`}>Corporate Organization</span>
            <span onClick={()=>{setActive(2)}} className={ `${active == 2?'bg-blue-800':''} bg-blue-600 text-blue-50 cursor-pointer hover:bg-blue-800 transition-colors py-2 px-4 inline-block`}>Expert Tutor</span>
            <span onClick={()=>{setActive(3)}} className={ `${active == 3?'bg-blue-800':''} bg-blue-600 text-blue-50 cursor-pointer hover:bg-blue-800 transition-colors py-2 px-4 inline-block`}>Partner</span>
        </div>
        <div className={`${ active == -1 ? 'hidden' : 'flex'} py-4 pt-12 w-full sm:w-[60%] place-content-center gap-1 flex-row`}>
            <div className='w-fit p-5 flex justify-center items-center'>
                <span title='Account Type Description' className='w-[40px] rounded-full hover:bg-blue-100 hover:cursor-pointer h-[40px] text-blue-700 question_icon text-2xl flex place-content-center place-items-center'>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </span>
            </div>
            <p className='break-words text-base italic font-light flex items-center'>
                {
                    `${userInformation[active]} compliance from calculations to reporting to filing. `
                }
            </p>
        </div>
        <div className={`${ active == -1 ? 'hidden' : 'flex'} my-4`}>
            <button className='bg-blue-600 hover:bg-black hover:text-blue-600 text-blue-50 text-lg font-bold transition-colors w-full py-2 px-4 rounded'> Next</button>
        </div>
    </form>
  )
}
