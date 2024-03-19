import { useState } from "react";
import AppendEducationComponent from "./education";
import AppendExperienceComponent from "./experience";
import AppendPersonalComponent from "./personal";
import DisplayResume from "./resumeDisplay";
import CustomizeComponent from "./customize";
import "./App.css";

function ClearResumeButton() {
  setSchool("");
  setdegree("");
  setStartDate("");
  setEndDate("");
  setEducationLocation("");
  setCompanyName("");
  setPositionTitle("");
  setStartDate("");
  setEndDate("");
  setCompanyLocation("");
  setDescription("");
  setFullName("");
  setEmail("");
  setPhoneNumber("");
  setAddress("");
}

function App() {
  const [toggleInput, setToggleInput] = useState(false);
  const [personalDetailsInfo, setPersonalDetailsInfo] = useState([]);
  const [educationDetailsInfo, setEducationDetailsInfo] = useState([]);
  const [experienceDetailsInfo, setExperienceDetailsInfo] = useState([]);
  const [myFont, setMyFont] = useState("Serif");
  const [myColor, setMyColor] = useState("#dcae96");
  const [fontColor, setFontColor] = useState('#0A192F')

  function CustomPageRender() {
    if (document.querySelector(".activeSection")) {
      document
        .querySelector(".activeSection")
        .classList.remove("activeSection");
      document
        .querySelector("#customizeSection")
        .classList.add("activeSection");
      setToggleInput(true);
    }
  }

  function ContentPageRender() {
    if (document.querySelector(".activeSection")) {
      document
        .querySelector(".activeSection")
        .classList.remove("activeSection");
      document.querySelector("#contentSection").classList.add("activeSection");
      setToggleInput(false);
    }
  }

  function ToggleDisplay() {
    return toggleInput == true ? (
      <CustomizeComponent
        myColor={myColor}
        setMyColor={setMyColor}
        myFont={myFont}
        setMyFont={setMyFont}
        fontColor={fontColor}
        setFontColor={setFontColor}
      />
    ) : (
      <div id="inputContainer">
        <AppendPersonalComponent
          personalDetailsInfo={personalDetailsInfo}
          setPersonalDetailsInfo={setPersonalDetailsInfo}
        />
        <AppendEducationComponent
          educationDetailsInfo={educationDetailsInfo}
          setEducationDetailsInfo={setEducationDetailsInfo}
        />
        <AppendExperienceComponent
          experienceDetailsInfo={experienceDetailsInfo}
          setExperienceDetailsInfo={setExperienceDetailsInfo}
        />
      </div>
    );
  }

  return (
    <>
      <div id="mainSection">
        <div id="leftSide">
          <div id="customSection">
            <div
              className="activeSection navButtonContainer"
              id="contentSection"
              onClick={ContentPageRender}
            >
              <img
                src="src/assets/contentBlack.png"
                alt="Content Page"
                className="navButtonImage"
              />
              <div id="contentText">Content</div>
            </div>
            <div
              className="navButtonContainer"
              id="customizeSection"
              onClick={CustomPageRender}
            >
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
            <ToggleDisplay />
          </div>
        </div>
        <div id="rightSide">
          <div id="displaySection">
            <DisplayResume
              personalDetailsInfo={personalDetailsInfo}
              educationDetailsInfo={educationDetailsInfo}
              experienceDetailsInfo={experienceDetailsInfo}
              myColor={myColor}
              myFont={myFont}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
