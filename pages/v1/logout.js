import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect} from 'react'

export default function Logout() {

    const router = useRouter();

    useEffect(()=>{
      localStorage.removeItem('shieldedbit_admin_data');
      router.push("/v1/login");
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
