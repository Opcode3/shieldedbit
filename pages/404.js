
import Header from "../components/header/header";
import Link from 'next/link';
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>404 page - ShieldedBit</title>
      </Head>
      <Header />
      <main className="md:mt-[80px]">
        
        <div className="h-screen flex place-content-center flex-col place-items-center">
          <h1 className="text-9xl font-bold text-blue-600">404</h1>
          <p>
            Unable to gain access to this file from the server. 
            <Link href='/'><a className="text-blue-500 hover:underline">Go home</a></Link>
          </p>
        </div>
      </main>
    {/* <Footer /> */}
    </>
    
  )
}
