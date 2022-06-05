import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect} from 'react'
import PasswordField from '../components/forms/PasswordField';
import Finish from '../components/forms/register/finish'
import Alert from '../components/alert';
export default function Register() {

  const [level, setLevel] = useState(0);
  
  const [password, setPassword] = useState("123567788");
  const [name, setName] = useState("Joseph Emmanuel");
  const [email, setEmail] = useState("opcode3@gmail.com");
  const [phone, setPhone] = useState("08159792686");

  const [loading, setLoading] = useState(false);



  const [error, setError] = useState("");
  const [errorLevel, setErrorLevel] = useState(0);
  const [alert, setAlert] = useState("");




  const date = new Date();

  const registerHandler = (e) =>{
    e.preventDefault();
    setLoading(true)

    const registerUser = async () => {

      let form_data = new FormData();
      form_data.append('email', email);
      form_data.append('phone', phone);
      form_data.append('password', password);


      fetch('https://passbuttons.com/fnn/registration', {
        method: 'POST',
        body: form_data
      }).then(function(response){
          response.json().then(function(data) {

              setLoading(false)
              if(data.code == 200){
                console.log('Success');
                setLevel(1)
              }else{
                console.log(data)
                setAlert(data.message)
              }

          });
      }).catch(function(error) {
          console.log('Fetch Error:', error);
          setLoading(false)
          setAlert('Unable to make request. Check your internet connection')

      });


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
          <header className='flex pr-[3%] pl-[2%] md:px-[6%] pb-3 pt-6 justify-between items-center'>
            <Link href="/"><a className={`w-12 ${level == 1 && 'hidden'}`}><img src='/assets/images/logo-black.png' alt='shieldedbit logo' /></a></Link>
            <span className={`cursor-pointer lg:bg-gray-700 ${level != 1 && 'hidden'} ml-4 mt-4 md:mt-0 md:ml-0`} onClick={ ()=> setLevel(0)}>
            <svg className="w-7 h-7 bg-white lg:hover:-translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </span>
            <span className='text-sm'>
              <em className='hidden sm:inline'>Already have an account? </em>
              <Link href="/login"><a className='py-2 px-4 ml-2 bg-blue-600 hover:bg-transparent hover:text-blue-600 transition-colors text-white border-blue-600 border border-solid rounded'>Log In</a></Link>
            </span>
          </header>
          <main className='container mx-auto mt-12 flex flex-col items-center pb-14'>
            <form onSubmit={(e) => registerHandler(e)} className='w-[460px] max-w-[96%] sm:max-w-[94%] px-2 mb-6 grid place-items-center '>
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
                  <button className='bg-blue-600 hover:bg-black w-full hover:text-blue-600 text-blue-50 text-lg font-bold transition-colors py-2 px-4 rounded'> Next</button>
              </div>
            </form>
            <h1> { loading && 'Registering data '}</h1>
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
