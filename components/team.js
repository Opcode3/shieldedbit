import Image from "next/image";

export default function Team({data}) {
  return (
    <div className="hover:shadow-lg cursor-pointer w-[94%] sm:w-[340px]  overflow-hidden  transition-all hover:bg-white rounded-lg"> {/* Team Cover*/}
        <div className=" flex pt-8 items-center justify-center">
            <Image src={`/assets/images/team/${data.img}`} className='rounded-3xl' width={260} height={260} alt={data.name}/>
        </div>
        <h5 className="font-medium mt-2 text-xl px-2 text-center pt-2 pb-1">{data.name}</h5>
        <p className="w-[90%] pb-8 mx-auto">{data.description}</p>
  </div>
  )
}
