import Head from 'next/head';
import React, {useState} from 'react';
import { useRouter } from 'next/router';

import Alert from '../../components/alert'
import PasswordField from '../../components/forms/PasswordField';
import { authenticate } from '../../helper/authenticate';

export default function Login() {

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [alert, setAlert] = useState("");

  const router = useRouter();

  const loginHandler = async (e) => {
    e.preventDefault();
    const response = await authenticate(username, password, router.pathname);
    if(response != null){
      router.push('/v1')
    }else{
      setAlert("Message from server");
    }
  }

  return (
    <>
      <Head>
        <title>Admin Login - ShieldedBit</title>
      </Head>
      
      <main className='container mx-auto mt-10 md:mt-[10vh] flex place-content-center pb-14'>
        <form onSubmit={ (e) => loginHandler(e)} className='w-[380px] sm:max-w-[90%] px-2 grid place-items-center '>
          <h2 className='text-3xl font-bold mb-1 py-1'>Administrative Login</h2>
          <p className='mb-6 w-full text-center'>Welcome back! Please log in to view admin account.</p>
          <div className='py-2 w-full'>
            <label htmlFor='username'>Username</label>
            <input onChange={(e)=> setUsername(e.target.value)} value={username} type='text' required id='username' className='py-[14px] px-4 md:px-5' placeholder='Username'/>
          </div>
          <div className='py-2 w-full'>
            <label htmlFor='password' className='pr-2 flex justify-between items-center'>Password </label>
            <PasswordField password={password} setPassword={setPassword}/>
          </div>
            { alert.trim().length > 4 ? <Alert message='Message from server' toggle={setAlert} /> : ''}
          <div className='py-2 w-full'>
            <button className='bg-blue-600 hover:bg-black hover:text-blue-600 text-lg font-bold transition-colors w-full py-3 rounded'> Log in</button>
          </div>
        </form>
      </main>
    </>
  )
}
