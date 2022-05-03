import Link from 'next/link';

export default function Pagetitle({page, description}) {
  return (
    <div className="flex flex-col h-[340px] place-content-center place-items-center bg-gradient-to-b from-black to-blue-600 text-3xl text-white">
        <p className="text-xs"><Link href='/'><a>Home</a></Link> {`>>> ${page}`} </p>
        <h2 className="text-4xl font-bold"> {description}</h2>
    </div>
  )
}
