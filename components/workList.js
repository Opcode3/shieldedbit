import {useState} from 'react'

export default function WorkList({title='missing title', desc='missing desc', image='123.png'}) {
    const [visibility, setVisibility] = useState(false);
  return (
    <div onClick={ ()=> {setVisibility(!visibility)}} className="bg-blue-50 overflow-hidden relative group cursor-pointer hover:shadow rounded min-w-[240px] px-10 flex items-center justify-between flex-col pt-14 pb-8">
        <img src={`/assets/images/home/${image}`} className="w-[70%]"/>
        <b className='text-lg mt-6 text-gray-700 uppercase group-hover:text-black text-center'> {title}</b>
        <div className={`${ visibility ? `absolute flex justify-center flex-col` : `hidden` } px-4 transition-all bg-gradient-to-br from-blue-600/80 via-cyan-500/80 to-black/80 top-0 left-0 w-full h-full`}>
            {/* Hover */}
            {/* <h5 className='text-lg font-semibold'>{title}</h5> */}
            <p className='text-sm'>{desc}</p>
        </div>    
    </div>
  )
}
