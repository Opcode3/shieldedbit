import Link from 'next/link';
import { useState } from 'react';
import PasswordField from '../PasswordField';
import Corporate from './Corporate';
import Individual from './individual';
import Partner from './Partner';
import Tutor from './Tutor';
export default function Step2({ setLevel, accountType }) {
  const [active, setActive] = useState(1);
  return (
    <form onSubmit={(e) => { setLevel( accountType == 1 ? 2 : 3 )}} className='w-[780px] max-w-[96%] sm:max-w-[94%] px-2 mb-6 grid place-items-center '>
        <h2 className='text-4xl font-bold'> 
            { 
              accountType == 0 ? 'User' : 
                accountType == 1 ? 'Corporation' : 
                accountType == 2 ? 'Tutor' : 'Partner'
            } Registration Form</h2>
        <p className='mb-6'>Fill the form correctly to continue with the registration process...</p>
        <div className='w-full block my-2 text-base'>
          Personal Information
        </div>
        <div className='py-2 w-full text-center grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-5 '>
          <div>
            <input type='text' className='px-4 py-3' required placeholder={ accountType == 1 ? 'Corporation Name' : 'Name' }/>
          </div>
          <div>
            <input type='email' className='px-4 py-3' required placeholder='Email'/>
          </div>

          <div>
            <PasswordField />
          </div>

          <div>
              <PasswordField confirm={`link to main password field`}/>
          </div>
        </div>
        {
          accountType > 0 && (<>
                <div className='w-full block my-2 text-base'>
                  Account Type Information
                </div>
                {/* <div className='py-2 w-full text-center grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-5 '> */}
                  {
                        accountType == 1 ? <Corporate /> :
                        accountType == 2 ? <Tutor /> : <Partner />
                  }
                  
                {/* </div> */}
          </>)
        }
        <div className={`${ active == -1 ? 'hidden' : 'flex'} my-4 block w-full justify-end`}>
            <button className='bg-blue-600 hover:bg-black w-fit hover:text-blue-600 text-blue-50 text-lg font-bold transition-colors py-2 px-4 rounded'> Next</button>
        </div>
    </form>
  )
}
