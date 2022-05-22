import Head from "next/head";
import Link from "next/link";
import Footer from "../components/footer/footer";
import Support from "../components/forms/Support";
import Header from "../components/header/header";
import Pagetitle from "../components/pagetitle";

export default function Contact() {
  return (
    <>
    <Head>
      <title>Contact us - ShieldedBit</title>
    </Head>
      <Header />
      <main className="md:mt-[80px]">
          <Pagetitle page='Contact Us' description='Get in touch with us!' />
          <div id="support" className="min-h-[40vh] pb-24 max-w-[92%] w-[700px] mx-auto">
            <ul className="grid sm:grid-cols-3 gap-x-2 gap-y-4 px-3 mt-12 mb-8">
              <li>
                  <span className="flex place-items-center flex-col">
                    <svg className="w-8 my-2 stroke-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <span className='text-blue-500 text-center text-sm'>29 Old Gloucester Street, London, United Kingdom.</span>
                  </span>
              </li>
              <li>
                <Link href='tel: 09084904938'><a target='_blank' className="flex place-items-center flex-col">
                    <svg className="w-8 my-2 stroke-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    <span className='text-blue-500 text-center text-sm'>0808-937-4892<br/>0906-090-3872</span>
                  </a></Link>
              </li>
              <li>
                <Link href='mailto: xyz@gmail.com'><a target='_blank' className="flex place-items-center flex-col">
                    <svg className="w-8 my-2 stroke-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                   <span className='text-blue-500 text-center text-sm'>support@shieldedbit.com<br/>help@shieldedbit.com</span>
                  </a></Link>
              </li>
            </ul>
            <Support />
          </div>
      </main>
    <Footer />
    </>
    
  )
}
