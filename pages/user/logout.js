import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect} from 'react'
import { useUserState } from '../../components/dashboard/UserProvider'

export default function Logout() {

    const { getUser } = useUserState();
    const router = useRouter();

    useEffect(()=>{
        getUser().token = "";
        getUser().name = "";
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
