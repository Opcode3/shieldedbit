import {useState} from 'react'

export default function PasswordField({ password, setPassword}) {

  const [passwordView, setPasswordView] = useState(true);

  return (
    <div className='flex items-center justify-end'>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type={ passwordView ? 'password' : 'text'} className='px-4 py-3' required placeholder='Password'/>
        <i className='absolute pr-3' onClick={()=> setPasswordView(!passwordView) }>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
        </i>
    </div>
  )
}
