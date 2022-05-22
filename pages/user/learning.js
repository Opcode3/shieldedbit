import Head from "next/head";
import Layout from "../../components/user/Layout";
import LearnItem from "../../components/user/LearnItem";

export default function Learning() {

    const watch_list = [
        {},{},{},{},
        {},{},{},{}
    ]
  return (
    <>
        <Head>
            <title>My Learnings - ShieldedBit</title>
        </Head>
        <Layout>
            <div className="bg-black text-white pt-14 pb-0 px-[11%]">
                {/* Ban Menu */}
                <h3 className="text-3xl font-serif"> My Learning</h3>
                <ul className="mt-3 flex p-0 gap-x-4 justify-start items-center">
                    <li className="border-b-[6px] transition-all cursor-pointer py-2 text-sm text-white">My Courses</li>
                    <li className="border-b-[6px] transition-all cursor-pointer border-transparent py-2 text-sm text-white">Archived</li>
                </ul>
            </div>
            <div className=" px-[6%] lg:px-[11%] grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-4 py-6 mx-auto">
                {
                    watch_list.map( (learn, key) => <LearnItem  key={key}/>)
                }
                
            </div>
        </Layout>
    </>
  )
}
