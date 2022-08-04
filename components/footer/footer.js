import Link from 'next/link';
export default function Footer() {
  const date = new Date();
  return (
    <footer className="bg-black min-h-96 flex flex-col pt-14">
      <section className='gap-x-2 gap-y-8 w-full max-w-7xl mx-auto sm:grid sm:grid-cols-2 lg:grid-cols-[repeat(3,_minmax(0,_1fr))_350px] flex px-4 sm:px-6 md:px-16 pb-4 flex-col'>
        
        <div>
          <h3> Company</h3>
          <ul>
            <li> <Link href="/about"><a>About Us</a></Link> </li>
            <li> <Link href="/"><a>Privacy Policy</a></Link> </li>
            <li> <Link href="/career"><a>Career</a></Link> </li>
            <li> <Link href="/contact"><a>Contact Us</a></Link> </li>
          </ul>
        </div>
        <div>
          <h3> Services</h3>
          <ul>
            <li> <Link href="/service/Identity%20&%20Access%20Management"><a className="">Identity and Access Management</a></Link> </li>
            <li> <Link href="/service/Cloud%20&%20On-Premises%20Security"><a> Cloud and on-premises security</a></Link> </li>
            <li> <Link href="/service/General%20IT%20or%20Cybersecurity%20Consultancy"><a> General IT or Cybersecurity Consultancy</a></Link> </li>
            {/* <li> <Link href="/service/Internship%20&%20IT%20Career%20Development"><a> Internship</a></Link> </li> */}
            <li> <Link href="/service/Staff%20Training"><a> General Staff Training </a></Link> </li>
            {/* <li> <Link href="/service/"><a> </a></Link> </li> */}
          </ul>
        </div>
        <div>
          <h3> Quick Links</h3>
          <ul>
            <li> <Link href="/"><a>Home</a></Link> </li>
            <li> <Link href="/courses"><a>Courses</a></Link> </li>
            <li> <Link href="/service"><a>Services</a></Link> </li>
            <li> <Link href="/faqs"><a>FAQs</a></Link> </li>
            <li> <Link href="/register"><a>Sign up</a></Link> </li>
            <li> <Link href="/login"><a>Login</a></Link> </li>
          </ul>
        </div>

        <div>
          <h3> Quick Contacts</h3>
          <ul>
            <li>
              <p> If you need help or have any question(s), feel free to contact our team using the below information.  </p>
            </li>
            <li>
              <span className='text-xl sm:text-2xl'>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                help@shieldedbit.com
              </span>
            </li>


            <li>
              <span className='text-xl sm:text-2xl'>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              (+234) 905 584 9032
              </span>
            </li>



            <li>
              <span>
                <Link href="/"><a target="_blank">
                <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                Get direction
                </a></Link>
              </span>
            </li>

          </ul>
        </div>
      </section>
      <section className='flex items-center justify-center border-t border-solid text-white border-y-gray-400 py-4 mt-4'>
          <p className='text-center' >&copy; {date.getFullYear()} ShieldedBit, All Rights Reserved.</p>
      </section>
    </footer>

  )
}
