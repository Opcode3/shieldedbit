
export default function Support() {
  return (
    <div className="md:w-[80%] mx-auto">
        <h3></h3>
        <div className='py-2 w-full text-center grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-5 '>
          <div>
            <input type='text' className='px-4 py-3 text-sm' required placeholder='Name'/>
          </div>
          <div>
            <input type='number' className='px-4 py-3 text-sm' required placeholder='Phone number'/>
          </div>
          <div>
            <input type='email' className='px-4 py-3 text-sm' required placeholder='Email address'/>
          </div>
          <div>
            <select required className="px-4 py-3 text-sm" id="courses">
                <option value="">Select a service</option>
                <option value="Identity and Access Management">Identity &amp; Access Management (IAM)</option> 
                <option value="Cloud and on-premises security">Cloud &amp; On-Premises Security</option> 
                <option value="staff Training">Staff training &amp; general IT</option> 
                <option value="cyber security consultancy">Cyber Security Consultancy</option> 
                <option value="internship">Internship</option> 
                <option value="IT career development">IT Career Development</option>
            </select>
          </div>
        </div>
        <div className="mt-1 w-full">
            <textarea className="w-full block h-36 px-3 pt-2 text-sm" placeholder="Message..."></textarea>
        </div>
        <div className={`my-4 flex w-full justify-center`}>
            <button className='bg-blue-600 hover:bg-black w-[300px] max-w-full hover:text-blue-600 text-blue-50 text-lg font-bold transition-colors py-2 px-4 rounded'> Send Message</button>
        </div>
    </div>
  )
}
