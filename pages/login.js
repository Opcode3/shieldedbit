import Head from 'next/head';
import Link from 'next/link';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login - ShieldedBit</title>
      </Head>
      <header className='flex pr-[3%] md:px-[6%] py-3 justify-between items-center'>
        <Link href="/"><a className='w-24'><img src='/assets/images/logo-black.png' alt='shieldedbit logo' /></a></Link>
        <span className='text-sm'>
          <em className='hidden sm:inline'>New to ShieldedBit? </em>
          <Link href="/register"><a className='py-2 px-4 ml-2 bg-blue-600 hover:bg-transparent transition-colors hover:text-blue-600 text-white border-blue-600 border border-solid rounded'>Sign up</a></Link>
        </span>
      </header>
      <main className='container mx-auto mt-10 md:mt-[10vh] flex place-content-center pb-14'>
        <form className='w-[380px] sm:max-w-[90%] px-2 grid place-items-center '>
          <h2 className='text-3xl font-bold mb-1 py-1'>Login to ShieldedBit</h2>
          <p className='mb-6 w-full'>Welcome back! Please log in to view your account.</p>
          <div className='py-2 w-full'>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' className='py-[14px] px-4 md:px-5' placeholder='Username'/>
          </div>
          <div className='py-2 w-full'>
            <label htmlFor='password' className='pr-2 flex justify-between items-center'>Password  <Link href='/'><a className='text-blue-400 text-xs hover:underline'>Forgot Password?</a></Link> </label>
            <input type='text' id='password' className='py-[14px] px-4 md:px-5' placeholder='Password'/>
          </div>

          <div className='py-2 w-full'>
            <button className='bg-blue-600 hover:bg-black hover:text-blue-600 text-lg font-bold transition-colors w-full py-3 rounded'> Log in to dashboard</button>
          </div>
        </form>
      </main>
    </>
  )
}
