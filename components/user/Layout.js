import Head from "next/head";
import { useRouter } from "next/router";
import { useUserState } from "../dashboard/UserProvider";
import Footer from "../footer/footer";
import Header from "./header";
// import React, {useState} from "react";
import { authCheck } from "../../helper/authenticate";

export default function Layout({ children }) {

  // const [authorized, setAuthorized] = useState(false);
  const router = useRouter();

  authCheck(async (user_data)=>{

    if(user_data == undefined && router.pathname.includes("/user")){
      router.push("/login")
    }

  })

    
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
