import Link from "next/link";
import Rating from "./rating";


export default function CourseItem() {
  return (
    // <Link href={{ pathname:'courses', query: {id: 1} }} ><a>
    <Link href={`/courses/${120}`} ><a>
        <div className="w-full h-fit rounded overflow-hidden" >
            <img src='/assets/images/slider/course.jpg' className="h-full object-cover object-center" alt=''/>
        </div>
        <div className="grid grid-cols-1">
          <h4 className="py-2">Learning Python for Data Analysis and Visualization</h4>
          <p className="text-xs text-gray-700">Joseph Emmanuel, Giembs Consultancy</p>
          <span className="py-1 text-lg font-medium"> <Rating/> </span>
          <span className="text-normal font-medium">$40.00 <del className="pl-1 text-gray-600 text-sm">$120.00</del> </span>
        </div>
    </a></Link>
  )
}
