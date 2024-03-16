/* eslint-disable react/prop-types */
export default function DisplayResume({
  personalDetailsInfo,
  educationDetailsInfo,
  experienceDetailsInfo,
}) {
  console.log(educationDetailsInfo, experienceDetailsInfo);

  return (
    <div id="resumeSection">
      <div id="personalDetailsSection">
        <div className="topSection">
          <div id="nameHeading">{personalDetailsInfo.fullName}</div>
        </div>
        <div className="bottomSection">
          <div id="emailContainer">
            <img src="" alt="" className="emailLogo" />
            <div id="emailHeading">{personalDetailsInfo.email}</div>
          </div>
          <div id="numberSection">
            <img src="" alt="" className="phoneLogo" />
            <div id="phoneHeading">{personalDetailsInfo.phoneNumber}</div>
          </div>
          <div id="locationContainer">
            <img src="" alt="" className="locationLogo" />
            <div className="locationHeading">{personalDetailsInfo.address}</div>
          </div>
        </div>
      </div>
      <div id="educationDetailsSection">
        <div id="educationHeading">Education</div>
        <div id="educationContainer">
          {educationDetailsInfo.map((element, i) => {
            return (
              <div className="educationCard" key={i}>
                <div className="educationCardLeft">
                  <div className="timePeriod">
                    {element.startDate} - {element.endDate}
                  </div>
                  <div className="displayLocationEducation">
                    {element.location}
                  </div>
                </div>
                <div className="educationCardRight">
                  {" "}
                  {console.log(element)}
                  <div className="educationSchool">{element.school}</div>
                  <div className="educationDegree">{element.degree}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
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
                  <div className="experienceCompanyName">{element.companyName}</div>
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
    </div>
  );
}
