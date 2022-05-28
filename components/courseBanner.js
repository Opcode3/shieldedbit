import Link from 'next/link'
export default function CourseBanner() {
  return (
    <div className="relative md:mt-24 overflow-hidden md:shadow-xl flex flex-col items-center md:min-h-[350px] min-h-[400px] md:max-h-[460px] mx-auto md:w-[94%] md:rounded-xl">
        <div className='object-cover object-left-top block h-full'>
            <img src='/assets/images/slider/course.jpg' className='w-full' alt=''/>
        </div>
        <div className='absolute flex flex-col items-center bg-gradient-to-br from-blue-600/80 via-cyan-500/80 to-black/80 justify-center gap-y-2 h-full w-full'>
            <h4 className="uppercase text-blue-50 text-sm font-medium">ShieldedBit Course Program</h4>
            <h2 className='text-2xl md:text-5xl text-blue-50 w-11/12 md:w-9/12 text-center font-bold'>Front End Web Developer</h2>
            <p className='text-blue-50 w-11/12 md:w-9/12 text-center mx-auto font-medium'>Learn how to build high quality websites and dynamic applications to create stunning user experiences for the web.</p>
            <h2 className='text-center text-lg md:text-2xl text-blue-50 mt-3 md:mt-6 font-medium'>Course Value: <strong>$400,000.00</strong></h2>
            <div className='flex flex-col sm:flex-row gap-2 md:mt-1 overflow-hidden'>
                <Link href='/'>
                    <a className='py-3 px-7 uppercase text-center text-sm rounded bg-blue-50 hover:bg-blue-100 text-cyan-800'>Download Syllabus</a>
                </Link>
                <Link href='/'>
                    <a className='py-3 px-7 uppercase text-center text-sm rounded text-blue-50 hover:bg-cyan-900 bg-cyan-700'> Enroll Now</a>
                </Link>
            </div>
        </div>
        
       
    </div>
  )
}
