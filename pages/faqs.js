import Head from "next/head";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Pagetitle from "../components/pagetitle";
import Consulting from "../components/consulting"
import FaqItem from "../components/faqItem";

export default function Faqs() {

  const faqs_data = [
    {id: 1, headline:'headline 1', description:'description 1'},
    {id: 2, headline:'headline 2 ', description:'description 2'},
    {id: 3, headline:'headline 3', description:'description 3'},
    {id: 4, headline:'headline 4', description:'description 4'}
  ]
  return (
    <>
      <Head>
          <title>FAQs - ShieldedBit</title>
      </Head>
      <Header />
      <main className="md:mt-[80px]">
          <Pagetitle page='FAQs' description='Frequently Asked Questions' />
        <div className="min-h-[40vh] pb-24">

            <ul className=" w-[800px] mt-7 mx-auto">
              {
                faqs_data.map( faq => <FaqItem dataSet={faq} key={faq.id} />)
              }
            </ul>

        </div>
      </main>
      <Consulting />
      <Footer />
    </>
    
  )
}
