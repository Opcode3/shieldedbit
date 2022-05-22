import Head from "next/head";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Pagetitle from "../components/pagetitle";
import Consulting from "../components/consulting"

export default function Career() {

  return (
    <>
      <Head>
          <title>Career - ShieldedBit</title>
      </Head>
      <Header />
      <main className="md:mt-[80px]">
          <Pagetitle page='Career' description='Join our team' />
        <div className="min-h-[30vh] ">

          <p className="flex items-center justify-center min-h-[40vh] mx-auto text-center text-lg sm:w-[80%]">
            Thank you for visiting our career page. <br/>For now we have no open position to be occupied.
          </p>

        </div>
      </main>
      <Consulting />
      <Footer />
    </>
    
  )
}
