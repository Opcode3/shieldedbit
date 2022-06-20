import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { authCheck } from '../../helper/authenticate';
import { useUserInfo } from '../../helper/helper';
import img_logo from '../../public/assets/images/logo-white.png';

export default function Header({color = 'black'}) {
  const [burgerToggle, setBurgerToggle] = useState(false);
  const [isUser, setIsUser] = useState(false);


  authCheck(async (user_data) => {

    if(user_data != undefined && typeof user_data == 'object' && user_data.id.trim().length >= 4){
        // const { username } = useUserInfo(user_data);
        setIsUser(true);
      }
  });



  return (
    <header className={`w-full ${ color == 'white'? 'bg-white' : 'bg-black'} overflow-hidden md:overflow-visible md:top-0 relative md:fixed z-20 px-[2%] md:px-[3%] lg:px-[6%] min-h-[80px]`}>
            <div className="w-full md:w-fit min-h-[80px] grid grid-cols-1 md:flex items-center float-left">
                <div className=" w-full md:w-fit flex justify-between items-center">
                    <Link href="/"><a className='w-20'>
                        <Image src={img_logo} priority className="w-[80%]" alt='shieldedbit logo' /></a>
                    </Link>

                    {/* <img src='/assets/images/logo-white.png' className="w-20" alt="shieldedbit logo"/> */}
                    <svg onClick={()=> { setBurgerToggle(!burgerToggle)}} className={`w-8 h-8 text-white ${ burgerToggle ?  'inline-block' : 'hidden'} md:hidden mr-3`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    <svg onClick={()=> { setBurgerToggle(!burgerToggle)}} className={`w-8 h-8 text-white ${ burgerToggle ? 'hidden' : 'inline-block' } md:hidden mr-3`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </div>
                <nav className={ `${ burgerToggle ? 'block' : 'hidden'} transition-all  md:block md:pl-2 lg:pl-3`}>
                    <ul className="mx-0 px-0 flex flex-col md:inline-block">
                        <li className="inline-block"><Link href='/'><a className="text-sm font-light px-[10px] lg:px-4 py-2 block text-white hover:text-gray-100">Home</a></Link></li>
                        <li className="inline-block"><Link href='/about'><a className="text-sm font-light px-[10px] lg:px-4 py-2 flex text-white hover:text-gray-100">About us</a></Link></li>
                        
                        
                        <li className="dropdown_item">
                            <button className="text-sm flex w-full m-0 px-[10px] lg:px-4 py-2 items-center justify-between font-light text-white hover:text-gray-100">Services <span className="caret"></span> </button>
                            <ul className="dropdown md:bg-black">
                                <li> <Link href="/service"><a className="text-sm font-light text-white px-[10px] lg:px-4 py-3 block hover:text-gray-100 hover:bg-gray-900">View more</a></Link> </li>
                            </ul>
                        </li>
                        <li className="dropdown_item">
                            <button className="text-sm flex w-full m-0 px-[10px] lg:px-4 py-2 items-center justify-between font-light text-white hover:text-gray-100">Courses<span className="caret"></span> </button>
                            <ul className="dropdown md:bg-black">
                                {/* <li> <Link href="/about"><a className="text-sm font-light text-white px-[10px] lg:px-4 py-3 block hover:text-gray-100 hover:bg-gray-900">CyberSecurity</a></Link> </li> */}
                                <li> <Link href="/courses"><a className="text-sm font-light text-white px-[10px] lg:px-4 py-3 block hover:text-gray-100 hover:bg-gray-900">View more</a></Link> </li>
                            </ul>
                        </li>
                        <li className="hidden lg:inline-block"><Link href='/contact'><a className="text-sm font-light px-[10px] lg:px-4 py-2 flex text-white hover:text-gray-100">Contact Us</a></Link></li>
                    </ul>
                </nav>
            </div>
            <div className={` ${burgerToggle ? 'block' : 'hidden'} w-full md:w-fit border-t mt-9 py-4 md:pt-0 md:mt-0 border-gray-200 md:border-t-0 md:flex place-items-center float-right min-h-[80px]`}>
                {
                  isUser ? (    
                        <ul className="mx-0 px-0 w-full md:w-fit flex flex-col md:flex-row md:place-items-center">
                          <li className="dropdown_item ">
                              <button className="lg:px-4 py-2 px-[10px] text-sm w-full flex  items-center justify-between font-light text-white hover:text-gray-100 relative">
                                  <h5 className="block md:hidden">New Messages</h5>
                                  <span className="md:absolute bg-blue-400 rounded-full text-white h-4 w-4 md:top-0 text-xs font-bold md:right-4">4</span>
                                  <svg className="w-6 h-6 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                              </button>
                              {/* Notification */}
                              <ul className="md:w-[380px] dropdown md:bg-black">
                                  <li className="md:border-b rounded-b"> 
                                      <Link href="/login"><a className="text-sm font-light text-white px-[10px] lg:px-4 py-3 flex gap-2 hover:text-gray-100 hover:bg-gray-900">
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
                                  <li className="md:border-b rounded-b"> 
                                      <Link href="/login"><a className="text-sm font-light text-white px-[10px] lg:px-4 py-3 flex gap-2 hover:text-gray-100 hover:bg-gray-900">
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
                              </ul>
                          </li>
                          <li className="dropdown_item">
                              <button className="text-sm w-full md:px-[10px] lg:px-4 md:py-2 font-light text-white hover:text-gray-100">
                                  <svg className="w-6 h-6 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                  <h5 className="w-full px-[10px] lg:px-4 py-2 flex md:hidden items-center justify-between">Supports <span className="caret"></span></h5>
                              </button>
                              <ul className="dropdown md:bg-black">
                                  <li> <Link href="/login"><a className="text-sm font-light text-white px-[10px] lg:px-4 py-3 block hover:text-gray-100 hover:bg-gray-900">FAQs</a></Link> </li>
                                  <li> <Link href="/login"><a className="text-sm font-light text-white px-[10px] lg:px-4 py-3 block hover:text-gray-100 hover:bg-gray-900">Career</a></Link> </li>
                                  <li> <Link href="/login"><a className="text-sm font-light text-white px-[10px] lg:px-4 py-3 block hover:text-gray-100 hover:bg-gray-900">Contact Us</a></Link> </li>
                              </ul>
                          </li>
                          <li className="dropdown_item">
                              <button className="text-sm w-full px-[10px] lg:px-4 py-2 flex justify-between items-center font-light text-white hover:text-gray-100">Account <span className="caret"></span>
                              </button>
                              <ul className="dropdown md:bg-black">
                                  <li> <Link href="/user"><a className="text-sm font-light text-white px-[10px] lg:px-4 py-3 block hover:text-gray-100 hover:bg-gray-900">Dashboard</a></Link> </li>
                                  <li> <Link href="/user/learning"><a className="text-sm font-light text-white px-[10px] lg:px-4 py-3 block hover:text-gray-100 hover:bg-gray-900">My Learning</a></Link> </li>
                                  <li> <Link href="/login"><a className="text-sm font-light text-white px-[10px] lg:px-4 py-3 block hover:text-gray-100 hover:bg-gray-900">Notifications</a></Link> </li>
                                  <hr className="my-2"/>
                                  <li> <Link href="/login"><a className="text-sm font-light text-white px-[10px] lg:px-4 py-3 block hover:text-gray-100 hover:bg-gray-900">Profile</a></Link> </li>
                                  <li> <Link href="/login"><a className="text-sm font-light text-white px-[10px] lg:px-4 py-3 block hover:text-gray-100 hover:bg-gray-900">Account Settings</a></Link> </li>
                                  <hr className="my-2"/>
                                  <li> <Link href="/user/logout"><a className="text-sm font-light text-white px-[10px] lg:px-4 py-3 block hover:text-gray-100 hover:bg-gray-900">Logout</a></Link> </li>
                              </ul>
                          </li>
                      </ul>
                  ) : (    
                      <ul className="mx-0 px-0 w-full md:w-fit flex flex-col md:flex-row md:place-items-center md:mt-3">
                          <li className="dropdown_item">
                              <button className="text-sm w-full md:px-[10px] lg:px-4 md:py-2 font-light text-white hover:text-gray-100">
                                  <svg className="w-6 h-6 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                  <h5 className="w-full px-[10px] lg:px-4 py-2 flex md:hidden items-center justify-between">Supports <span className="caret"></span></h5>
                              </button>
                              <ul className="dropdown md:bg-black">
                                  <li> <Link href="/faqs"><a className="text-sm font-light text-white px-[10px] lg:px-4 py-3 block hover:text-gray-100 hover:bg-gray-900">FAQs</a></Link> </li>
                                  <li> <Link href="/career"><a className="text-sm font-light text-white px-[10px] lg:px-4 py-3 block hover:text-gray-100 hover:bg-gray-900">Career</a></Link> </li>
                                  <li> <Link href="/contact"><a className="text-sm font-light text-white px-[10px] lg:px-4 py-3 block hover:text-gray-100 hover:bg-gray-900">Contact Us</a></Link> </li>
                              </ul>
                          </li>
                          <li className="dropdown_item">
                              <Link href='/login'><a className="text-sm w-full px-[10px] lg:px-4 py-2 flex justify-between items-center font-light text-white hover:text-gray-100">Login</a></Link>
                          </li>
                          <li className="dropdown_item">
                              <Link href='/register'><a className="text-sm w-full px-[10px] lg:px-4 py-3 rounded flex bg-blue-600 hover:bg-blue-800 mt-2 md:mt-0 md:ml-2  justify-between items-center font-light text-white hover:text-gray-100">Create Account</a></Link>
                          </li>
                      </ul>
                  )
                }
            </div>
        </header>
  )
}

