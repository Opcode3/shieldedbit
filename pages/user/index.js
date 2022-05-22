import Head from "next/head";
import Link from "next/link";
import CourseItem from "../../components/CourseItem";
import Layout from "../../components/user/Layout";

export default function Dashboard() {

  const course_list = [
    {}, {}, {}, {},
    {}, {}, {}, {}
  ]

  return (
    <>
        <Head>
            <title>User Dashboard - ShieldedBit</title>
        </Head>
        <Layout>
          <div className="w-full md:px-[3%] lg:px-[8%] md:h-[400px] bg-blue-400 flex flex-col-reverse md:flex-row items-center overflow-hidden md:justify-between ">
            <div>
              <div className="shadow-2xl w-72 mb-10 md:mb-0 rounded px-4 py-3 bg-white">
                <h4 className="text-xl">Welcome back !User</h4>
                <p className="text-sm font-light pt-1">
                  We would recommend that you stay consistent with your <Link href='/user/learning'><a className="text-blue-500">learning</a></Link>. 
                  Enjoy your stay with us!
                </p>
              </div>
            </div>
            <img src='/assets/images/services/identity.png' className=" object-contain w-[60%] md:w-[40%]" alt=''/>
          </div>
          <div className="mt-2 mb-20 pt-5 w-[86%] mx-auto">
              <h3 className="text-2xl font-medium pt-3">Most sorted courses</h3>
              <div className="w-[98%] mx-auto mt-6 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
                {course_list.map((course, index) => <CourseItem key={index}/>)}
              </div>
            </div>
        </Layout>
    </>
  )
}
