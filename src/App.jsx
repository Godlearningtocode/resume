import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [expandEducationSection, setExpandEducationSection] = useState(false);
  const [addEducation, setAddEducation] = useState(false)
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("")
  const [address, setAddress] = useState("");
  const [school, setSchool] = useState('');
  const [degree, setdegree] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [educationLocation, setEducationLocation] = useState('')

  return (
    <>
      <div id="mainSection">
        <div id="leftSide">
          <div id="customSection">
            <div id="contentContainer">
              <img src="" alt="Content Page" id="contentImage" />
              <p id="contentText">Content</p>
            </div>
            <div id="customizeContainer">
              <img src="" alt="Customize" id="customizeImage" />
              <p id="customizeText">Customize</p>
            </div>
          </div>
          <div id="inputSection">
            <div id="displayInputButtons">
              <div id="cleanResume">Clear Resume 🗑️</div>
              <div id="loadResume">Load Resume ✔️</div>
            </div>
            <div id="inputContainer">
              <div id="personalInput">
                <h2>Personal Details</h2>
                <form id='personalForm'>
                  <div className='fullNameInput'>
                      <label htmlFor='fullName'>Full Name:</label>
                      <input id='fullName' type='text' required name='fullName' value={fullName} placeholder='First and Last name'/>
                    </div>
                    <div id="emailInput">
                      <label htmlFor='email'>Email:</label>
                      <input id='email' type='email' required name='email' value={email} placeholder='Enter Email'/>
                    </div>
                    <div id="phoneNumberInput">
                      <label htmlFor='phoneNumber'>Phone Number:</label>
                      <input id='phoneNumber' type='tel' required name='phoneNumber' value={phoneNumber} placeholder='Enter Phone Number'/>
                    </div>
                    <div id="adressInput">
                      <label htmlFor='address'>Address:</label>
                      <input id='address' type='text' required name='address' value={address} placeholder='Enter City and Country'/>
                    </div>
                </form>
              </div>
              <div id="educationInput">
                <button className='expandButton' onClick={ChangeState}>
                  <h2>Education</h2>
                  <img src="src/assets/down-arrow.png" alt="" className="expandImage" width={50+'px'} height={50+'px'} />
                </button>
                {expandEducationSection ? <button id='addEducationButton' onClick={ChangeEducationState}>+ Education</button> : ''}
                {addEducation ? <AddEducationComponent/> : ''}
              </div>
            </div>
          </div>
        </div>
        <div id="rightSide">
          <div id="displaySection"></div>
        </div>
      </div>
    </>
  )

  function ChangeState() {
    expandEducationSection ? setExpandEducationSection(false) : setExpandEducationSection(true)
  }

  function ChangeEducationState() {
    addEducation ? setAddEducation(false) : setAddEducation(true)
  }

  function AddEducationComponent() {
    return (
      <div id="educationInput">
        <form id='educationForm'>
          <div id='schoolInput'>
            <label htmlFor='school'>School:</label>
            <input id='school' type='text' name='school' value={school} placeholder='Enter School or University' />
          </div>
          <div id='degreeInput'>
            <label htmlFor='degree'>Degree:</label>
            <input id='degree' type='text' name='degree' value={degree} placeholder='Enter Degree or field of study' />
          </div>
          <div id='timeinput'>
            <div id='timeLeftSide'>
              <label htmlFor='startDate'>Start Date:</label>
              <input id='startDate' type='text' name='startDate' value={startDate} placeholder='Enter Start Date' />
            </div>
            <div id="timeRightSide">
              <label htmlFor='endState'>End State:</label>
              <input id='endDate' type='text' name='endDate' value={endDate} placeholder='Enter End Date' />
            </div>
          </div>
          <div id="locationInput">
            <label htmlFor='location'>Location:</label>
            <input id='location' type='text' name='location' value={educationLocation} placeholder='Enter Location' />
          </div>
        </form>
        <div className="editButton">
          <div className="deleteButtonContainer">
            <button className="deletebutton">Delete</button>
          </div>
          <div className="cancelSaveContainer">
            <button className="cancelButton">Cancel</button>
            <button className="saveButton">Save</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
