
import Head from "next/head";
import Footer from "../footer/footer";
import Header from "./header";
export default function Layout({ children, pageTitle="User Dashboard" }) {
    
  return (<div className=' bg-gray-50'>
      <Head>
          <title> {pageTitle} - ShieldedBit</title>
      </Head>
      <Header />
      <main className="min-h-[90vh] block w-full clear-both">
          { children }
      </main>
      <Footer/>
    </div>)
}
