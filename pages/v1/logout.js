import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect} from 'react'
import { useUserState } from '../../components/dashboard/UserProvider'

export default function Logout() {

    const { getAdmin } = useUserState();
    const router = useRouter();

    useEffect(()=>{
        getAdmin().token = "";
        getAdmin().name = "";
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
