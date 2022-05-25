import { useRouter } from "next/router"
import Head from "next/head";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Consulting from "../../components/consulting";
import serviceDB from '../../locals/services';
import TopicList from "../../components/topicList";

export default function Index() {
  const router = useRouter();
  const { title } = router.query;

  const serviceInfo = JSON.parse(serviceDB);

  // console.log( serviceInfo.filter( single_service => single_service.title == title) );

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
        <main className="md:mt-[80px] 2xl:mt-[90px] pb-[100px] w-full min-h-[50vh] max-w-[90rem] mx-auto">
            <div className="overflow-hidden 2xl:rounded-xl relative max-h-[600px] h-fit w-full">
              <img src={viewImage.trim().length > 3 ? viewImage : `/assets/images/slider/course.jpg`} className="h-full float-right md:mr-20 object-right-top object-contain" alt=""/>
              <div className="absolute bottom-0 z-[3px] bg-blue-900/60 w-full h-full flex justify-start items-end">
                <h1 className="max-w-[100%] w-[800px] text-2xl md:text-4xl text-white xl:text-5xl pl-[2%] py-[5%]"> {title}</h1>
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
