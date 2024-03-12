import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [expandEducationSection, setExpandEducationSection] = useState(false);
  const [addEducation, setAddEducation] = useState(false);
  const [expandExperienceSection, setExpandExperienceSection] = useState(false);
  const [addExperience, setAddExperience] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

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
                <form id="personalForm">
                  <div className="fullNameInput">
                    <label htmlFor="fullName">Full Name:</label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      name="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="First and Last name"
                    />
                  </div>
                  <div id="emailInput">
                    <label htmlFor="email">Email:</label>
                    <input
                      id="email"
                      type="email"
                      required
                      name="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Email"
                    />
                  </div>
                  <div id="phoneNumberInput">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                      id="phoneNumber"
                      type="tel"
                      required
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Enter Phone Number"
                    />
                  </div>
                  <div id="adressInput">
                    <label htmlFor="address">Address:</label>
                    <input
                      id="address"
                      type="text"
                      required
                      name="address"
                      autoComplete="address-level1"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter City and Country"
                    />
                  </div>
                </form>
              </div>
              <div id="educationInput">
                <button className="expandButton" onClick={ChangeState}>
                  <h2>Education</h2>
                  <img
                    src="src/assets/down-arrow.png"
                    alt=""
                    className="expandImage"
                    width={50 + "px"}
                    height={50 + "px"}
                  />
                </button>
                {expandEducationSection ? (
                  <button
                    id="addEducationButton"
                    onClick={ChangeEducationState}
                  >
                    + Education
                  </button>
                ) : (
                  ""
                )}
                {expandEducationSection && addEducation ? (
                  <AddEducationComponent />
                ) : (
                  ""
                )}
              </div>
              <div id="experienceInput">
                <button className="expandButton" onClick={DisplayAddExperience}>
                  <h2>Experience</h2>
                  <img
                    src="src/assets/down-arrow.png"
                    alt="downward arrow"
                    className="expandImage"
                    width={50 + "px"}
                    height={50 + "px"}
                  />
                </button>
                {expandExperienceSection ? (
                  <button
                    id="addExperienceButton"
                    onClick={ChangeExperienceState}
                  >
                    + Experience
                  </button>
                ) : (
                  ""
                )}
                {expandExperienceSection && addExperience ? (
                  <AddExperienceComponent />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        <div id="rightSide">
          <div id="displaySection"></div>
        </div>
      </div>
    </>
  );

  function ChangeState() {
    expandEducationSection
      ? setExpandEducationSection(false)
      : setExpandEducationSection(true);
  }

  function ChangeEducationState() {
    addEducation ? setAddEducation(false) : setAddEducation(true);
  }

  function DisplayAddExperience() {
    expandExperienceSection
      ? setExpandExperienceSection(false)
      : setExpandExperienceSection(true);
  }

  function ChangeExperienceState() {
    addExperience ? setAddExperience(false) : setAddExperience(true);
  }

  function AddEducationComponent() {
    const [school, setSchool] = useState("");
    const [degree, setdegree] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [educationLocation, setEducationLocation] = useState("");
    const [educationInfo, setEducationInfo] = useState("");

    useEffect(() => {
      let info = {
        school: school,
        degree: degree,
        startDate: startDate,
        endDate: endDate,
        location: educationLocation,
      };

      setEducationInfo(info);
    }, [school, degree, startDate, endDate, educationLocation]);

    return (
      <div id="educationInput">
        <form id="educationForm">
          <div id="schoolInput">
            <label htmlFor="school">School:</label>
            <input
              id="school"
              type="text"
              name="school"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              placeholder="Enter School or University"
            />
          </div>
          <div id="degreeInput">
            <label htmlFor="degree">Degree:</label>
            <input
              id="degree"
              type="text"
              name="degree"
              value={degree}
              onChange={(e) => setdegree(e.target.value)}
              placeholder="Enter Degree or field of study"
            />
          </div>
          <div id="timeinput">
            <div id="timeLeftSide">
              <label htmlFor="startDate">Start Date:</label>
              <input
                id="startDate"
                type="text"
                name="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="Enter Start Date"
              />
            </div>
            <div id="timeRightSide">
              <label htmlFor="endDate">End State:</label>
              <input
                id="endDate"
                type="text"
                name="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                placeholder="Enter End Date"
              />
            </div>
          </div>
          <div id="locationInput">
            <label htmlFor="location">Location:</label>
            <input
              id="location"
              type="text"
              name="location"
              value={educationLocation}
              onChange={(e) => setEducationLocation(e.target.value)}
              placeholder="Enter Location"
            />
          </div>
        </form>
        <div className="editButton">
          <div className="deleteButtonContainer">
            <button className="deletebutton">Delete</button>
          </div>
          <div className="cancelSaveContainer">
            <button className="cancelButton" onClick={ChangeEducationState}>
              Cancel
            </button>
            <button className="saveButton">Save</button>
          </div>
        </div>
      </div>
    );
  }

  function AddExperienceComponent() {
    const [companyName, setCompanyName] = useState("");
    const [positionTitle, setPositionTitle] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [companyLocation, setCompanyLocation] = useState("");
    const [description, setDescription] = useState("");
    const [experienceInfo, setExperienceInfo] = useState("");

    useEffect(() => {
      let info = {
        companyname: companyName,
        positionTitle: positionTitle,
        startDate: startDate,
        endDate: endDate,
        companyLocation: companyLocation,
        description: description,
      };

      setExperienceInfo(info);
    }, [
      companyName,
      positionTitle,
      startDate,
      endDate,
      companyLocation,
      description,
    ]);

    function Aaa() {
      console.log(experienceInfo);
    }

    return (
      <div id="experienceInput">
        <form action="" id="experienceForm">
          <div id="companyInput">
            <label htmlFor="companyName">Company Name:</label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              placeholder="Enter Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div id="positionInput">
            <label htmlFor="position">Position Title:</label>
            <input
              type="text"
              name="positon"
              id="position"
              placeholder="Enter Position Title"
              value={positionTitle}
              onChange={(e) => setPositionTitle(e.target.value)}
            />
          </div>
          <div id="timeInputEx">
            <div id="timeLeftSide">
              <label htmlFor="startDate">Start Date:</label>
              <input
                type="text"
                name="startDate"
                id="startDate"
                placeholder="Enter Start Date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div id="timeRightSide">
              <label htmlFor="endDate">End Date:</label>
              <input
                type="text"
                name="endDate"
                id="endDate"
                placeholder="Enter End Date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
          <div id="locationInput">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Enter Location"
              value={companyLocation}
              onChange={(e) => setCompanyLocation(e.target.value)}
            />
          </div>
          <div id="description">
            <label htmlFor="experienceDescription">Description: </label>
            <input
              type="text"
              id="experienceDescription"
              name="experienceDescription"
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </form>
        <div className="editButton">
          <div className="deleteButtonContainer">
            <button className="deleteButton">Delete</button>
          </div>
          <div className="cancelSaveContainer">
            <button className="cancelButton" onClick={ChangeExperienceState}>
              Cancel
            </button>
            <button className="saveButton" onClick={console.log(experienceInfo)}>
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
