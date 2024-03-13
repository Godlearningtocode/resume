import { useEffect, useState } from "react";
import AppendEducationComponent from "./education";
import AppendExperienceComponent from "./experience";
import "./App.css";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [resumeDetails, setResumeDetails] = useState([])
  let personalDetailsInfo;

  function StorePersonalDetails() {
    let info = {
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
    };

    personalDetailsInfo = info;
    console.log(personalDetailsInfo);
  }

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
                      pattern="[0-9]{10}"
                      maxLength={10}
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
                <div className="cancelSaveContainer">
                  <button className="cancelButton">Cancel</button>
                  <button className="saveButton" onClick={StorePersonalDetails}>
                    Save
                  </button>
                </div>
              </div>
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
