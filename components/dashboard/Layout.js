
import Link from "next/link";
import { useState, useEffect } from "react";
import { authCheck } from "../../helper/authenticate";

import { useUserState } from "./UserProvider";
import { useRouter } from "next/router";
import Preload from "../preload";

export default function Layout({ children }) {

  const router = useRouter();
  const [loader, setLoader] = useState(true);
  // const {getAdmin} = useUserState();

  authCheck(async (user_data)=>{

    if(user_data == undefined && router.pathname.includes("/v1")){
      router.push("/v1/login")
    }else{
      setLoader(false);
    }

  }, 'shieldedbit_admin_data')
  
    const [burgerToggle, setBurgerToggle] = useState(false);
    const menus = [
      {value: 'Manage Courses', href:'/v1/courses'},
      {value: 'Manage Services', href:'/v1/services'},
      {value: 'Manage Users', href:'/v1/users'},
      {value: 'Manage Request', href:'/v1/support'},
      {value: 'Logout', href:'/v1/logout'} 
    ];

  return (
    
      <>
      {
        loader ? <Preload />
              :
              <>
                <header className="w-full md:pr-[2%] lg:px-[8%] py-1 items-center  bg-white flex flex-col md:flex-row justify-between">
                    <div className="flex justify-between w-full md:w-fit">
                      <Link href="/v1"><a className='w-16 inline-block overflow-hidden'><img src='/assets/images/logo-blue.png' className="w-20" alt='shieldedbit logo' /></a></Link>

                      <div onClick={()=> { setBurgerToggle(!burgerToggle)}} className="w-16 md:hidden cursor-pointer h-16 inline-flex select-none justify-center items-center">
                        <svg className={`w-8 h-8 stroke-blue-500 ${ burgerToggle ?  'inline-block' : 'hidden'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        <svg className={`w-8 h-8 stroke-blue-500 ${ burgerToggle ? 'hidden' : 'inline-block' }`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg> 
                      </div>
                    </div>

                    <nav className={`pl-4 w-full md:w-fit ${ burgerToggle ? 'block' : 'hidden md:inline-block' }`}>
                        <ul className="flex flex-col md:flex-row">
                          {
                            menus.map( (menu, index) => 
                                <li key={index}><Link href={menu.href}><a className="pt-4 pb-3 px-2 lg:px-3 font-extralight text-sm lg:text-base text-gray-600 hover:text-gray-800 block md:inline-block">{menu.value}</a></Link></li>
                              )
                          }
                          
                        </ul>
                    </nav>
                        
                </header>

                <main className="min-h-[calc(100vh-150px)] block w-full">
                    { children }
                </main>

                <footer className="h-[100px] bg-white flex items-center justify-center font-light text-sm">
                  CopyRight &copy; 2022 - ShieldedBit. 
                </footer>
              </>
      }
        
      </>
  )
}
