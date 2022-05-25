import { useRouter } from "next/router"
import Head from "next/head";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import CourseBanner from "../../components/courseBanner";
import CourseItem from "../../components/CourseItem";
import { useState } from "react";
import TopicList from "../../components/topicList";
import CourseContent from "../../components/courseContent";
import Reviews from "../../components/reviews";
import AboutInstructor from "../../components/aboutInstructor";


export default function Index() {
  const router = useRouter();
  const [tab, setTab] = useState(0);
  const { id } = router.query;


  const course_list = [
    {}, {}, {}, {}
  ]

  const topic_list = [
    "Launch an AWS EC2 WordPress web server",
    "Create and connect to an AWS relational database server",
    "Create a NodeJS highly available and fault tolerant web application environment",
    "Upload files to AWS S3",
    "Send email with AWS SES",
    "Monitor and alert with AWS CloudWatch",
    "How to use AWS for free"
  ]
  return (
    <>
        <Head>
            <title>Courses - ShieldedBit</title>
        </Head>
        <Header />
        <main className="md:mt-[80px] w-full max-w-[90rem] mx-auto">
            <CourseBanner/>
            <div className="mt-2 mb-4 pt-5 md:w-[89%] mx-auto bg-gray-50">
                <div>
                    <div className="border-b">
                      <ul className="sm:flex gap-x-3">
                        <li className="inline-block py-2 ml-2 sm:ml-0"> <button onClick={() => setTab(0)} className={`${tab==0 && 'border-b-2 border-black'} hover:text-black text-sm text-gray-800 py-2 pl-1 pr-1`}>What you&lsquo;ll learn</button> </li>
                        <li className="inline-block py-2 ml-2 sm:ml-0"> <button onClick={() => setTab(1)} className={`${tab==1 && 'border-b-2 border-black'} hover:text-black text-sm text-gray-800 py-2 pl-1 pr-1`}>Course content</button> </li>
                        <li className="inline-block py-2 ml-2 sm:ml-0"> <button onClick={() => setTab(2)} className={`${tab==2 && 'border-b-2 border-black'} hover:text-black text-sm text-gray-800 py-2 pl-1 pr-1`}>Reviews</button> </li>
                        <li className="inline-block py-2 ml-2 sm:ml-0"> <button onClick={() => setTab(3)} className={`${tab==3 && 'border-b-2 border-black'} hover:text-black text-sm text-gray-800 py-2 pl-1 pr-1`}>Instructors</button> </li>
                      </ul>
                    </div>
                </div>

                <div className="min-h-[100px] px-3 py-3">
                  {
                    (tab == 0) ? <TopicList dataSet={topic_list} /> :
                      (tab == 1) ? <CourseContent /> :
                        (tab == 2) ? <Reviews /> : <AboutInstructor />
                  }
                </div>

            </div>

            <div className="mt-2 mb-20 pt-5 w-[86%] mx-auto">
              <h3 className="text-2xl font-medium pt-3">Get more courses on Cybersecurity</h3>
              <div className="w-[98%] mx-auto mt-6 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
                {course_list.map((course, index) => <CourseItem key={index}/>)}
              </div>
            </div>
        </main>
        {/* <Consulting /> */}
        <Footer />
    </>
  )
}
