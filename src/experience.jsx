/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import downArrow from "/down-arrow.png"
import trash from "/trash.png"

export default function AppendExperienceComponent({
  experienceDetailsInfo,
  setExperienceDetailsInfo,
}) {
  const [expandExperienceSection, setExpandExperienceSection] = useState(false);
  const [addExperience, setAddExperience] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [description, setDescription] = useState("");
  const [experienceInfo, setExperienceInfo] = useState("");

  useEffect(() => {
    const clearResume = document.querySelector("#clearResumeContainer");
    clearResume.addEventListener('click', () => {
      setExperienceDetailsInfo([])
    })
  }, [companyName, positionTitle, startDate, endDate, companyLocation, description]);

  function DisplayAddExperience() {
    expandExperienceSection
      ? setExpandExperienceSection(false)
      : setExpandExperienceSection(true);

    document.querySelector(".experienceExpandImage").classList.toggle("active");

    if (expandExperienceSection == false) {
      setAddExperience(false);
    }
  }

  function ChangeExperienceState() {
    addExperience ? setAddExperience(false) : setAddExperience(true);
  }

  function InputReset() {
    setCompanyName("");
    setPositionTitle("");
    setStartDate("");
    setEndDate("");
    setCompanyLocation("");
    setDescription("");
  }

  useEffect(() => {
    let info = {
      companyName: companyName,
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

  function DeleteExperience(event) {
    let dummy = experienceDetailsInfo.filter((item) => event.target.parentNode.parentNode.firstChild.textContent !== item.companyName);
    setExperienceDetailsInfo(dummy)
  }

  function StoreExperienceInfo() {
    setExperienceDetailsInfo((experienceDetailsInfo) => [
      ...experienceDetailsInfo,
      experienceInfo,
    ]);
    ChangeExperienceState();
    InputReset();
  }

  return (
    <div>
      <div id="experienceInputSection">
        <div className="inputContainer">
          <button className="expandButton" onClick={DisplayAddExperience}>
            <div className="heading">Experience</div>
            <img
              src={downArrow}
              alt="downward arrow"
              className="expandImage experienceExpandImage"
              width={50 + "px"}
              height={50 + "px"}
            />
          </button>
          {expandExperienceSection && (
            <div className="addSectionContainer">
              <div id="displayExpreienceContainer">
                {experienceDetailsInfo.map((element, i) => (
                  <div key={element.companyName + element.positionTitle + i} className="displayExperienceCard">
                    <div className="displayExperience">{element.companyName}</div>
                    <div className="deleteExperienceContainer" onClick={DeleteExperience}>
                      <img src={trash} alt="" className="deleteExperienceImage" />
                    </div>
                  </div>
                ))}
              </div>
              <button id="addExperienceButton" onClick={ChangeExperienceState}>
                + Experience
              </button>
            </div>
          )}
          {expandExperienceSection && addExperience && (
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
                <div className="timeInput">
                  <div className="timeLeftSide">
                    <label htmlFor="startDateExperience">Start Date:</label>
                    <input
                      type="text"
                      name="startDateExperience"
                      id="startDateExperience"
                      placeholder="Enter Start Date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                  <div className="timeRightSide">
                    <label htmlFor="endDateExperience">End Date:</label>
                    <input
                      type="text"
                      name="endDateExperience"
                      id="endDateExperience"
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
                  <textarea                     type="textarea"
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
                  <button className="deleteButton" onClick={InputReset}>
                    Delete
                  </button>
                </div>
                <div className="cancelSaveContainer">
                  <button
                    className="cancelButton"
                    onClick={ChangeExperienceState}
                  >
                    Cancel
                  </button>
                  <button className="saveButton" onClick={StoreExperienceInfo}>
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
