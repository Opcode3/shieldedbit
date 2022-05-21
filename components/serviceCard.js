import Link from 'next/link';
export default function ServiceCard({ description='', image = '/assets/images/slider/course.jpg', title='Identity & Access Management' }) {
  return (
      <Link href={`/service/${title}`}>
        <div className="min-h-[450px] hover:shadow-lg cursor-pointer  hover:rounded-b-lg overflow-hidden my-2 grid relative max-w-full">
            <div className="bg-red-400">
                <img src={image.trim().length > 0 ? image : '/assets/images/slider/course.jpg'} className="h-full object-cover object-center"   alt={title}/>
            </div>
            <div className="bg-black/60 text-blue-50 transition ease-linear hover:text-gray-900 hover:bg-gray-300/80 absolute top-0 flex flex-col justify-between w-full left-0 h-full">
                <h5 className="text-3xl font-medium p-5 pt-8">{title}</h5>
                <p className={`p-5 text-sm w-[94%] ${ description.trim().length >= 2 ? 'block' : 'hidden'}`}>
                    <span className="block text-base font-medium">Description</span>
                    {description}
                </p>
                <p className={`p-5 animate-pulse ${ description.trim().length < 2 ? 'block' : 'hidden'}`}>
                    {/* Click to read more */}
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 hover:text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                </p>
            </div>
        </div>
      </Link>
    
  )
}