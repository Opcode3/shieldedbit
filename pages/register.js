import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import PasswordField from '../components/forms/PasswordField';
import Finish from '../components/forms/register/finish'
export default function Register() {

  const [level, setLevel] = useState(0);
  const [active, setActive] = useState(-1);

  const date = new Date();

  // Note: level {0: userType, 1:Register, 2:UserTypeForm, 3:finish}

  return (
    <>
      <Head>
        <title>Register - ShieldedBit</title>
      </Head>

      <header className='flex pr-[3%] pl-[2%] md:px-[6%] pb-3 pt-6 justify-between items-center'>
        <Link href="/"><a className={`w-12 ${level == 1 && 'hidden'}`}><img src='/assets/images/logo-black.png' alt='shieldedbit logo' /></a></Link>
        <span className={`cursor-pointer lg:bg-gray-700 ${level != 1 && 'hidden'} ml-4 mt-4 md:mt-0 md:ml-0`} onClick={ ()=> setLevel(0)}>
        <svg className="w-7 h-7 bg-white lg:hover:-translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </span>
        <span className='text-sm'>
          <em className='hidden sm:inline'>Already have an account? </em>
          <Link href="/login"><a className='py-2 px-4 ml-2 bg-blue-600 hover:bg-transparent hover:text-blue-600 transition-colors text-white border-blue-600 border border-solid rounded'>Log In</a></Link>
        </span>
      </header>
      <main className='container mx-auto mt-12 flex flex-col items-center pb-14'>
        <form onSubmit={(e) => { console.log("Registering data ")}} className='w-[460px] max-w-[96%] sm:max-w-[94%] px-2 mb-6 grid place-items-center '>
          <h2 className='text-3xl md:text-4xl font-bold mb-1 py-1'>User Registration Form</h2>
          <p className='mb-6'>Fill the form correctly to continue with the registration process...</p>
        
          <div className='py-2 w-full text-center grid grid-cols-1 gap-y-3 gap-x-5 '>
            <div>
              <input type='text' className='px-4 py-3' required placeholder="Name"/>
            </div>
            <div>
              <input type='email' className='px-4 py-3' required placeholder='Email'/>
            </div>
            <div>
              <input type='number' className='px-4 py-3' required placeholder='Phone number'/>
            </div>
            <div>
              <PasswordField/>
            </div>
          </div>
          <div className={`justify-center flex my-4 w-full`}>
              <button className='bg-blue-600 hover:bg-black w-full hover:text-blue-600 text-blue-50 text-lg font-bold transition-colors py-2 px-4 rounded'> Next</button>
          </div>
        </form>
      </main>
      <footer className="h-[80px] md:h-[160px] pb-[30px] flex items-end justify-center font-light text-sm">
          CopyRight &copy; {date.getFullYear()} - ShieldedBit.
      </footer>
    </>
  )
}
