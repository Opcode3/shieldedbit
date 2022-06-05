import Link from "next/link";

export default function Finish() {
  return (
    <div className="lg:bg-gray-200 mx-auto mt-[20vh] rounded-lg max-w-[400px] flex flex-col items-center justify-center px-6 py-7">
        <span>
            <svg className="w-24 stroke-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </span>
        <p>
            Registration was successful
        </p>
        <Link href='/user'><a className="bg-blue-600 mt-3 hover:bg-black w-fit hover:text-blue-600 text-blue-50 text-sm font-bold transition-colors py-2 px-4 rounded"> Go to Dashboard</a></Link>
    </div>
  )
}
