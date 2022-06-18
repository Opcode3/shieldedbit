import React, {useState} from 'react';
import Layout from "../../components/user/Layout";
import Preload from "../../components/preload";
import { authCheck } from "../../helper/authenticate";
import { useRouter } from "next/router";
import LearnItem from "../../components/user/LearnItem";

export default function Learning() {
    const [loader, setLoader] = useState(true);
  const router = useRouter();

    authCheck( async (user_data)=>{

        if(user_data == undefined && router.pathname.includes("/user")){
          router.push("/login")
        }else{
            console.log(user_data)
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
    <Layout pageTitle='My learnings'>
        <div className="bg-black text-white pt-14 pb-0 px-[11%]">
            {/* Ban Menu */}
            <h3 className="text-3xl font-serif"> My Learning</h3>
            <ul className="mt-3 flex p-0 gap-x-4 justify-start items-center">
                <li className="border-b-[6px] transition-all cursor-pointer py-2 text-sm text-white">My Courses</li>
                <li className="border-b-[6px] transition-all cursor-pointer border-transparent py-2 text-sm text-white">Archived</li>
            </ul>
        </div>
        <div className=" px-[6%] lg:px-[11%] pb-40 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-4 py-6 mx-auto">
            {
                watch_list.map( (learn, key) => <LearnItem  key={key}/>)
            }
            
        </div>
    </Layout>
  )
}
