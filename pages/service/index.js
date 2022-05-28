import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Link from 'next/link';
import ServiceCard from "../../components/serviceCard";
import Pagetitle from "../../components/pagetitle";

import serviceDB from '../../locals/services';
import Head from "next/head";

export default function Home() {
  const service_list = JSON.parse(serviceDB);
  return (
    <>
      <Head>
        <title>Our Services - ShieldedBit</title>
      </Head>
      <Header />
      <main className="md:mt-[80px]">
        <Pagetitle page='Services' description='Our Services' />
        
        <div className="min-h-[50vh] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 sm:gap-x-4 max-w-[92%] md:max-w-[70%] w-[1280px] mt-5 mb-20 mx-auto">
          { 
             service_list.map( 
               (singleService, index) => 
                  <ServiceCard 
                    key={index} 
                    image={singleService.image} 
                    title={singleService.title} 
                  />
                )
          }
        </div>
      </main>
    <Footer />
    </>
    
  )
}
