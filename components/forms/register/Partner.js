import { useState } from "react"

export default function Partner() {

  return (
    <>
      <div className='py-2 w-full text-center grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-5 '>
        <div>
            <label htmlFor="courses" className="ml-1 mb-0 text-left">Gender</label>
            <select required className="px-4 py-3" id="courses">
                <option value="">Select gender</option>
                <option value="Male">Male</option> 
                <option value="Female">Female</option> 
            </select>
        </div>
        <div>
            <label htmlFor="courses" className="ml-1 mb-0 text-left">Date of Birth</label>
            <input type='date' className='px-4 py-3' id="dob" />
        </div>


        <div>
          <label htmlFor="location" className="ml-1 mb-0 text-left">Address </label>
          <input type='text' className='px-4 py-3' id="address" placeholder='Enter your business address'/>
        </div>

        <div>
          <label htmlFor="location" className="ml-1 mb-0 text-left"> Business/Company Name </label>
          <input type='text' className='px-4 py-3' id="qualification" placeholder='Enter your business/company name'/>
        </div>

        <div>
          <label htmlFor="location" className="ml-1 mb-0 text-left"> Video Link of available facilities </label>
          <input type='text' className='px-4 py-3' id="qualification" placeholder='Enter a video link of available facilities'/>
        </div>


        <div>
          <label htmlFor="duration" className="ml-1 mb-0 text-left">Main Business </label>
          <input type='text' className='px-4 py-3' id="duration" placeholder='e.g IT services, Academy...'/>
        </div>  
      </div>

      <div className="mt-1 w-full">
          <label htmlFor="employment" className="ml-1 mb-0 text-left">More information about business  </label>
          <textarea className="w-full block h-48 px-3 pt-2" placeholder="Tell us more about your business..."></textarea>
      </div>     
    </>
   
  )
}
