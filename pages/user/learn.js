import Player from "../../components/Player";
import ContentItem from "../../components/user/contentItem";
import React, {useState} from 'react';
import Layout from "../../components/user/Layout";
import Preload from "../../components/preload";
import { authCheck } from "../../helper/authenticate";
import { useRouter } from "next/router";
import { useUserInfo } from "../../helper/helper";


export default function Learn() {

    const [loader, setLoader] = useState(true);
    const [name, setName] = useState("");
    const router = useRouter();
    authCheck( async (user_data)=>{

        if(user_data == undefined && router.pathname.includes("/user")){
          router.push("/login")
        }else{
            // const {username} = useUserInfo(user_data);
            setName(user_data.usename);
            setLoader(false)
        }
    
      })

    const watch_list = [
        {},{},{},{},
        {},{},{},{}
    ]
  return (
    loader ? <Preload /> 
        :
        <Layout pageTitle="title here" >
            <div className="bg-black flex place-content-center place-items-center text-white pb-0">
                {/* <h1 className="text-7xl">Display Movie here</h1> */}
                <Player />
            </div>
            <div className=" w-[96%] md:w-[80%] mx-auto">
                <ul className="mt-3 flex p-0 gap-x-4 justify-start items-center">
                    <li className="border-b-[3px] text-sm border-black px-2 text-bold transition-all cursor-pointer py-1">My Courses</li>
                    <li className="border-b-[3px] text-sm text-gray-500 hover:text-black px-2 text-bold transition-all cursor-pointer border-transparent py-1">Archived</li>
                </ul>
                <div className="min-h-[400px] md:w-[96%] mx-auto pt-7 pb-3">
                    <ContentItem />

                    <ContentItem />
                    <ContentItem />
                    <ContentItem />
                    <ContentItem />
                </div>
            </div>
        </Layout>)
}
