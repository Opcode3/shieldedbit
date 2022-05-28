import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Finish from '../components/forms/register/finish'
import Step1 from '../components/forms/register/step1'
import Step2 from '../components/forms/register/step2'
import Step3 from '../components/forms/register/step3'
export default function Register() {

  const [level, setLevel] = useState(0);
  const [active, setActive] = useState(-1);

  // Note: level {0: userType, 1:Register, 2:UserTypeForm, 3:finish}

  return (
    <>
    <Head>
      <title>Register - ShieldedBit</title>
    </Head>
      <header className='flex pr-[3%] pl-[2%] md:px-[6%] py-3 justify-between items-center'>
        <Link href="/"><a className={`w-16 ${level == 1 && 'hidden'}`}><img src='/assets/images/logo-black.png' alt='shieldedbit logo' /></a></Link>
        <span className={`cursor-pointer bg-gray-700 ${level != 1 && 'hidden'} ml-4 mt-4 md:mt-0 md:ml-0`} onClick={ ()=> setLevel(0)}>
        <svg className="w-7 h-7 bg-white hover:-translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </span>
        <span className='text-sm'>
          <em className='hidden sm:inline'>Already have an account? </em>
          <Link href="/login"><a className='py-2 px-4 ml-2 bg-blue-600 hover:bg-transparent hover:text-blue-600 transition-colors text-white border-blue-600 border border-solid rounded'>Log In</a></Link>
        </span>
      </header>
      <main className='container mx-auto mt-12 flex flex-col items-center pb-14'>
        { 
          
          level == 0 ? <Step1 active={active} setActive={setActive} setLevel={setLevel} /> :
            level == 1 ? <Step2 setLevel={setLevel} accountType={active} /> :
              level == 2 ? <Step3 accountType={active} setLevel={setLevel} /> : <Finish />
          
        }
      </main>
    </>
  )
}
