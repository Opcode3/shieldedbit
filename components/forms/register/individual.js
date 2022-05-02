import { useState } from "react"

export default function Individual() {

  const [preferredTutor, setPreferredTutor] = useState(false);
  const [learningMode, setLearningMode] = useState(true);

  return (
    <>
        <div>
            <label htmlFor="number" className="ml-1 mb-0 text-left">Phone number</label>
            <input type='text' className='px-4 py-3' id="number" required placeholder='Phone number'/>
          </div>
          <div>
              <label htmlFor="courses" className="ml-1 mb-0 text-left">Courses</label>
              <select required className="px-4 py-3" id="courses">
                  <option value="">Select a course</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="python">Python Programming </option>
                  <option value="machine learning">Machine Learning</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Java Programming Lanaguage">Java Programming</option>
                  <option value="JavaScript">JavaScript</option>
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
            <input type='text' className='px-4 py-3' list="availLocation" id="location" placeholder='type to see available location'/>
            <datalist id="availLocation">
              <option value='Abuja, Nigeria'/>
              <option value='Accra, Ghana'/>
              <option value='Mumbia, India'/>
            </datalist> 
          </div>

          <div className={ !learningMode ? 'hidden' : '' }>
            <label htmlFor="preferredTutor" className="ml-1 mb-0 text-left">Do you have a preferred tutor?</label>
            <select onChange={ (e) => setPreferredTutor( e.target.value.trim() === "Yes")} id="preferredTutor" className="px-4 py-3">
                <option value="">Do you have a preferred tutor?</option>
                <option value="Yes">Yes</option>
                <option value="No">No (Let us assign an ideal tutor for you) </option>
            </select>
          </div>

          <div className={ (!preferredTutor || !learningMode) ? 'hidden' : '' }>
            <label htmlFor="tutor" className="ml-1 mb-0 text-left">Select Tutor (optional) </label>
            <input type='text' list="availabeTutors" className='px-4 py-3' id="tutor" placeholder='Select Tutor'/>
            <datalist id="availabeTutors">
              <option value='Joseph Emmanuel Emeka'/>
              <option value='Ernest NwaEbonyi'/>
              <option value='Wireless Oluebube'/>
            </datalist> 
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
              <option value='Help me schedule' />
            </datalist>
          </div>

          <div>
            <label htmlFor="employment" className="ml-1 mb-0 text-left">Employment  </label>
            <select required id="employment" className="px-4 py-3">
                <option value="">Select an employment status?</option>
                <option value="Student">Student</option>
                <option value="Working">Working</option>
                <option value="Unemployed">Unemployed</option>
                <option value="No">No (Let us assign an ideal tutor for you) </option>
            </select>
          </div>

          <div>
            <label htmlFor="employment" className="ml-1 mb-0 text-left">Course Expectation  </label>
            <select required id="employment" className="px-4 py-3">
                <option value="">What do you expect to get from the course?</option>
                <option value="Career_Growth">Career Growth</option>
                <option value="Career_Change">Career Change</option>
                <option value="Gain_employment">Gain Employment</option>
                <option value="Upskill">Upskill</option>
                <option value="">Others</option>
            </select>
          </div>       
    </>
  )
}
