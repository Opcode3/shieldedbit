import { useState } from "react"

export default function Corporate() {

  const [learningMode, setLearningMode] = useState(true);

  return (
    <>
    
    <div className='py-2 w-full text-center grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-5 '>
          <div>
              <label htmlFor="courses" className="ml-1 mb-0 text-left">Service</label>
              <select required className="px-4 py-3" id="courses">
                  <option value="">Select a service</option>
                  <option value="Identity and Access Management">Identity &amp; Access Management (IAM)</option> 
                  <option value="Cloud and on-premises security">cloud &amp; on-premises security</option> 
                  <option value="staff Training">staff training, general IT</option> 
                  <option value="cyber security consultancy">cyber security consultancy</option> 
                  <option value="internship">Internship</option> 
                  <option value="IT career development">IT career development</option>
              </select>
          </div>
          <div>
              <label htmlFor="courses" className="ml-1 mb-0 text-left">Level</label>
              <select required className="px-4 py-3" id="courses">
                  <option value="">Select a Level</option>
                  <option value="Basic">Basic</option>
                  <option value="Intermediate">Intermediate </option>
                  <option value="Advance">Advance</option>
              </select>
          </div>

          <div>
            <label htmlFor="learningMode" className="ml-1 mb-0 text-left">Learning Mode</label>
            <select onChange={e => {setLearningMode( e.target.value === 'online')}} required id="learningMode" className="px-4 py-3">
                {/* <option value="">Select a learning mode</option> */}
                <option value="online">Online </option>
                <option value="offline">Offline</option>
            </select>
          </div>

          <div className={ learningMode ? 'hidden' : '' }>
            <label htmlFor="location" className="ml-1 mb-0 text-left">Location (optional) </label>
            <input type='text' className='px-4 py-3' id="location" placeholder='type to see available location'/>
            
          </div>


          <div>
            <label htmlFor="duration" className="ml-1 mb-0 text-left">Desired Duration in days (optional) </label>
            <input type='text' list="durationPerDay" className='px-4 py-3' id="duration" placeholder='Select your desired duration in days'/>
            <datalist id="durationPerDay">
              <option value='1-2 hours' />
              <option value='3-4 hours' />
              <option value='5-7 hours' />
              <option value='8-9 hours' />
              <option value='10+ hours' />
            </datalist>
          </div>  
    </div>

    <div className="mt-1 w-full">
            <label htmlFor="employment" className="ml-1 mb-0 text-left">More Information on Training  </label>
            <textarea className="w-full block h-48 px-3 pt-2" placeholder="Describe what exactly your company need to be trained on..."></textarea>
          </div>     
    </>
   
  )
}
