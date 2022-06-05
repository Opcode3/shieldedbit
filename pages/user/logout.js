import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect} from 'react'
import { useUserState } from '../../components/dashboard/UserProvider'

export default function Logout() {

    const router = useRouter();

    useEffect(()=>{
      localStorage.removeItem('shieldedbit_user_info');
      router.push("/login");
    }, [])
    
  return (
    <>
        <Head>
            Logout - ShieldedBit
        </Head>
        <h3>logging out...</h3>
    </>
  )
}
