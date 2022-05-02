import Link from 'next/link';

export default function header() {
  return (
    <header className=" bg-black h-auto p-5% lg:p-8% py-3 flex  md:grid md:grid-cols-65auto250 lg:grid-cols-100auto250">
      <span className="flex justify-between w-full">
        <img src="/assets/images/logo-white.jpeg" className="h-14" alt="shieldedbit" />
        <button>
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </span>
      <nav className="hidden flex-col items-center md:justify-around md:items-start md:inline-flex left-0 top-0 fixed w-screen md:w-auto h-screen md:h-auto bg-blue-800 md:bg-transparent z-20 md:z-0 md:relative ">        
        <div className="md:hidden py-2 flex bg-black justify-between w-full px-12 ">
          <img src="/assets/images/logo-white.jpeg" className="h-14" alt="shieldedbit" />
          <button className="text-gray-50 text-4xl w-12 h-12"> &times; </button>
        </div>
        <ul className="flex flex-col px-12 md:px-0 pt-10 md:pt-2 pb-32 md:pb-2 overflow-y-auto justify-start md:mt-auto w-full md:flex-row md:items-center ">
          <li> <Link href="/"><a className="navLink">Home</a></Link> </li>
          <li> 
            <button className="navLink w-full text-left">Company</button>
            <ul className="bg-transparent md:absolute md:bg-black hidden px-4 border-none outline-none rounded-b-md">
              <li> <Link href="/"><a className="navLink">About Us</a></Link> </li>
              <li> <Link href="/"><a className="navLink">Helps &amp; FAQs</a></Link> </li>
              <li> <Link href="/"><a className="navLink">Career</a></Link> </li>
            </ul>
          </li>
          <li> 
            <button className="navLink w-full text-left">Services</button>
            <ul className="bg-transparent md:absolute md:bg-black px-4 border-none outline-none rounded-b-md">
              <li> <Link href="/"><a className="navLink">Learn IT skill</a></Link> </li>
              <li> <Link href="/"><a className="navLink">Consultancy</a></Link> </li>
            </ul>
          </li>
          <li> <Link href="/"><a className="navLink">Contact Us</a></Link> </li>
        </ul>        
      </nav>
      <div className="hidden md:inline-flex justify-end ">
        <ul className="flex items-center space-x-1 overflow-hidden">
          <li> <Link href="/login"><a className="navLink">Login</a></Link> </li>
          <li> <Link href="/register"><a className="py-3 px-4 text-white bg-blue-700 hover:bg-blue-800 rounded-md md:text-sm">Create Account</a></Link> </li>
        </ul>
      </div>
    </header>
  )
}

