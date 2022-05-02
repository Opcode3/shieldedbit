import Link from 'next/link';
export default function index() {

  return (
    <div className="bg-black h-screen grid grid-cols-100auto">
        <aside className="text-white max-h-fit overflow-auto px-3 grid grid-rows-160auto100">
            <div className=' h-40 pt-10 pl-6 flex justify-start items-start'>
                <img src='/assets/images/logo-white.jpeg' className='object-contain w-12' alt="shieldedbit logo"/>
            </div>
            <nav className='m-0 mr-1'>
                <ul>
                    <li>
                        <Link href=""><a className='flex py-3 px-2 hover:bg-gray-600 rounded-md text-base'>
                            <svg className="w-7 h-7 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            Dashboard
                        </a></Link>
                    </li>
                    <li>
                        <Link href=""><a className='flex py-3 px-2 hover:bg-gray-600 rounded-md text-base'>
                        <svg className="w-6 h-6 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            Friends List
                        </a></Link>
                    </li>
                    <li>
                        <Link href=""><a className='flex py-3 px-2 hover:bg-gray-600 rounded-md text-base'>
                            <svg className="w-6 mx-2 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            Services</a></Link>
                    </li>
                    <li>
                        <Link href=""><a className='flex py-3 px-2 hover:bg-gray-600 rounded-md text-base'>
                            <svg className="w-6 mx-2 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            My Lesson</a></Link>
                    </li>
                    <li>
                        <Link href=""><a className='flex py-3 px-2 hover:bg-gray-600 rounded-md text-base'>
                            <svg className="w-6 mx-2 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            Customer Services</a></Link>
                    </li>
                    <li>
                        <Link href=""><a className='flex py-3 px-2 hover:bg-gray-600 rounded-md text-base'>
                            <svg className="w-6 mx-2 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            Billings</a></Link>
                    </li>
                    <li>
                        <Link href=""><a className='flex py-3 px-2 hover:bg-gray-600 rounded-md text-base'>
                            <svg className="w-6 mx-2 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            Settings</a></Link>
                    </li>
                    
                </ul>
            </nav>
            <div className='grid grid-cols-40auto w-full gap-0 border-t border-solid border-blue-300 rounded-xl justify-start'>
                <span className=' flex items-center'>
                    <img src='/assets/images/use.jpg' className='w-12 h-12 overflow-hidden rounded-full object-cover' alt='user profile'/>
                </span>
                <span className='flex flex-col justify-center pl-2'>
                    <h4 className='text-sm font-bold text-ellipsis overflow-hidden'>Joseph Emmanuel Emeka</h4>
                    <p className='text-xs font-extralight text-ellipsis overflow-hidden'>josephemmanuelemeka@gmail.com</p>
                </span>
            </div>
        </aside>
        <section className="bg-blue-50 rounded-xl p-2 my-3 mx-2 overflow-x-hidden overflow-auto"> 
            <div className="h-96">
                Jesus is Lord
            </div>
        </section>
    </div>
  )
}
