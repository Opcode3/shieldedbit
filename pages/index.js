import Head from "next/head";
import Image from "next/image";
import Consulting from "../components/consulting";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Slider from "../components/slider";
import TopicList from "../components/topicList";
import WorkList from "../components/workList";

export default function Home() {

  const service_data = [
    "Identity & Access Management (IAM)",
    "Cloud & On-Premises Security",
    "General IT or Cybersecurity Consultancy",
    "Internship & IT Career Development",
    "Staff Training"
  ]

  const why_us = [
    {
      title: 'Visibility',
      desc: 'By visualizing risky behavior and misconfigurations, we target the threat at its source, for Complete Visibility & Peace of Mind.',
      image: '123.png',
      id: 20
    },
    {
      title: 'Instance Response',
      desc: 'Likelihood of a breach is reduced, & 24/7 Detection & Response is delivered at a fraction of the cost of DIY.',
      image: 'response.png',
      id: 21
    },
    {
      title: 'Trusted Partnership',
      desc: 'We provide the capacity & capability. We deliver bespoke services at scale, with high human touch and care.',
      image: 'trust.png',
      id: 22
    },
    {
      title: 'Risk Reduction',
      desc: 'We provide the capacity & capability via Incident Response playbooks & SOAR platform & Certified Incident Handlers to contain threats. We have our clients backs!',
      image: 'risk.png',
      id: 23
    },
    {
      title: 'Assurance',
      desc: 'We work in partnership as an extension of our client\'s team, to expose patterns of illicit behavior & reduce risks.',
      image: 'assurance.png',
      id: 24
    }
  ]
  return (
    <>
      <Head>
        <title>ShieldedBit - Global Cybersecurity Consultancy Company</title>
      </Head>
      <Header />
      <main className="md:mt-[80px] max-w-[1900px] mx-auto">
        
        <Slider />
        <div className="py-16 first-letter:md:py-20 px-[2%] md:px-[10%] bg-blue-700">
          <div className="text-center w-[700px] mx-auto max-w-[98%] mb-10 md:mb-12">
            <h2 className="text-4xl font-extrabold mb-2">About ShieldedBit</h2>
            <p>
              We're a global cybersecurity consultancy company;
              with broad experience and outstanding world class services both at the industry and academia level.
             </p>
          </div>
          <div className="w-[100%] gap-y-10 items-center justify-center flex-col md:flex-row flex">
          <img 
              src='/assets/images/home/what_we_do.png'
              className="w-[70%] md:w-[calc(100%-280px)] lg:w-[calc(100%-400px)]" 
              alt="What we do"/>

          <div className="flex justify-center w-[300px] max-w-[94%] flex-col md:pl-[20px] lg:pl-[40px]">
            <h4 className="text-xl font-bold">Our Core Services</h4>
            <div>
              <TopicList dataSet={service_data} />
            </div>
          </div>

          </div>
        </div>

        <div className="py-16 first-letter:md:py-20 px-[2%] md:px-[10%]">
          <div className="text-center w-[700px] mx-auto max-w-[98%] mb-10 md:mb-12">
            <h2 className="text-4xl font-extrabold mb-2">Why Work With Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="px-[5%] sm:px-0 w-[100%] grid grid-cols-1 items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {
              why_us.map(item =>  <WorkList key={item.id} title={item.title} desc={item.desc} image={item.image} />)
            } 
          </div>
        </div>
      </main>
      <Consulting />
      <Footer />
    </>
    
  )
}
