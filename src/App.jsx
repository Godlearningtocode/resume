import { useEffect, useState } from "react";
import AppendEducationComponent from "./education";
import AppendExperienceComponent from "./experience";
import AppendPersonalComponent from "./personal";
import "./App.css";

function App() {
  const [resumeDetails, setResumeDetails] = useState([]);

  return (
    <>
      <div id="mainSection">
        <div id="leftSide">
          <div id="customSection">
            <div className="navButtonContainer">
              <img
                src="src/assets/contentBlack.png"
                alt="Content Page"
                className="navButtonImage"
              />
              <p id="contentText">Content</p>
            </div>
            <div className="navButtonContainer">
              <img
                src="src/assets/custom.png"
                alt="Customize"
                className="navButtonImage"
              />
              <p id="customizeText">Customize</p>
            </div>
          </div>
          <div id="inputSection">
            <div id="displayInputButtons">
              <div className="displayInputContainer">
                <img
                  src="src/assets/trash.png"
                  alt=""
                  className="displayButton"
                />
                <div id="cleanResume">Clear Resume</div>
              </div>
              <div className="displayInputContainer">
                <img
                  src="src/assets/display.png"
                  alt=""
                  className="displayButton"
                />
                <div id="loadResume">Load Resume</div>
              </div>
            </div>
            <div id="inputContainer">
              <AppendPersonalComponent />
              <AppendEducationComponent />
              <AppendExperienceComponent />
            </div>
          </div>
        </div>
        <div id="rightSide">
          <div id="displaySection"></div>
        </div>
      </div>
    </>
  );
}

export default App;
