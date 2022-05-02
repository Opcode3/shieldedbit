import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main className="md:mt-[80px]">
        <div className="flex flex-col h-[340px] place-content-center place-items-center bg-gradient-to-b from-black to-blue-600 text-3xl text-white">
          <p className="text-xs"><Link href='/'><a>Home</a></Link> {'>>>'} Contact ShieldedBit</p>
          <h2 className="text-4xl font-bold"> Contact Us</h2>
        </div>
        <div className="h-screen">

        </div>
      </main>
    <Footer />
    </>
    
  )
}
