import { useState } from "react"

export default function FaqItem({ dataSet }) {

    const [open, setOpen] = useState(false)

  return (
    <div onClick={ () => setOpen(!open)} className={` overflow-hidden rounded-lg bg-gray-50 mt-3 flex flex-col`}>
        <span className="text-xl pt-4 pb-3 pl-4 pr-2 bg-gray-400">{dataSet.headline}</span>
        <p className={`${open ? 'block' : 'hidden'} pl-5 pt-1 pr-2`}>
            {dataSet.description}
        </p>
    </div>
  )
}
