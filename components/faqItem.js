import { useState } from "react"

export default function FaqItem({ dataSet }) {

    const [open, setOpen] = useState(false)

  return (
    <div className={` overflow-hidden flex flex-col p-1`}>
        <span onClick={ () => setOpen(!open)}  className="rounded select-none font-medium text-base flex items-center cursor-pointer pt-2 shadow pb-2 pl-2 md:pl-4 pr-2 bg-blue-50/30 hover:bg-blue-100/80 ">
          <button className="p-1 pr-2 sm:p-2">
            <svg className={`w-4 h-6 ${open && 'hidden'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
            <svg className={`w-4 h-6 ${!open && 'hidden'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
          </button>
          {dataSet.headline}
        </span>
        <p className={`${open ? 'block' : 'hidden'} pl-4 pt-3 font-light text-sm`}>
            {dataSet.description}
        </p>
    </div>
  )
}
