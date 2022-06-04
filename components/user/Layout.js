import Head from "next/head";
import { useRouter } from "next/router";
import { useUserState } from "../dashboard/UserProvider";
import Footer from "../footer/footer";
import Header from "./header";
import React from "react";

export default function Layout({ children }) {

  const { getUser } = useUserState();
  const router = useRouter();

  React.useEffect(() => {
    if( getUser().token == undefined || (getUser().token != null && getUser().token.trim().length <= 10)){
      router.push("/login")
    }
  }, []);
    
  return (
    <div className=' bg-gray-50'>
    <Head>
        <title>User Dashboard - ShieldedBit</title>
    </Head>
        <Header />
        <main className="min-h-[90vh] block w-full clear-both">
            { children }
        </main>
        <Footer/>
    </div>
  )
}
