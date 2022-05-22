import Link from "next/link";


export default function LearnItem() {
  return (
    <div className="block">
        <div className="w-full h-fit rounded overflow-hidden" >
            <img src='/assets/images/slider/course.jpg' className="h-full object-cover object-center" alt=''/>
        </div>
        <div className="grid grid-cols-1 px-2">
          <h4 className="pt-2 pb-[2px] text-sm">Learning Python for Data Analysis and Visualization</h4>
          <p className="text-xs pb-2 text-gray-800">Joseph Emmanuel, Giembs Consultancy</p>
          <Link href='/'><a className="bg-blue-600 hover:bg-black hover:text-blue-600 text-sm font-light transition-colors py-1 px-3 rounded w-fit">Start learning</a></Link>
        </div>
    </div>
  )
}
