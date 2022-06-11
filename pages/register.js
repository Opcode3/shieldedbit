import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect} from 'react'
import PasswordField from '../components/forms/PasswordField';
import Finish from '../components/forms/register/finish'
import Alert from '../components/alert';
import { postRequest } from '../helper/request';
import Image from 'next/image';
import img_logo from '../public/assets/images/logo-black.png'
export default function Register() {

  const [level, setLevel] = useState(0);
  
  const [password, setPassword] = useState("123567788");
  const [name, setName] = useState("Joseph Emmanuel");
  const [email, setEmail] = useState("opcode3@gmail.com");
  const [phone, setPhone] = useState("08159792686");

  const [requestStatus, setRequestStatus] = useState(false);



  const [error, setError] = useState("");
  const [errorLevel, setErrorLevel] = useState(0);
  const [alert, setAlert] = useState("");




  const date = new Date();

  const registerHandler = (e) =>{
    e.preventDefault();
    setRequestStatus(true)

    const registerUser = async () => {

      const fullname = name.split(" ");

      let form_data = new FormData();

      form_data.append('firstname', fullname[0]);
      form_data.append('lastname', fullname[1]);
      form_data.append('email', email);
      form_data.append('phone', phone);
      form_data.append('password', password);

      postRequest(
        'https://passbuttons.com/fnn/registration', form_data,
        (data)=>{
            setLoading(false)
            if(data.code == 200){
              console.log('Success');
              setLevel(1)
            }else{
              console.log(data)
              setAlert(data.message)
            }
        },
        (error)=>{
          console.log('Fetch Error:', error);
          setRequestStatus(false);
          setAlert('Unable to make request. Check your internet connection');
        }

      )

    }

    registerUser();

   
  }

  useEffect(() => {
    if(name.trim().length > 3 && name.trim().split(" ").length != 2){
      setErrorLevel(0)
      setError("Only surname and lastname is required")
    }else if(!email.includes('@') && email.trim().length > 3){
      setErrorLevel(1)
      setError("A valid email is required")
    }else{
      setErrorLevel(0)
      setError("")
    }
  }, [name, email]);

  // Note: level {0: userType, 1:Register, 2:UserTypeForm, 3:finish}

  return (
    <>
      <Head>
        <title>Register - ShieldedBit</title>
      </Head>

      {
        level == 0 ?
          <>
          <header className='flex pr-[3%] pl-[2%] md:px-[6%] pb-3 pt-4 justify-between items-center'>
            <Link href="/"><a className={`w-12 bg-red-400 ${level == 1 && 'hidden'}`}>
              <Image src={img_logo} priority alt='shieldedbit logo' />
              </a></Link>
            <span className={`cursor-pointer lg:bg-gray-700 ${level != 1 && 'hidden'} ml-4 mt-4 md:mt-0 md:ml-0`} onClick={ ()=> setLevel(0)}>
            <svg className="w-7 h-7 bg-white lg:hover:-translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </span>
            <span className='text-sm'>
              <em className='hidden sm:inline'>Already have an account? </em>
              <Link href="/login"><a className='py-2 px-4 ml-2 bg-blue-600 hover:bg-transparent hover:text-blue-600 transition-colors text-white border-blue-600 border border-solid rounded'>Log In</a></Link>
            </span>
          </header>
          <main className='container mx-auto mt-12 flex flex-col items-center pb-14'>
            <form onSubmit={(e) => registerHandler(e)} className='w-[440px] max-w-[96%] sm:max-w-[94%] px-2 mb-6 grid place-items-center '>
              <h2 className='text-3xl md:text-4xl font-bold mb-1 py-1'>User Registration Form</h2>
              <p className='mb-6'>Fill the form correctly to continue with the registration process...</p>
            
              <div className='py-2 w-full text-center grid grid-cols-1 gap-y-3 gap-x-5 '>
                <div>
                  <input type='text' value={name} onChange={(e)=> setName(e.target.value)} className='px-4 py-3' required placeholder="Name"/>
                  {
                    errorLevel == 0 && error.trim().length > 4 ? <div className='flex pt-2 px-3 text-red-400'>**** {error}</div> : ''
                  }
                </div>
                <div>
                  <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)}  className='px-4 py-3' required placeholder='Email'/>
                  {
                    errorLevel == 1 && !error.includes('@') ? <div className='flex pt-2 px-3 text-red-400'>**** {error}</div> : ''
                  }
                </div>
                <div>
                  <input type='number' value={phone} onChange={(e)=> setPhone(e.target.value)}  className='px-4 py-3' required placeholder='Phone number'/>
                </div>
                <div>
                  <PasswordField password={password} setPassword={setPassword}/>
                </div>
              </div>
              { alert.trim().length > 4 ? <Alert toggle={setAlert} message={alert} /> : ''}

              <div className={`justify-center flex my-4 w-full`}>

                <button disabled={requestStatus}  className={ `${ requestStatus ? 'cursor-not-allowed bg-blue-300':'bg-blue-600 hover:bg-black hover:text-blue-600' }  inline-flex justify-center  text-lg font-bold transition ease-in-out duration-150 w-full py-3 rounded`}> 
                  <svg className={`${ requestStatus ? 'inline-block':'hidden' } animate-spin -ml-1 mr-3 h-5 w-5 text-black`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  Register
                </button>
              </div>
            </form>
            {/* <h1> { loading && 'Registering data '}</h1> */}
          </main>
          <footer className="h-[80px] md:h-[160px] pb-[30px] flex items-end justify-center font-light text-sm">
              CopyRight &copy; {date.getFullYear()} - ShieldedBit.
          </footer>
          </>
          :
          <Finish />
      }
    </>
  )
}
