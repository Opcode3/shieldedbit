import Head from "next/head";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Slider from "../components/slider";

export default function Home() {
  return (
    <>
      <Head>
        <title>ShieldedBit - Global Cybersecurity Consultancy Company</title>
      </Head>
      <Header />
      <main className="md:mt-[80px]">
        {/* <div className="flex bg-gradient-to-b from-black to-blue-600 justify-center text-3xl text-white items-center bg-black h-64">
          Home Page
        </div> */}
        <Slider />
        <div className="h-screen">

        </div>
      </main>
    <Footer />
    </>
    
  )
}
