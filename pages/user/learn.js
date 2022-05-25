import Head from "next/head";
import Player from "../../components/Player";
import ContentItem from "../../components/user/contentItem";
import Layout from "../../components/user/Layout";
import LearnItem from "../../components/user/LearnItem";

export default function Learn() {

    const watch_list = [
        {},{},{},{},
        {},{},{},{}
    ]
  return (
    <>
        <Head>
            <title> title here - ShieldedBit</title>
        </Head>
        <Layout>
            <div className="bg-black flex place-content-center place-items-center text-white pb-0">
                {/* <h1 className="text-7xl">Display Movie here</h1> */}
                <Player />
            </div>
            <div className=" w-[80%] mx-auto border-b">
                <ul className="mt-3 flex p-0 gap-x-4 justify-start items-center">
                    <li className="border-b-[3px] text-sm border-black px-2 text-bold transition-all cursor-pointer py-1">My Courses</li>
                    <li className="border-b-[3px] text-sm text-gray-500 hover:text-black px-2 text-bold transition-all cursor-pointer border-transparent py-1">Archived</li>
                </ul>
                <div className="min-h-[400px] w-[90%] mx-auto pt-7 pb-3">
                    <ContentItem />
                    <ContentItem />
                    <ContentItem />
                    <ContentItem />
                    <ContentItem />

                </div>
            </div>
        </Layout>
    </>
  )
}
