import Head from "next/head";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Pagetitle from "../components/pagetitle";
import Consulting from "../components/consulting"
import FaqItem from "../components/faqItem";

export default function Faqs() {

  const faqs_data = [
    {id: 1, headline:'What should I do when I need help?', description:'The easiest way to reach us is to “Chat Support” under the contact section of the app. You can also send an email to support@shieldedbit.com'},
    {id: 2, headline:'What should I do when I need help?', description:'The easiest way to reach us is to “Chat Support” under the contact section of the app. You can also send an email to support@shieldedbit.com'},
    {id: 3, headline:'What should I do when I need help?', description:'The easiest way to reach us is to “Chat Support” under the contact section of the app. You can also send an email to support@shieldedbit.com'},
    {id: 4, headline:'What should I do when I need help?', description:'The easiest way to reach us is to “Chat Support” under the contact section of the app. You can also send an email to support@shieldedbit.com'},
    {id: 5, headline:'What should I do when I need help?', description:'The easiest way to reach us is to “Chat Support” under the contact section of the app. You can also send an email to support@shieldedbit.com'},
  
  ]
  return (
    <>
      <Head>
          <title>FAQs - ShieldedBit</title>
      </Head>
      <Header />
      <main className="md:mt-[80px]">
          <Pagetitle page='FAQs' description="We’ve got answers to your questions."/>
        <div className="min-h-[40vh] pb-12 pt-2 sm:pt-6">

            <ul className=" max-w-[98%] w-[800px] mt-7 mx-auto">
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
