
export default function TopicList({dataSet}) {
  return (
    <div>
        <ul className="px-3 py-3">
            {
                dataSet.map( (data, index) => 
                    <li className="flex py-1 mt-1 items-center" key={index}>
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span className="text-base font-light">{data}</span>
                    </li>
                )
            }
            
        </ul>
    </div>
  )
}
