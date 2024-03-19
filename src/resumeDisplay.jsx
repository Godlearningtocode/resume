import { useEffect } from "react";

/* eslint-disable react/prop-types */
export default function DisplayResume({
  personalDetailsInfo,
  educationDetailsInfo,
  experienceDetailsInfo,
  myColor,
  myFont,
}) {
  function DisplayEducationResume() {
    return (
      <div id="educationDetailsSection">
        <div id="educationHeading">Education</div>
        <div id="educationContainer">
          {educationDetailsInfo.map((element, i) => {
            return (
              <div
                className="educationCard"
                key={element.school + element.degree + i}
              >
                <div className="educationCardLeft">
                  <div className="timePeriod">
                    {element.startDate} - {element.endDate}
                  </div>
                  <div className="displayLocationEducation">
                    {element.location}
                  </div>
                </div>
                <div className="educationCardRight">
                  <div className="educationSchool">{element.school}</div>
                  <div className="educationDegree">{element.degree}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  function DisplayExperienceResume() {
    return (
      <div id="experienceDetailsSection">
        <div id="experienceHeading">Professional Experience</div>
        <div id="experienceContainer">
          {experienceDetailsInfo.map((element, i) => {
            return (
              <div className="experienceCard" key={i}>
                <div className="experienceCardLeft">
                  <div className="timePeriod">
                    {element.startDate} - {element.endDate}
                  </div>
                  <div className="displayLocationEducation">
                    {element.companyLocation}
                  </div>
                </div>
                <div className="experienceCardRight">
                  <div className="experienceCompanyName">
                    {element.companyName}
                  </div>
                  <div className="experiencePositionTitle">
                    {element.positionTitle}
                  </div>
                  <div className="experienceDescription">
                    {element.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  function DisplayPersonalDetails() {
    return (
      <div id="personalDetailsSection" style={{ backgroundColor: myColor }}>
        {personalDetailsInfo.validity === 1 && <div id="personalDetailsContainer">
        <div className="topSection">
          <div id="nameHeading">{personalDetailsInfo.fullName}</div>
        </div>
        <div className="bottomSection">
          <div id="emailContainer">
            <div id="emailHeading">
              <h3 className="emailEmoji">✉️ </h3>
              {personalDetailsInfo.email}
            </div>
          </div>
          <div id="numberSection">
            <div id="phoneHeading">
              <h3 className="phoneEmoji">📞</h3>
              {personalDetailsInfo.phoneNumber}
            </div>
          </div>
          <div id="locationContainer">
            <div id="locationHeading">
              <h3 className="locationEmoji">📍</h3>
              {personalDetailsInfo.address}
            </div>
          </div>
        </div>
        </div>}
      </div>
    );
  }

  return (
    <div id="resumeSection" style={{ fontFamily: myFont }}>
      {personalDetailsInfo && <DisplayPersonalDetails />}
      {educationDetailsInfo.length > 0 && <DisplayEducationResume />}
      {experienceDetailsInfo.length > 0 && <DisplayExperienceResume />}
    </div>
  );
}
