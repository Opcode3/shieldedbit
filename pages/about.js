import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Link from 'next/link';
import Head from "next/head";
import Consulting from "../components/consulting";
import Team from "../components/team";

export default function About() {

  const teamInfo = [
    {name: 'Dr. Francis Nwebonyi', img:'1.jpg', description:'Dr. Francis has a PhD in Cybersecurity from University of Porto, Portugal. He has worked for big names in the industry, and currently doubles as a research Engineer at University College Dublin - Ireland, and a lead consultant at ShieldedBit.'}
    ,{name: 'Hugo Pereira', img:'2.jpg', description:'Pereira is a trained Engineer at Instituto Superior de Engenharia do Porto, Portugal. He is an IAM DevOps Systems Engineer at Kuehne+Nagel, Portugal. He is one of our Identity and Access Management consultants.'}
    ,{name: 'Dr. Elias Eze', img:'3.jpg', description:'Dr. Elias is a network and cybersecurity expert with a PhD from the University of Bedforshire, UK. He is a lecturer at the University of East London, and one of our networking & cybersecurity consultants.'}
    ,{name: 'Prof. Ndubuisi Ekekwe', img:'4.jpg', description:'Prof. Ndubuisi, Lead Faculty of Tekedia Institute, Inventor, &amp; Harvard Business Review writer USA.'}
    ,{name: 'Mr. Steve Taylor', img:'5.jpg', description:'Mr. Steve, CEO of Tabass LTD, United Kingdom/Canada.'}
  ]
  return (
    <>
      <Head>
        <title>About us - ShieldedBit</title>
      </Head>
      <Header />
      <main className="md:mt-[80px]">
        <div className="flex flex-col h-[340px] place-content-center place-items-center bg-gradient-to-b from-black to-blue-600 text-3xl text-white">
          <p className="text-xs"><Link href='/'><a>Home</a></Link> {'>>>'} About ShieldedBit</p>
          <h2 className="text-4xl font-bold"> About Company</h2>
        </div>
        <div className="pt-6 pb-12 mx-auto">
          
          <div className="max-w-7xl mx-auto w-[90%] lg:w-[80%]">
            <h2 className="text-3xl py-4 text-center md:w-3/4 mx-auto font-bold">At ShieldedBit, we are kin to make information exchange secured and affordable for every individual and corporate organization</h2>
            <p className="leading-8">
              ShieldedBit is a global Cybersecurity consultancy company. We have the best hands for the job, with broad experience at the industry and academia, and are ready to give you outstanding world class services.
            </p>
            <p className="leading-8 pt-4 mb-6">
              Contact us for your Privileged/Identity Access Management solutions. If there are loopholes in this area, it would be near impossible to secure any IT system. We are also waiting to help you with other cybersecurity needs such as vulnerability assessment, cloud migration, corporate training, among others. We are open to collaboration in research and development of new Cybersecurity and Digital Forensic tools.
            </p>
          </div>

          <div className="py-14 my-12 grid grid-cols-1 bg-blue-50 md:grid-cols-3">
            <span className="flex flex-col py-6 place-items-center">
              <h4 className="text-7xl font-extrabold text-blue-500">2012</h4>
              <p className="text-sm">When it all stated</p>
            </span>
            <span className="flex flex-col py-6 md:border-x place-items-center">
              <h4 className="text-7xl font-extrabold text-blue-500">100%</h4>
              <p className="text-sm">Kin to quality service delivery</p>
            </span>
            <span className="flex flex-col py-6 place-items-center">
              <h4 className="text-7xl font-extrabold text-blue-500">120+</h4>
              <p className="text-sm">Members/partners across the globe</p>
            </span>
          </div>

          <div className="max-w-7xl mx-auto w-[90%] lg:w-[86%] py-3">
            <h2 className="text-3xl mb-24 text-center font-bold">
              Meet some of our consultant
              <p className="text-sm pt-3 font-light lg:w-2/4 mx-auto">Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
            </h2>
            <div className="mt-6 grid place-content-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5">
              
              {
                teamInfo.map(
                  (memberInfo, index) => <Team key={index} data={memberInfo} />
                )
              }

            </div>
          </div>
          
        </div>

      </main>
      <Consulting />
      <Footer />
    </>
    
  )
}
