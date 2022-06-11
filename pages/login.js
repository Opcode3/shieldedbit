import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Alert from '../components/alert';
import PasswordField from '../components/forms/PasswordField';
import { authenticate } from '../helper/authenticate';

import img_logo from '../public/assets/images/logo-black.png';


export default function Login() {

  const date = new Date();

  const [password, setPassword] = useState("1235677880");
  const [username, setUsername] = useState("08159792686");
  const [alert, setAlert] = useState("");
  const [response, setResponse] = useState();
  const [requestStatus, setRequestStatus] = useState(false);

  const router = useRouter();

  const loginHandler = (e) => {
    e.preventDefault();
    setRequestStatus(true)

    let form_data = new FormData();
    form_data.set('credential', username);
    form_data.set('password', password);

    authenticate(form_data, router.pathname, setResponse).then((data) => {
    console.log(response)

    });

    
  }

  useEffect(() => {
    if(response != null){
      if(response.code != null){
        if(response.code == 200){
          router.push('/user');
        }else{
          setAlert(response.message);
          setRequestStatus(false);
        }
      }else{
        setAlert('Unable to access the internet. check your internet connection...');
        setRequestStatus(false);
      }
    }
  }, [response]);

  return (
    <>
      <Head>
        <title>Login - ShieldedBit</title>
      </Head>
      <header className='flex pl-[2%] pr-[3%] md:px-[6%] pb-3 pt-4 justify-between items-center'>
        <Link href="/"><a className='w-12'>
          <Image src={img_logo} priority alt='shieldedbit logo' />
          </a></Link>
        <span className='text-sm'>
          <em className='hidden sm:inline'>New to ShieldedBit? </em>
          <Link href="/register"><a className='py-2 px-4 ml-2 bg-blue-600 hover:bg-transparent transition-colors hover:text-blue-600 text-white border-blue-600 border border-solid rounded'>Sign up</a></Link>
        </span>
      </header>
      <main className='container mx-auto mt-10 md:mt-[10vh] flex place-content-center pb-14'>
        <form onSubmit={(e) => loginHandler(e)} className='w-[380px] sm:max-w-[90%] px-2 grid place-items-center '>
          <h2 className='text-3xl md:text-4xl font-bold mb-1 py-1'>Login to ShieldedBit</h2>
          <p className='mb-6 w-full'>Welcome back! Please log in to view your account.</p>
          <div className='py-2 w-full'>
            <label htmlFor='username'>Username</label>
            <input onChange={(e)=> setUsername(e.target.value)} value={username} type='text' required id='username' className='py-[14px] px-4 md:px-5' placeholder='Email or Phone number'/>
          </div>
          <div className='py-2 w-full'>
            <label htmlFor='password' className='pr-2 flex justify-between items-center'>Password  <Link href='/'><a className='text-blue-400 text-xs hover:underline'>Forgot Password?</a></Link> </label>
            <PasswordField password={password} setPassword={setPassword}/>
            
          </div>
          { alert.trim().length > 4 ? <Alert toggle={setAlert} message={alert} /> : ''}
          <div className='py-2 w-full'>
            <button disabled={requestStatus}  className={ `${ requestStatus ? 'cursor-not-allowed bg-blue-300':'bg-blue-600 hover:bg-black hover:text-blue-600' }  inline-flex justify-center  text-lg font-bold transition ease-in-out duration-150 w-full py-3 rounded`}> 
              <svg className={`${ requestStatus ? 'inline-block':'hidden' } animate-spin -ml-1 mr-3 h-5 w-5 text-black`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              Log in to dashboard
            </button>
          </div>
        </form>
      </main>
      <footer className="h-[80px] md:h-[160px] pb-[30px] flex items-end justify-center font-light text-sm">
          CopyRight &copy; {date.getFullYear()} - ShieldedBit.
      </footer>
    </>
  )
}

