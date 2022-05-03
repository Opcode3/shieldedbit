import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Head from 'next/head'
import Pagetitle from "../../components/pagetitle";
import CourseItem from "../../components/CourseItem";
import Consulting from "../../components/consulting";

export default function Index() {

  const course_list = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ]
  return (
    <>
        <Head>
            <title>Courses - ShieldedBit</title>
        </Head>
        <Header />
        <main className="md:mt-[80px]">
            <Pagetitle page='Courses' description='Our Course List' />
            <div className="w-[94%] mx-[3%] md:w-[96%] lg:w-[80%] container my-6 md:mx-auto mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
                {course_list.map((course, index) => <CourseItem/>)}
            </div>
        </main>
        <Consulting />
        <Footer />
    </>
  )
}
