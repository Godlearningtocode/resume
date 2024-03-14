import { useState, useEffect } from "react";

export default function AppendEducationComponent() {
  const [expandEducationSection, setExpandEducationSection] = useState(false);
  const [addEducation, setAddEducation] = useState(false);
  const [school, setSchool] = useState("");
  const [degree, setdegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [educationLocation, setEducationLocation] = useState("");
  const [educationInfo, setEducationInfo] = useState("");
  const [educationDetailsArray, setEducationDetailsArray] = useState([]);

  function ChangeState() {
    expandEducationSection
      ? setExpandEducationSection(false)
      : setExpandEducationSection(true);

    document.querySelector(".expandImage").classList.toggle("active");

    if(expandEducationSection == false) {
      setAddEducation(false)
    }
  }

  function ChangeEducationState() {
    addEducation ? setAddEducation(false) : setAddEducation(true);
  }

  function InputReset() {
    setSchool("");
    setdegree("");
    setStartDate("");
    setEndDate("");
    setEducationLocation("")
  }

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

  function StoreEducationInfo() {
    setEducationDetailsArray((educationDetailsArray) => [
      ...educationDetailsArray,
      educationInfo,
    ]);
    ChangeEducationState();
  }

  return (
    <div>
      <div id="educationInputSection">
        <div className="inputContainer">
          <button className="expandButton" onClick={ChangeState}>
            <div className="heading">Education</div>
            <img
              src="src/assets/down-arrow.png"
              alt=""
              className="expandImage"
              width={50 + "px"}
              height={50 + "px"}
            />
          </button>
          {expandEducationSection && (
            <div className="addSectionContainer">
              <div>
                {educationDetailsArray.map((element, i) => (
                  <div key={i} className={"displayEducation"}>
                    {element.school}
                  </div>
                ))}
              </div>
              <button id="addEducationButton" onClick={ChangeEducationState}>
                + Education
              </button>
            </div>
          )}
          {expandEducationSection && addEducation && (
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
                <div className="timeInput">
                  <div className="timeLeftSide">
                    <label htmlFor="startDateEducation">Start Date:</label>
                    <input
                      id="startDateEducation"
                      type="text"
                      name="startDateEducation"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      placeholder="Enter Start Date"
                    />
                  </div>
                  <div className="timeRightSide">
                    <label htmlFor="endDateEducation">End State:</label>
                    <input
                      id="endDateEducation"
                      type="text"
                      name="endDateEducation"
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
                  <button className="deleteButton" onClick={InputReset}>Delete</button>
                </div>
                <div className="cancelSaveContainer">
                  <button
                    className="cancelButton"
                    onClick={ChangeEducationState}
                  >
                    Cancel
                  </button>
                  <button className="saveButton" onClick={StoreEducationInfo}>
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
