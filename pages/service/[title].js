import { useRouter } from "next/router"
import Head from "next/head";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Consulting from "../../components/consulting";
import serviceDB from '../../locals/services';
import TopicList from "../../components/topicList";
import Image from "next/image";

export default function Index() {
  const router = useRouter();
  const { title } = router.query;

  const serviceInfo = JSON.parse(serviceDB);

  const viewed_service =  serviceInfo.filter( single_service => single_service.title == title)

  let viewImage = '';
  let viewTitle = '';
  let viewList = [];

  viewed_service.forEach( service => {
    viewList = service.lists
    viewTitle = service.title
    viewImage = service.image
  })

  // console.log(viewList);


  return (
    <>
        <Head>
            <title>{title} Service - ShieldedBit</title>
        </Head>
        <Header />
        <main className="md:mt-[90px] 2xl:mt-[90px] pb-[100px] w-full lg:w-[90%] 2xl:w-[80%] min-h-[50vh] max-w-[90rem] mx-auto">
            <div className="overflow-hidden relative flex justify-end lg:rounded-xl h-[60vh] max-h-[600px] w-full">
              <Image
                src={viewImage.trim().length > 3 ? viewImage : `/assets/images/slider/course.jpg`}
                layout='intrinsic'
                width='500px'
                height='500px'
                priority={true}
              />

              {/* <img  className="h-full float-right md:mr-20 object-right-top object-contain" alt=""/> */}
              <div className="absolute bottom-0 z-[3px] bg-gradient-to-br from-blue-600/80 via-cyan-500/80 to-black/80 w-full h-full flex justify-start items-end sm:items-center">
                <h1 className="max-w-[88%] w-[600px] text-2xl md:text-4xl text-white xl:text-5xl ml-[5%] pl-[2%] py-[5%]"> {title}</h1>
              </div>
            </div>
            <div className="pt-5 sm:w-[96%] mx-auto">
              {                
                <TopicList dataSet={viewList} /> 
              }
            </div>
            
        </main>
        <Consulting />
        <Footer />
    </>
  )
}
