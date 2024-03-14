import { useState, useEffect } from "react";

export default function AppendExperienceComponent() {
  const [expandExperienceSection, setExpandExperienceSection] = useState(false);
  const [addExperience, setAddExperience] = useState(false);
  const [experienceDetailsArray, setExperienceDetailsArray] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [description, setDescription] = useState("");
  const [experienceInfo, setExperienceInfo] = useState("");

  function DisplayAddExperience() {
    expandExperienceSection
      ? setExpandExperienceSection(false)
      : setExpandExperienceSection(true);
  }

  function ChangeExperienceState() {
    addExperience ? setAddExperience(false) : setAddExperience(true);
  }

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

  function StoreExperienceInfo() {
    setExperienceDetailsArray((experienceDetailsArray) => [
      ...experienceDetailsArray,
      experienceInfo,
    ]);
    ChangeExperienceState();
  }

  return (
    <div>
      <div id="experienceInputSection">
        <div className="inputContainer">
          <button className="expandButton" onClick={DisplayAddExperience}>
            <div className="heading">Experience</div>
            <img
              src="src/assets/down-arrow.png"
              alt="downward arrow"
              className="expandImage"
              width={50 + "px"}
              height={50 + "px"}
            />
          </button>
          {expandExperienceSection && (
            <div className="addSectionContainer">
              <div>
                {experienceDetailsArray.map((element, i) => (
                  <div key={"experience" + i} className="displayExperience">
                    {element.companyname}
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
