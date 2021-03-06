import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [burgerToggle, setBurgerToggle] = useState(false);
    const notification = [];


    const navigations = [
        {url: '/user', caption: 'Dashboard'},
        {url: '/user/learning', caption: 'My Learning'},
        {url: '/service', caption: 'Services'},
        {url: '/courses', caption: 'Courses'}
    ]

  return (
    <header className="w-full bg-gray-50 md:top-0 px-[2%] md:px-[3%] lg:px-[6%] min-h-auto border-b border-gray-200">
        <div className="w-full md:w-fit min-h-[40px] pt-3 pb-1 grid grid-cols-1 md:flex items-center float-left">
            <div className="w-full md:w-fit flex justify-between items-center">
                <Link href="/user"><a className='w-14'><img src='/assets/images/logo-black.png' className="w-[80%]" alt='shieldedbit logo' /></a></Link>

                <svg onClick={()=> { setBurgerToggle(!burgerToggle)}} className={`w-8 h-8 ${ burgerToggle ?  'inline-block' : 'hidden'} md:hidden mr-3`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                <svg onClick={()=> { setBurgerToggle(!burgerToggle)}} className={`w-8 h-8 ${ burgerToggle ? 'hidden' : 'inline-block' } md:hidden mr-3`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </div>
            <nav className={ `${ burgerToggle ? 'block' : 'hidden'} md:block pt-2 md:pt-0 md:pl-2 lg:pl-3`}>
                <ul className="mx-0 px-0 flex flex-col md:inline-block">
                    {
                        navigations.map( 
                            (navigate, index) => (
                                    <li key={index} className="inline-block">
                                        <Link href={navigate.url}><a className="text-sm font-light px-[10px] lg:px-4 py-2 block text-gray-800 hover:text-black">
                                            {navigate.caption}
                                        </a></Link>
                                    </li>
                            )
                            
                        )
                    }
                </ul>
            </nav>
        </div>
        <div className={` ${burgerToggle ? 'block' : 'hidden'} w-full md:w-fit border-t mt-4 py-4 md:pt-0 md:mt-0 border-gray-200 md:border-t-0 md:flex place-items-center float-right min-h-[80px]`}>
            <ul className="mx-0 px-0 w-full md:w-fit flex flex-col md:flex-row md:place-items-center">
                <li className="dropdown_item ">
                    <button className="lg:px-4 py-2 px-[10px] text-sm w-full flex  items-center justify-between font-light text-gray-800 hover:text-black relative">
                        <h5 className="block md:hidden text-gray-800 ">New Messages</h5>
                        <span className={`md:absolute bg-blue-400 rounded-full text-white h-4 w-4 md:top-0 text-xs font-bold md:right-4 ${notification.length == 0 && 'hidden'}`}>4</span>
                        <svg className="w-6 h-6 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                    </button>
                    {/* Notification */}
                    <ul className="md:w-[380px] dropdown">

                        {
                            notification.length == 0 ? <i className="px-3 py-2 text-sm font-light">Your message box is empty!</i> :
                            notification.map(
                                (message, key) => (
                                    <li key={key} className="md:border-b rounded-b"> 
                                        <Link href="/login"><a className="text-sm font-light text-gray-800 px-[10px] lg:px-4 py-3 flex gap-2 hover:text-black hover:bg-gray-100">
                                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            <span>
                                                <h4 className="font-medium">Notification Headings</h4>
                                                <p className="text-xs font-light ">
                                                    little description of notification headings
                                                    little description of notification headings
                                                </p>
                                            </span>
                                        </a></Link> 
                                    </li>
                                )
                            )
                        }
                        
                    </ul>
                </li>
                <li className="dropdown_item">
                    <button className="text-sm w-full md:px-[10px] lg:px-4 md:py-2 font-light text-gray-800 hover:text-black">
                        <svg className="w-6 h-6 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <h5 className="w-full px-[10px] lg:px-4 py-2 flex md:hidden text-gray-800 items-center justify-between">Supports <span className="caret"></span></h5>
                    </button>
                    <ul className="dropdown">
                        <li> <Link href="/login"><a className="text-sm font-light text-gray-800 px-[10px] lg:px-4 py-3 block hover:text-black hover:bg-gray-100">FAQs</a></Link> </li>
                        <li> <Link href="/login"><a className="text-sm font-light text-gray-800 px-[10px] lg:px-4 py-3 block hover:text-black hover:bg-gray-100">Career</a></Link> </li>
                        <li> <Link href="/login"><a className="text-sm font-light text-gray-800 px-[10px] lg:px-4 py-3 block hover:text-black hover:bg-gray-100">Contact Us</a></Link> </li>
                    </ul>
                </li>
                <li className="dropdown_item">
                    <button className="text-sm w-full px-[10px] lg:px-4 py-2 flex justify-between items-center font-light text-gray-800 hover:text-black">Account <span className="caret"></span>
                    </button>
                    <ul className="dropdown">
                        <li> <Link href="/user"><a className="text-sm font-light text-gray-800 px-[10px] lg:px-4 py-3 block hover:text-black hover:bg-gray-100">Dashboard</a></Link> </li>
                        <li> <Link href="/user/learning"><a className="text-sm font-light text-gray-800 px-[10px] lg:px-4 py-3 block hover:text-black hover:bg-gray-100">My Learning</a></Link> </li>
                        <li> <Link href="/login"><a className="text-sm font-light text-gray-800 px-[10px] lg:px-4 py-3 block hover:text-black hover:bg-gray-100">Notifications</a></Link> </li>
                        <hr className="my-2"/>
                        <li> <Link href="/login"><a className="text-sm font-light text-gray-800 px-[10px] lg:px-4 py-3 block hover:text-black hover:bg-gray-100">Profile</a></Link> </li>
                        <li> <Link href="/login"><a className="text-sm font-light text-gray-800 px-[10px] lg:px-4 py-3 block hover:text-black hover:bg-gray-100">Account Settings</a></Link> </li>
                        <hr className="my-2"/>
                        <li> <Link href="/user/logout"><a className="text-sm font-light text-gray-800 px-[10px] lg:px-4 py-3 block hover:text-black hover:bg-gray-100">Logout</a></Link> </li>
                    </ul>
                </li>
            </ul>
        </div>
    </header>
  )
}
