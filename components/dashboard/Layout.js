import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Footer from "../footer/footer";

export default function Layout({ children }) {
    const [burgerToggle, setBurgerToggle] = useState(false);
    const menus = [
      {value: 'Manage Courses', href:'/v1/courses'},
      {value: 'Manage Services', href:'/v1/services'},
      {value: 'Manage Users', href:'/v1/users'},
      {value: 'Manage Request', href:'/v1/support'},
    ]
  return (
    <>
        <header className="h-80 w-48 fixed right-8 top-8 flex flex-col items-end">

            <div onClick={()=> { setBurgerToggle(!burgerToggle)}} className="w-16 cursor-pointer h-16 inline-flex justify-center items-center shadow bg-blue-500 rounded-full">
              <svg className={`w-8 h-8 stroke-blue-50 ${ burgerToggle ?  'inline-block' : 'hidden'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              <svg className={`w-8 h-8 stroke-blue-50 ${ burgerToggle ? 'hidden' : 'inline-block' }`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg> 
            </div>

            <div className={`w-[90%] bg-gray-100 rounded mr-5 transition-all shadow ${ burgerToggle ? 'block' : 'hidden' }`}>
              <ul className="">
                {
                  menus.map( (menu, index) => 
                      <li key={index}><Link href={menu.href}><a className="pt-4 pb-3 px-3 font-extralight text-gray-800 hover:bg-gray-300 block">{menu.value}</a></Link></li>
                    )
                }
                
              </ul>
            </div>
                
        </header>
        <nav className="pl-4 block w-full">
          <Link href="/v1"><a className='w-20 inline-block overflow-hidden'><img src='/assets/images/logo-blue.png' className="w-20" alt='shieldedbit logo' /></a></Link>
        </nav>
        <main className="min-h-[calc(100vh-185px)] block w-full">
            { children }
        </main>
        <footer className="h-[100px] bg-green-500 flex items-center justify-center font-light text-sm">
          CopyRight &copy; 2022 - ShieldedBit.
        </footer>
    </>
  )
}
