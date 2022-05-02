import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
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
      <header className='flex pr-[3%] md:px-[6%] py-3 justify-between items-center'>
        <Link href="/"><a className='w-24'><img src='/assets/images/logo-black.png' alt='shieldedbit logo' /></a></Link>
        <span className='text-sm'>
          <em className='hidden sm:inline'>Already have an account? </em>
          <Link href="/login"><a className='py-2 px-4 ml-2 bg-blue-600 hover:bg-transparent hover:text-blue-600 transition-colors text-white border-blue-600 border border-solid rounded'>Log In</a></Link>
        </span>
      </header>
      <main className='container mx-auto mt-12 flex flex-col items-center pb-14'>
        { 
          
          level == 0 ? <Step1 active={active} setActive={setActive} setLevel={setLevel} /> :
            level == 1 ? <Step2 setLevel={setLevel} accountType={active} /> :
              level == 2 ? <Step3 accountType={active} setLevel={setLevel} /> :
              <p>Go to login</p>
          
        }
      </main>
    </>
  )
}
