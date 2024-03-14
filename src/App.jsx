import { useEffect, useState } from "react";
import AppendEducationComponent from "./education";
import AppendExperienceComponent from "./experience";
import AppendPersonalComponent from "./personal";
import "./App.css";

function App() {
  const [resumeDetails, setResumeDetails] = useState([]);

  function CustomPageRender() {
    if(document.querySelector('.activeSection')) {
      document.querySelector('.activeSection').classList.remove('activeSection');
      document.querySelector('#customizeSection').classList.add('activeSection')
    }
  }

  function ContentPageRender() {
    if(document.querySelector('.activeSection')) {
      document.querySelector('.activeSection').classList.remove('activeSection');
      document.querySelector('#contentSection').classList.add('activeSection')
    }
  }

  return (
    <>
      <div id="mainSection">
        <div id="leftSide">
          <div id="customSection">
            <div className="activeSection navButtonContainer" id="contentSection" onClick={ContentPageRender}>
              <img
                src="src/assets/contentBlack.png"
                alt="Content Page"
                className="navButtonImage"
              />
              <div id="contentText">Content</div>
            </div>
            <div className="navButtonContainer" id="customizeSection" onClick={CustomPageRender}>
              <img
                src="src/assets/custom.png"
                alt="Customize"
                className="navButtonImage"
              />
              <div id="customizeText">Customize</div>
            </div>
          </div>
          <div id="inputSection">
            <div id="displayInputButtons">
              <div className="displayInputContainer" id="clearResumeContainer">
                <img
                  src="src/assets/trash.png"
                  alt=""
                  className="displayButton"
                />
                <div id="clearResume">Clear Resume</div>
              </div>
              <div className="displayInputContainer" id="loadResumeContainer">
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
